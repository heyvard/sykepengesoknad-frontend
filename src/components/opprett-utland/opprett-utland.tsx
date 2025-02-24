import { Alert, Button, Heading } from '@navikt/ds-react'
import { logger } from '@navikt/next-logger'
import parser from 'html-react-parser'
import React from 'react'
import { useHistory } from 'react-router'
import { useQueryClient } from '@tanstack/react-query'

import { useAppStore } from '../../data/stores/app-store'
import { Soknad } from '../../types/types'
import { AuthenticationError, fetchJsonMedRequestId } from '../../utils/fetch'
import { tekst } from '../../utils/tekster'
import { urlTilSoknad } from '../soknad/soknad-link'
import Bjorn from '../sporsmal/bjorn/bjorn'
import Vis from '../vis'

const OpprettUtland = () => {
    const queryClient = useQueryClient()
    const { setFeilmeldingTekst, feilmeldingTekst } = useAppStore()

    const history = useHistory()

    const opprett = async () => {
        let data
        try {
            data = await fetchJsonMedRequestId(
                '/syk/sykepengesoknad/api/sykepengesoknad-backend/api/v2/opprettSoknadUtland',
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                },
            )
        } catch (e: any) {
            if (!(e instanceof AuthenticationError)) {
                setFeilmeldingTekst(tekst('opprett-utland.feilet'))
                logger.warn(e)
            }
            return
        } finally {
            setFeilmeldingTekst('')
        }

        const soknad = new Soknad(data)
        queryClient.setQueriesData(['soknad', soknad.id], soknad)
        queryClient.invalidateQueries(['soknader'])
        history.push(urlTilSoknad(soknad))
    }

    return (
        <div id="opprett_utland_main" className="opprett-utland">
            <div className="sidebanner sidebanner--utenramme">
                <div className="sidebanner__innhold blokk--xl">
                    <Bjorn nokkel="opprett-utland.bjorn" hvit={true} vertikal={true} stor={true} />
                </div>
            </div>
            <div className="begrensning">
                <header className="sidetopp">
                    <Heading spacing size="xlarge" level="1" className="opprett-utland__tittel">
                        {tekst('opprett-utland.tittel')}
                    </Heading>
                </header>

                <div className="panel blokk redaksjonelt-innhold">
                    {parser(tekst('opprett-utland.trenger-ikke-soke'))}
                </div>

                <div className="knapperad">
                    <Button variant="primary" type="button" onClick={opprett}>
                        {tekst('opprett-utland.fortsett')}
                    </Button>

                    <div aria-live="polite">
                        <Vis hvis={feilmeldingTekst} render={() => <Alert variant="error">{feilmeldingTekst}</Alert>} />
                    </div>

                    <a
                        className="blokk"
                        href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/personvern-i-arbeids-og-velferdsetaten"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {tekst('opprett-utland.personvern')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OpprettUtland
