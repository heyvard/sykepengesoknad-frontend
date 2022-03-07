import { Next } from '@navikt/ds-icons'
import { Alert } from '@navikt/ds-react'
import ModalWrapper from 'nav-frontend-modal'
import { Systemtittel, Undertekst, Undertittel } from 'nav-frontend-typografi'
import React, { useState } from 'react'

import { RSSoknadstype } from '../../../types/rs-types/rs-soknadstype'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'
import { tekst } from '../../../utils/tekster'
import { useAmplitudeInstance } from '../../amplitude/amplitude'
import Vis from '../../vis'
import { InngangsIkon, InngangsStatus } from '../inngang/inngangspanel'
import { hentIkon, hentIkonHover, hentTeaserStatustekst, periodeListevisning, SykepengesoknadTeaserProps, teaserTittel } from './teaser-util'

const UtgaattSoknaderTeaser = ({ soknad }: SykepengesoknadTeaserProps) => {
    const { logEvent } = useAmplitudeInstance()
    const [ aapen, setAapen ] = useState<boolean>(false)

    return (
        <article aria-labelledby={`soknader-header-${soknad.id}`} onClick={() => {
            logEvent('skjema åpnet', {
                skjemanavn: 'sykepengesoknad',
                soknadstype: soknad.soknadstype,
                soknadstatus: soknad.status,
            })
        }}>
            <button className="inngangspanel inngangspanel__btn"
                onClick={() => setAapen(true)}>
                <div className="inngangspanel__ytre">
                    <div className="inngangspanel__del1">
                        <InngangsIkon ikon={hentIkon(soknad)} ikonHover={hentIkonHover(soknad)} />
                        <div id={`soknader-header-${soknad.id}`} className="inngangspanel--inaktivt">
                            <Vis hvis={soknad.soknadstype !== RSSoknadstype.OPPHOLD_UTLAND}
                                render={() =>
                                    <Undertekst className="inngangspanel__periode">
                                        {tilLesbarPeriodeMedArstall(soknad.fom, soknad.tom)}
                                    </Undertekst>
                                }
                            />
                            <Undertittel tag="h3" className="inngangspanel__tittel">
                                {teaserTittel(soknad)}
                            </Undertittel>
                            {periodeListevisning(soknad)}
                        </div>
                    </div>
                    <InngangsStatus status={soknad.status} tekst={hentTeaserStatustekst(soknad)} />
                </div>
                <Next className="chevron--hoyre" />
            </button>
            <ModalWrapper className="modal__teaser_popup" onRequestClose={() => setAapen(false)}
                contentLabel="planlagt"
                isOpen={aapen}
            >
                <Systemtittel tag="h3" className="modal__tittel">
                    {tekst('soknad.teaser.utgaatt.popup.header')}
                </Systemtittel>
                <Alert variant="info">{tekst('soknad.teaser.utgaatt.popup.innhold')}</Alert>
                <button className="knapp knapp--hoved" onClick={() => setAapen(false)}>
                    Lukk
                </button>
            </ModalWrapper>
        </article>
    )
}

export default UtgaattSoknaderTeaser
