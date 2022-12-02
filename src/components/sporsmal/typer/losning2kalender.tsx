import { BodyLong, Label, TextField } from '@navikt/ds-react'
import React, { useState } from 'react'
import { UNSAFE_DatePicker } from '@navikt/ds-react'

import Vis from '../../vis'
import { SpmProps } from '../sporsmal-form/sporsmal-form'
import { tilLesbarDatoMedArstall } from '../../../utils/dato-utils'

export const Losning2Kalender = ({ sporsmal }: SpmProps) => {
    const [valgtDatoer, setValgteDatoer] = useState<Date[] | undefined>()

    const sorterte = valgtDatoer?.sort((a, b) => a.getTime() - b.getTime())
    return (
        <Vis
            hvis={sporsmal.sporsmalstekst}
            render={() => (
                <div>
                    <Label as="h2" className="skjema__sporsmal">
                        Marker hvilke dager du jobbet i denne perioden:
                    </Label>

                    <UNSAFE_DatePicker.Standalone
                        mode="multiple"
                        min={0}
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
                </div>
            )}
        />
    )
}
