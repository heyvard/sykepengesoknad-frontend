import { Button } from '@navikt/ds-react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { RouteParams } from '../../../app'
import { useAppStore } from '../../../data/stores/app-store'
import { RSSoknadstatus } from '../../../types/rs-types/rs-soknadstatus'
import { RSSoknadstype } from '../../../types/rs-types/rs-soknadstype'
import { tekst } from '../../../utils/tekster'
import AvbrytSoknadModal from '../../avbryt-soknad-modal/avbryt-soknad-modal'
import AvsluttOgFortsettSenere from '../../avslutt-og-fortsett-senere/avslutt-og-fortsett-senere'
import PersonvernLesMer from '../../soknad-intro/personvern-les-mer'
import Vis from '../../vis'

interface KnapperadProps {
    poster: boolean
}

const Knapperad = ({ poster }: KnapperadProps) => {

    const { valgtSoknad } = useAppStore()
    const { stegId } = useParams<RouteParams>()

    const stegNo = parseInt(stegId)
    const spmIndex = stegNo - 2
    const erUtlandssoknad = valgtSoknad!.soknadstype === RSSoknadstype.OPPHOLD_UTLAND

    if (!valgtSoknad) {
        return null
    }

    const nokkel = () => {

        const erSisteSteg = spmIndex === valgtSoknad.sporsmal.length - (valgtSoknad.soknadstype === RSSoknadstype.OPPHOLD_UTLAND ? 2 : 3)
        if (erSisteSteg) {
            if (valgtSoknad.status === RSSoknadstatus.UTKAST_TIL_KORRIGERING) {
                return 'sykepengesoknad.send.endringene'
            }
            return 'sykepengesoknad.send'
        }
        return 'sykepengesoknad.ga-videre'

    }


    return (
        <div className="knapperad">
            <Button variant="primary" type="submit" loading={poster}>{tekst(nokkel())}</Button>
            <div className="avbrytDialog blokk-l">
                <AvsluttOgFortsettSenere />
                <AvbrytSoknadModal />
                <Vis hvis={stegNo === 1 && !erUtlandssoknad}
                    render={() =>
                        <>
                            <hr />
                            <PersonvernLesMer />
                        </>
                    }
                />
            </div>

        </div>
    )
}

export default Knapperad
