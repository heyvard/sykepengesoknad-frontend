import { BodyLong, GuidePanel, Label } from '@navikt/ds-react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { tekst } from '../../utils/tekster'
import { RouteParams } from '../../app'
import useSoknad from '../../hooks/useSoknad'

import VeilederSVG from './veileder'

export const ViktigInformasjon = () => {
    const { id } = useParams<RouteParams>()
    const { data: valgtSoknad } = useSoknad(id)

    if (!valgtSoknad) {
        return null
    }

    const merknadsTyperSomVarsles = ['UGYLDIG_TILBAKEDATERING', 'TILBAKEDATERING_KREVER_FLERE_OPPLYSNINGER']

    if (valgtSoknad.merknaderFraSykmelding?.some((a) => merknadsTyperSomVarsles.includes(a.type))) {
        return (
            <div className="viktig-informasjon">
                <GuidePanel poster illustration={VeilederSVG}>
                    <Label as="h2">{tekst('viktig-informasjon.overskrift')}</Label>
                    <BodyLong spacing>{tekst('viktig-informasjon.avsnitt.1')}</BodyLong>
                    <BodyLong spacing>{tekst('viktig-informasjon.avsnitt.2')}</BodyLong>
                    <Label as="h3">{tekst('viktig-informasjon.under-overskrift')}</Label>
                    <BodyLong spacing>{tekst('viktig-informasjon.avsnitt.3')}</BodyLong>
                </GuidePanel>
            </div>
        )
    }
    return null
}
