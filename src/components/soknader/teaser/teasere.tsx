import { Heading, Label } from '@navikt/ds-react'
import React, { useState } from 'react'

import { RSSoknadstatus } from '../../../types/rs-types/rs-soknadstatus'
import { sorterEtterNyesteFom, sorterEtterSendt, sorterEtterStatus } from '../../../utils/sorter-soknader'
import Vis from '../../vis'
import { RSSoknadmetadata } from '../../../types/rs-types/rs-soknadmetadata'

import FremtidigeSoknaderTeaser from './fremtidige-soknader-teaser'
import NyeSoknaderTeaser from './nye-soknader-teaser'
import TidligereSoknaderTeaser from './tidligere-soknader-teaser'
import UtgaattSoknaderTeaser from './utgatt-soknader-teaser'

interface SoknaderTeasereProps {
    soknader: RSSoknadmetadata[]
    className?: string
    tittel: string
    tomListeTekst?: string
    id: string
    kanSorteres?: boolean
}

enum Sortering {
    Dato = 'Dato',
    Status = 'Status',
    Sendt = 'Sendt',
}

const Teasere = ({ soknader, className, tittel, tomListeTekst, id, kanSorteres = false }: SoknaderTeasereProps) => {
    const [sortering, setSortering] = useState<Sortering>(Sortering.Dato)

    const sorterteSoknader = () => {
        if (kanSorteres) {
            if (sortering === 'Dato') {
                return soknader.sort(sorterEtterNyesteFom)
            } else if (sortering === 'Status') {
                return soknader.sort(sorterEtterStatus)
            } else if (sortering === 'Sendt') {
                return soknader.sort(sorterEtterSendt)
            }
        }
        return soknader
    }

    return (
        <>
            <header className="teasere__header">
                <Vis
                    hvis={kanSorteres && sorterteSoknader().length > 0}
                    render={() => (
                        <div className="skjemaelement inngangspanel__sortering">
                            <label className="skjemaelement__label" htmlFor="select_sort">
                                Sorter etter
                            </label>
                            <div className="selectContainer input--fullbredde">
                                <select
                                    id="select_sort"
                                    className="skjemaelement__input"
                                    onChange={(event) => setSortering(event.target.value as Sortering)}
                                >
                                    {Object.values(Sortering).map((sort, idx) => {
                                        return (
                                            <option value={sort} key={idx}>
                                                {sort}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    )}
                />

                <Vis
                    hvis={sorterteSoknader().length > 0 || tomListeTekst}
                    render={() => (
                        <Heading size="small" level="2" className="teasere__header__tittel">
                            {tittel}
                        </Heading>
                    )}
                />
            </header>

            <div id={id} className={className}>
                {sorterteSoknader().map((soknad, idx) => {
                    switch (soknad.status) {
                        case RSSoknadstatus.FREMTIDIG:
                            return <FremtidigeSoknaderTeaser key={idx} soknad={soknad} />
                        case RSSoknadstatus.SENDT:
                        case RSSoknadstatus.AVBRUTT:
                            return <TidligereSoknaderTeaser key={idx} soknad={soknad} />
                        case RSSoknadstatus.UTGAATT:
                            return <UtgaattSoknaderTeaser key={idx} soknad={soknad} />
                        default:
                            return <NyeSoknaderTeaser key={idx} soknad={soknad} />
                    }
                })}
                <Vis
                    hvis={soknader.length === 0}
                    render={() => <Label className="inngangspanel inngangspanel--tomListe">{tomListeTekst}</Label>}
                />
            </div>
        </>
    )
}

export default Teasere
