import { BodyLong, Label, Radio, RadioGroup, TextField } from '@navikt/ds-react'
import React, { useState } from 'react'
import { UNSAFE_DatePicker } from '@navikt/ds-react'

import Vis from '../../vis'
import { SpmProps } from '../sporsmal-form/sporsmal-form'
import { tilLesbarDatoMedArstall, tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'

export const Losning2Kalender = ({ sporsmal }: SpmProps) => {
    const [timerProsent, setTimerProsent] = useState<'Timer' | '%' | 'dag' | undefined>(undefined)
    const [valgtDatoer, setValgteDatoer] = useState<Date[] | undefined>()

    const sorterte = valgtDatoer?.sort((a, b) => a.getTime() - b.getTime())
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
                            legend="Hvordan ønsker du å fylle ut timene dine?"
                            onChange={(val) => setTimerProsent(val)}
                        >
                            <Radio value="Timer">Totalt i timer</Radio>
                            <Radio value="%">Totalt i prosent</Radio>
                            <Radio value="dag">Per dag i timer</Radio>
                        </RadioGroup>

                        {(timerProsent == 'Timer' || timerProsent == '%') && (
                            <>
                                <div style={{ marginTop: '1em' }}>
                                    <TextField
                                        className={'graadesc'}
                                        style={{ width: '200px' }}
                                        label={labelen}
                                        description={eksempel}
                                    />
                                </div>
                            </>
                        )}
                        {timerProsent == 'dag' && (
                            <>
                                <Label as="h2" className="skjema__sporsmal">
                                    Marker hvilke dager du jobbet i denne perioden:
                                </Label>

                                <UNSAFE_DatePicker.Standalone
                                    mode="multiple"
                                    min={0}
                                    style={{ border: 'solid 1px' }}
                                    fromDate={new Date(sporsmal.min!)}
                                    toDate={new Date(sporsmal.max!)}
                                    onSelect={setValgteDatoer}
                                />

                                {(valgtDatoer?.length || 0 > 0) && (
                                    <>
                                        <Label as="h2" className="skjema__sporsmal">
                                            Oppgi hvor mye du jobbet på de valgte dagene:
                                        </Label>
                                        <BodyLong as="div" className="redaksjonelt-innhold">
                                            Eksempel 7,5
                                        </BodyLong>
                                    </>
                                )}
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {sorterte &&
                                        sorterte.map((d) => {
                                            const formattert = tilLesbarDatoMedArstall(d)
                                            return (
                                                <TextField
                                                    style={{ width: '133px', marginRight: '1em' }}
                                                    key={formattert}
                                                    label={formattert}
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    description="Oppgi timer per dag"
                                                />
                                            )
                                        })}
                                </div>
                            </>
                        )}
                    </div>
                )
            }}
        />
    )
}
