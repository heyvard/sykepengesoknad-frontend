import { Label, TextField, ToggleGroup } from '@navikt/ds-react'
import React, { useState } from 'react'
import { UNSAFE_DatePicker } from '@navikt/ds-react'
import dayjs from 'dayjs'

import Vis from '../../vis'
import { SpmProps } from '../sporsmal-form/sporsmal-form'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'
import Utvidbar from '../../utvidbar/utvidbar'

export const Losning2Kalender = ({ sporsmal }: SpmProps) => {
    const [timerProsent, setTimerProsent] = useState<'Timer' | '%'>('Timer')

    return (
        <Vis
            hvis={sporsmal.sporsmalstekst}
            render={() => (
                <div style={{ paddingTop: '2em' }}>
                    <Label as="h2" className="skjema__sporsmal">
                        Oppgi total arbeidsmengde du jobbet i denne perioden:
                    </Label>
                    <div style={{ display: 'flex' }}>
                        <TextField style={{ width: '200px' }} label={''} />
                        <Label
                            style={{
                                display: 'flex',
                                margin: 'auto',
                                fontWeight: 400,
                                color: '#595959',
                                width: '100%',
                                textAlign: 'left',
                                paddingLeft: '1em',
                            }}
                        >
                            {timerProsent}
                        </Label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <ToggleGroup
                            style={{ marginTop: '1em', marginBottom: '1em', padding: '1.5px' }}
                            value={timerProsent}
                            size={'small'}
                            onChange={(e) => setTimerProsent(e as any)}
                        >
                            <ToggleGroup.Item value="Timer">7,5</ToggleGroup.Item>
                            <ToggleGroup.Item value="%">%</ToggleGroup.Item>
                        </ToggleGroup>
                        <Label
                            style={{
                                display: 'flex',
                                margin: 'auto',
                                fontWeight: 400,
                                color: '#595959',
                                width: '100%',
                                marginTop: '1.5em',
                                textAlign: 'left',
                                paddingLeft: '1em',
                            }}
                        >
                            Eksempel: 7,5 timer eller 50 %
                        </Label>
                    </div>

                    <Utvidbar
                        erApen={false}
                        type="intern"
                        tittel={
                            'Se kalender for perioden ' +
                            tilLesbarPeriodeMedArstall(dayjs(sporsmal.min), dayjs(sporsmal.max))
                        }
                    >
                        <UNSAFE_DatePicker.Standalone
                            mode="multiple"
                            min={0}
                            fromDate={new Date(sporsmal.min!)}
                            toDate={new Date(sporsmal.max!)}
                        />
                    </Utvidbar>
                </div>
            )}
        />
    )
}
