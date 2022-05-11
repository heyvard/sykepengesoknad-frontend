import { Loader } from '@navikt/ds-react'
import React, { useEffect } from 'react'

import IngenData from '../components/feil/ingen-data'
import { RSSoknad } from '../types/rs-types/rs-soknad'
import { Sykmelding } from '../types/sykmelding'
import { Soknad } from '../types/types'
import {
    backendApp,
    flexGatewayRoot,
    loginServiceRedirectUrl,
    loginServiceUrl,
    sykmeldingerBackendProxyRoot,
} from '../utils/environment'
import { logger } from '../utils/logger'
import useFetch from './rest/use-fetch'
import {
    FetchState,
    hasAny401,
    hasData,
    hasFailed,
    isAnyNotStartedOrPending,
    isNotStarted,
} from './rest/utils'
import { useAppStore } from './stores/app-store'

export function DataFetcher(props: { children: any }) {
    const { setSoknader, setSykmeldinger } = useAppStore()

    const rssoknader = useFetch<RSSoknad[]>()
    const sykmeldinger = useFetch<Sykmelding[]>()

    useEffect(() => {
        if (isNotStarted(rssoknader)) {
            rssoknader.fetch(
                `${flexGatewayRoot()}/${backendApp()}/api/soknader`,
                {
                    credentials: 'include',
                },
                (fetchState: FetchState<RSSoknad[]>) => {
                    if (hasData(fetchState)) {
                        setSoknader(
                            fetchState.data!.map((soknad) => {
                                return new Soknad(soknad)
                            })
                        )
                    }
                }
            )
        }
        if (isNotStarted(sykmeldinger)) {
            const url = `${sykmeldingerBackendProxyRoot()}/api/v1/sykmeldinger`
            sykmeldinger.fetch(
                url,
                {
                    credentials: 'include',
                },
                (fetchState: FetchState<Sykmelding[]>) => {
                    if (hasData(fetchState)) {
                        setSykmeldinger(fetchState.data)
                    }
                }
            )
        }
        // eslint-disable-next-line
    }, [rssoknader])

    if (isAnyNotStartedOrPending([rssoknader, sykmeldinger])) {
        return (
            <div className="data-loader">
                <Loader variant="neutral" size="2xlarge" />
            </div>
        )
    } else if (hasAny401([rssoknader, sykmeldinger])) {
        window.location.href = hentLoginUrl()
    } else if (hasFailed(rssoknader)) {
        logger.warn(
            `Klarer ikke hente soknader = ${
                rssoknader.httpCode
            } ${JSON.stringify(rssoknader.error, null, 2)} ]`
        )
        return <IngenData />
    } else if (hasFailed(sykmeldinger)) {
        logger.warn(
            `Klarer ikke hente sykmeldinger = ${
                sykmeldinger.httpCode
            } ${JSON.stringify(sykmeldinger.error, null, 2)} ]`
        )
        return <IngenData />
    }

    return props.children
}

export const hentLoginUrl = () => {
    if (window.location.href.includes('sykepengesoknad-utland')) {
        return `${loginServiceUrl()}?redirect=${loginServiceRedirectUrl()}/sykepengesoknad-utland`
    }
    return `${loginServiceUrl()}?redirect=${loginServiceRedirectUrl()}`
}
