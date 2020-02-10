import React, { useEffect, useRef } from 'react';
import { ErrorMessage, useFormContext } from 'react-hook-form';
import tekster from '../sporsmal-tekster';
import { hentSvar } from '../sporsmal-utils';
import Vis from '../../vis';
import { Normaltekst } from 'nav-frontend-typografi';
import { SpmProps } from '../sporsmal-form/sporsmal-form';

const CheckboxInput = ({ sporsmal }: SpmProps) => {
    const feilmelding = tekster['soknad.feilmelding.' + sporsmal.tag.toLowerCase()];
    const { register, setValue, errors, watch } = useFormContext();
    const bekreft = useRef<HTMLDivElement>(null);
    const checkWatch = watch(sporsmal.id);

    useEffect(() => {
        const svar = hentSvar(sporsmal);
        setValue(sporsmal.id, svar === 'CHECKED');
        // eslint-disable-next-line
    }, [ sporsmal ]);

    const handleChange = () => {
        bekreft.current.classList.toggle('bekreftCheckboksPanel--checked');
        setValue(sporsmal.id, !checkWatch);
    };

    const makeClassName = () => {
        const cls = 'bekreftCheckboksPanel';
        return watch(sporsmal.id) ? cls + ' ' + cls + '--checked' : cls;
    };

    return (
        <>
            <div className={makeClassName()} ref={bekreft}>
                <div className={'skjemaelement skjemaelement--horisontal'}>
                    <input type="checkbox"
                           className="skjemaelement__input checkboks"
                           name={sporsmal.id}
                           id={sporsmal.id}
                           onChange={handleChange}
                           ref={register({ required: feilmelding })}
                    />
                    <label className="skjemaelement__label" htmlFor={sporsmal.id}>
                        {sporsmal.sporsmalstekst}
                    </label>
                </div>
            </div>
            <div role="alert" aria-live="assertive">
                <Vis hvis={errors[sporsmal.id] !== undefined}>
                    <Normaltekst tag="span" className="skjemaelement__feilmelding">
                        <ErrorMessage as="span" errors={errors} name={sporsmal.id}/>
                    </Normaltekst>
                </Vis>
            </div>
        </>
    )
};

export default CheckboxInput;
