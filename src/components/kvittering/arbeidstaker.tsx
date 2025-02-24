import { Alert, Heading } from '@navikt/ds-react'
import { logger } from '@navikt/next-logger'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppStore } from '../../data/stores/app-store'
import { RSMottaker } from '../../types/rs-types/rs-mottaker'
import { RSSoknadstatus } from '../../types/rs-types/rs-soknadstatus'
import { RSSoknadstype } from '../../types/rs-types/rs-soknadstype'
import { sendtForMerEnn30DagerSiden } from '../../utils/dato-utils'
import { AuthenticationError, fetchJsonMedRequestId } from '../../utils/fetch'
import { tekst } from '../../utils/tekster'
import Vis from '../vis'
import { RouteParams } from '../../app'
import useSoknad from '../../hooks/useSoknad'
import useSoknader from '../../hooks/useSoknader'
import { RSSoknadmetadata } from '../../types/rs-types/rs-soknadmetadata'

import Inntil16dager from './innhold/arbeidstaker/inntil16dager'
import Over16dager from './innhold/arbeidstaker/over16dager'
import PerioderMedOpphold from './innhold/arbeidstaker/perioder-med-opphold'
import PerioderUtenOpphold from './innhold/arbeidstaker/perioder-uten-opphold'
import ArbeidstakerStatus from './status/arbeidstaker-status'

type ArbeidstakerKvitteringTekst = 'inntil16dager' | 'over16dager' | 'utenOpphold' | 'medOpphold' | undefined

