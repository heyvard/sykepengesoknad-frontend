import { BodyShort, Radio, RadioGroup, TextField } from '@navikt/ds-react'
import React, { useState } from 'react'

import Vis from '../../vis'
import { SpmProps } from '../sporsmal-form/sporsmal-form'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'

export const Losning2Kalender = ({ sporsmal }: SpmProps) => {
    const [timerProsent, setTimerProsent] = useState<'Timer' | '%'>('Timer')

    const labelen =
        timerProsent == 'Timer'
            ? 'Oppgi totalt antall timer du jobbet i perioden ' +
              tilLesbarPeriodeMedArstall(sporsmal.min, sporsmal.max) +
              ':'
            : 'Oppgi total prosent du jobbet i perioden ' + tilLesbarPeriodeMedArstall(sporsmal.min, sporsmal.max) + ':'
    const eksempel = timerProsent == 'Timer' ? 'Eksempel: 7,5 ' : 'Eksempel: 40% '
    return (
        <Vis
            hvis={sporsmal.sporsmalstekst}
            render={() => {
                return (
                    <div style={{ paddingTop: '2em' }}>
                        <RadioGroup
                            legend="Oppgi arbeidsmengde i timer eller prosent:"
                            onChange={(val) => setTimerProsent(val)}
                        >
                            <Radio value="Timer">Timer</Radio>
                            <Radio value="%">Prosent</Radio>
                        </RadioGroup>

                        <div style={{ marginTop: '1em' }}>
                            <TextField style={{ width: '200px' }} label={labelen} />
                        </div>
                        <BodyShort style={{ color: '#595959' }}>{eksempel}</BodyShort>
                    </div>
                )
            }}
        />
    )
}
