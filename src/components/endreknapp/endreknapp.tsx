import { BodyShort, Button, Heading, Modal } from '@navikt/ds-react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import useFetch from '../../data/rest/use-fetch'
import { FetchState, hasData } from '../../data/rest/utils'
import { useAppStore } from '../../data/stores/app-store'
import { RSSoknad } from '../../types/rs-types/rs-soknad'
import { Soknad } from '../../types/types'
import { logger } from '../../utils/logger'
import { tekst } from '../../utils/tekster'
import { useAmplitudeInstance } from '../amplitude/amplitude'
import { urlTilSoknad } from '../soknad/soknad-link'

const Endreknapp = () => {
    const { valgtSoknad, soknader, setSoknader, setFeilmeldingTekst } = useAppStore()
    const korrigerSoknad = useFetch<RSSoknad>()
    const history = useHistory()
    const { logEvent } = useAmplitudeInstance()
    const [aapen, setAapen] = useState<boolean>(false)

    const [korrigerer, setKorrigerer] = useState<boolean>(false)
    const endreKnappTekst = tekst('kvittering.knapp.endre')

    const korriger = () => {
        if (korrigerer) return
        setKorrigerer(true)

        korrigerSoknad.fetch(
            `/syk/sykepengesoknad/api/sykepengesoknad-backend/api/v2/soknader/${valgtSoknad!.id}/korriger`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
            },
            (fetchState: FetchState<RSSoknad>) => {
                if (hasData(fetchState) && fetchState.httpCode >= 200 && fetchState.httpCode < 400) {
                    const soknad = new Soknad(fetchState.data)
                    if (!soknader.find((sok) => sok.id === soknad.id)) {
                        soknader.push(soknad)
                        setSoknader(soknader)
                    }
                    setAapen(false)
                    history.push(urlTilSoknad(soknad))
                    setFeilmeldingTekst('')
                } else {
                    logger.error(`Feil ved opprettelse av UTKAST_TIL_KORRIGERING ${fetchState.httpCode}`)
                    setFeilmeldingTekst(tekst('kvittering.korrigering.feilet'))
                }
                setKorrigerer(false)
            }
        )
    }
    const endreSøknadPopup = 'Endre søknad popup'

    return (
        <>
            <Button
                variant="tertiary"
                loading={korrigerer}
                onClick={() => {
                    logEvent('knapp klikket', {
                        tekst: endreKnappTekst,
                    })
                    setAapen(true)
                }}
            >
                {endreKnappTekst}
            </Button>
            <Modal
                className="modal__endre_popup"
                onClose={() => {
                    setAapen(false)
                    logEvent('modal lukket', {
                        component: endreSøknadPopup,
                        soknadstype: valgtSoknad?.soknadstype,
                    })
                }}
                open={aapen}
                aria-labelledby="modal-tittel"
            >
                <Modal.Content>
                    <Heading size="small" level="1" id="modal-tittel" spacing>
                        {endreKnappTekst}
                    </Heading>

                    <BodyShort>{tekst('endre.modal.info')}</BodyShort>

                    <Button
                        size="small"
                        variant="primary"
                        className="midtstilt-knapp"
                        onClick={(e) => {
                            e.preventDefault()
                            logEvent('knapp klikket', {
                                tekst: tekst('endre.modal.bekreft'),
                                soknadstype: valgtSoknad?.soknadstype,
                                component: endreSøknadPopup,
                            })
                            korriger()
                        }}
                    >
                        {tekst('endre.modal.bekreft')}
                    </Button>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default Endreknapp
