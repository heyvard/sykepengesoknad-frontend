import 'nav-frontend-tabell-style'
import './fil-liste.less'

import dayjs from 'dayjs'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import React, { useEffect, useState } from 'react'
import useForceUpdate from 'use-force-update'

import { useAppStore } from '../../../data/stores/app-store'
import { Kvittering, Sporsmal, svarverdiToKvittering, UtgiftTyper } from '../../../types/types'
import env from '../../../utils/environment'
import fetcher from '../../../utils/fetcher'
import { logger } from '../../../utils/logger'
import { getLedetekst, tekst } from '../../../utils/tekster'
import { formatterTall } from '../../../utils/utils'
import { hentSvar } from '../../sporsmal/hent-svar'
import Vis from '../../vis'
import SlettFilIkon from './slettfil-ikon.svg'

interface Props {
    sporsmal: Sporsmal,
    fjernKnapp?: boolean,
}

const FilListe = ({ sporsmal, fjernKnapp }: Props) => {
    const { valgtSoknad, setValgtSoknad, setValgtKvittering, setOpenModal } = useAppStore()
    const forceUpdate = useForceUpdate()
    const kvitteringer: Kvittering[] = hentSvar(sporsmal)

    const slettKvittering = async(kvitto: Kvittering) => {
        try {
            const idx = sporsmal!.svarliste.svar.findIndex(svar => svarverdiToKvittering(svar?.verdi).blobId === kvitto.blobId)
            const svar = sporsmal?.svarliste.svar.find(svar => svarverdiToKvittering(svar?.verdi).blobId === kvitto.blobId)

            await fetcher(`${env.flexGatewayRoot}/syfosoknad/api/soknader/${valgtSoknad?.id}/sporsmal/${sporsmal?.id}/svar/${svar?.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            sporsmal.svarliste.svar.splice(idx, 1)
            valgtSoknad!.sporsmal[valgtSoknad!.sporsmal.findIndex(spm => spm.id === sporsmal.id)] = sporsmal
            setValgtSoknad(valgtSoknad)
            forceUpdate()
        } catch (error) {
            logger.error('Feil under sletting av kvittering', error)
        }
    }

    const visKvittering = (kvittering: Kvittering) => {
        setOpenModal(true)
        setValgtKvittering(kvittering)
    }


    const totaltBeløp = (): number => (kvitteringer
        ? kvitteringer
            .filter((kvittering) => kvittering.belop)
            .map((kvittering) => kvittering.belop!)
            .reduce((a, b) => a + b, 0.0)
        : (0.0)) / 100

    return (
        <Vis hvis={kvitteringer.length > 0}>
            <Normaltekst tag="table" className="tabell tabell--stripet fil_liste">
                <Vis hvis={fjernKnapp}>
                    <thead>
                        <tr>
                            <th role="columnheader" aria-sort="none">
                                Utgift
                            </th>
                            <th role="columnheader" className="belop">
                                Beløp
                            </th>
                            <th />
                        </tr>
                    </thead>
                </Vis>
                <tbody>
                    {kvitteringer.reverse().map((kvittering: Kvittering, idx) => (
                        <tr key={idx}>
                            <td className="transport">
                                <button type="button" tabIndex={0} className="lenkeknapp" onClick={() => visKvittering(kvittering)}>
                                    {UtgiftTyper[kvittering.typeUtgift]}
                                </button>
                            </td>
                            <td className="belop">
                                {formatterTall(kvittering.belop! / 100)} kr
                            </td>
                            <td>
                                <button className="lenkeknapp" type="button"
                                    onClick={() => slettKvittering(kvittering)} tabIndex={0}
                                >
                                    <img src={SlettFilIkon} alt="Slett" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tbody className="sumlinje">
                    <tr>
                        <td>
                            <Undertittel tag="span">
                                {getLedetekst(tekst('fil_liste.utlegg.sum'), {
                                    '%ANTALL_BILAG%': kvitteringer.length
                                })}
                            </Undertittel>
                        </td>
                        <td className="belop">
                            <Undertittel tag="span">
                                {formatterTall(totaltBeløp())} kr
                            </Undertittel>
                        </td>
                        <td />
                    </tr>
                </tbody>
            </Normaltekst>
        </Vis>
    )
}

export default FilListe