const Arbeidstaker = () => {
    const { id } = useParams<RouteParams>()
    const { data: valgtSoknad } = useSoknad(id)
    const { data: soknader } = useSoknader()
    const { valgtSykmelding } = useAppStore()
    const [kvitteringTekst, setKvitteringTekst] = useState<ArbeidstakerKvitteringTekst>()

    const erInnenforArbeidsgiverperiode = () => {
        if (!valgtSoknad) return

        return valgtSoknad.sendtTilArbeidsgiverDato !== undefined && !valgtSoknad.sendtTilNAVDato
    }

    const erSykmeldingperiodeDeltOverFlereSoknader = () => {
        const fom = dayjs(valgtSoknad!.fom).date()
        const sykFom = dayjs(valgtSykmelding!.sykmeldingsperioder[0].fom).date()
        return fom !== sykFom
    }

    const tidligereSoknaderInnenfor16Dager = (d1: Date, d2: Date): boolean => {
        return dayjs(d2).diff(d1, 'day') <= 16
    }

    const harTidligereUtenOpphold = (tidligereSoknader: RSSoknadmetadata[]) => {
        return tidligereSoknader.filter((sok) => dayjs(valgtSoknad!.fom!).diff(sok.tom!, 'day') <= 1).length > 0
    }

    const utenOppholdSjekkArbeidsgiverperiode = async (tidligereSoknader: RSSoknadmetadata[]) => {
        if (!valgtSoknad) return

        const forrigeSoknad = tidligereSoknader.find((sok) => dayjs(valgtSoknad.fom).diff(sok.tom!, 'day') <= 1)
        const forste = await erForsteSoknadUtenforArbeidsgiverperiode(forrigeSoknad?.id)
        if (forste) {
            setKvitteringTekst('over16dager')
        } else {
            setKvitteringTekst('utenOpphold')
        }
    }

    const medOppholdSjekkArbeidsgiverperiode = async (tidligereSoknader: RSSoknadmetadata[]) => {
        const forrigeSoknad = tidligereSoknader.sort((a, b) => a.tom!.getTime() - b.tom!.getTime()).reverse()[0]
        const forste = await erForsteSoknadUtenforArbeidsgiverperiode(forrigeSoknad?.id)
        if (forste) {
            setKvitteringTekst('over16dager')
        } else {
            setKvitteringTekst('medOpphold')
        }
    }

    async function erForsteSoknadUtenforArbeidsgiverperiode(id?: string) {
        if (id === undefined) {
            return true
        }

        let data
        try {
            data = await fetchJsonMedRequestId(
                `/syk/sykepengesoknad/api/sykepengesoknad-backend/api/v2/soknader/${id}/mottaker`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                },
            )
        } catch (e: any) {
            if (!(e instanceof AuthenticationError)) {
                logger.warn(e)
            }
            return
        }
        return data.mottaker === RSMottaker.ARBEIDSGIVER
    }

    const kvitteringInnhold = () => {
        switch (kvitteringTekst) {
            case 'inntil16dager':
                return <Inntil16dager />
            case 'over16dager':
                return <Over16dager erGradert={valgtSoknad?.soknadstype === RSSoknadstype.GRADERT_REISETILSKUDD} />
            case 'utenOpphold':
                return <PerioderUtenOpphold />
            case 'medOpphold':
                return <PerioderMedOpphold />
            default:
                return null
        }
    }

    const settRiktigKvitteringTekst = useCallback(async () => {
        if (!valgtSoknad || !valgtSykmelding || !soknader) return

        if (erInnenforArbeidsgiverperiode()) {
            setKvitteringTekst('inntil16dager')
        } else {
            if (erSykmeldingperiodeDeltOverFlereSoknader()) {
                setKvitteringTekst('utenOpphold')
            } else {
                const tidligereSoknader = soknader
                    .filter((sok) => sok.status !== RSSoknadstatus.UTGAATT) // Vi sjekker ikke utgåtte søknader
                    .filter((sok) => sok.soknadstype === RSSoknadstype.ARBEIDSTAKERE) // Gjelder arbeidstakersøknad
                    .filter((sok) => sok.arbeidsgiver?.orgnummer === valgtSoknad?.arbeidsgiver?.orgnummer) // Samme arbeidstaker
                    .filter((senereSok) => senereSok.tom! < valgtSoknad!.fom!) // Gjelder søknader før valgt
                    .filter((tidligereSok) => tidligereSoknaderInnenfor16Dager(tidligereSok.tom!, valgtSoknad.fom!))
                if (tidligereSoknader.length > 0) {
                    if (harTidligereUtenOpphold(tidligereSoknader)) {
                        await utenOppholdSjekkArbeidsgiverperiode(tidligereSoknader)
                    } else {
                        await medOppholdSjekkArbeidsgiverperiode(tidligereSoknader)
                    }
                } else {
                    setKvitteringTekst('over16dager')
                }
            }
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        settRiktigKvitteringTekst().catch((e: Error) => logger.error(e))
    }, [settRiktigKvitteringTekst, valgtSoknad?.sendtTilNAVDato])

    if (!valgtSoknad || !soknader) return null

    return (
        <>
            <Alert variant="success">
                <Heading size="small" level="2">
                    {tekst('kvittering.soknaden-er-sendt')}
                </Heading>
            </Alert>

            <div className="sendt-info">
                <ArbeidstakerStatus />

                <Vis
                    hvis={
                        !sendtForMerEnn30DagerSiden(valgtSoknad.sendtTilArbeidsgiverDato, valgtSoknad.sendtTilNAVDato)
                    }
                    render={() => {
                        return (
                            <div className="hva-skjer">
                                <Alert variant="info" size="small">
                                    <Vis
                                        hvis={kvitteringTekst === 'medOpphold'}
                                        render={() => (
                                            <Heading size="small" level="3">
                                                {tekst('kvittering.viktig-informasjon')}
                                            </Heading>
                                        )}
                                    />
                                    <Vis
                                        hvis={kvitteringTekst !== 'medOpphold'}
                                        render={() => (
                                            <Heading size="small" level="3">
                                                {tekst('kvittering.hva-skjer-videre')}
                                            </Heading>
                                        )}
                                    />
                                </Alert>

                                <div className="avsnitt">
                                    <div className="sendt-inner">{kvitteringInnhold()}</div>
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
        </>
    )
}

export default Arbeidstaker
