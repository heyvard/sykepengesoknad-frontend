import React from 'react';
import useForm from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';
import { useHistory, useParams } from 'react-router-dom';
import Vis from '../../../utils/vis';
import tekster from '../sporsmal-tekster';
import { SpmProps } from '../sporsmalene';
import { hentSvarVerdi, pathUtenSteg } from '../sporsmal-utils';
import Knapperad from '../sporsmal-form/knapperad';
import { useAppStore } from '../../../data/stores/app-store';
import UndersporsmalListe from '../undersporsmal/undersporsmal-liste';
import FeilOppsummering from '../../skjema/feiloppsummering/feil-oppsummering';

interface TallKompProps {
    desimaler: number;
}

type AllTallKompProps = SpmProps & TallKompProps;

const TallKomp = ({ sporsmal, desimaler }: AllTallKompProps) => {
    const { valgtSoknad, setValgtSoknad } = useAppStore();
    const history = useHistory();
    const { stegId } = useParams();
    const spmIndex = parseInt(stegId) - 1;

    const { handleSubmit, register, errors, watch } = useForm({
        defaultValues: { verdi: hentSvarVerdi(sporsmal) }
    });

    const onSubmit = (data: any) => {
        const svar: any = { verdi: data.verdi };
        sporsmal.svarliste = { sporsmalId: sporsmal.id, svar: [ svar ] };
        setValgtSoknad(valgtSoknad);
        history.push(pathUtenSteg(history.location.pathname) + '/' + (spmIndex + 2));
    };

    return (
        <>
            <Vis hvis={sporsmal.erHovedSporsmal}>
                <form onSubmit={handleSubmit(onSubmit)} className="sporsmal__form">
                    <FeilOppsummering visFeilliste={true} errors={errors} />
                    <TallInput sporsmal={sporsmal} formProps={{ register, errors, watch }} desimaler={desimaler} />
                    <Knapperad onSubmit={onSubmit} />
                </form>
            </Vis>

            <Vis hvis={!sporsmal.erHovedSporsmal}>
                <TallInput sporsmal={sporsmal} formProps={{ register, errors, watch }} desimaler={desimaler} />
            </Vis>
        </>
    );
};

export default TallKomp;

type AllTallProps = SpmProps & TallKompProps;

const TallInput = ({ sporsmal, formProps, desimaler }: AllTallProps) => {
    const { stegId } = useParams();
    const compId = 'spm_' + stegId;
    const feilmelding = tekster['soknad.feilmelding.' + sporsmal.tag.toLowerCase()];
    const watchVerdi = formProps.watch('verdi');

    return (
        <>
            <Vis hvis={sporsmal.sporsmalstekst !== null}>
                <label className="skjema__sporsmal" htmlFor={compId}>
                    <Normaltekst tag="span">{sporsmal.sporsmalstekst}</Normaltekst>
                </label>
            </Vis>

            <input type="number"
                className="input--s"
                name="verdi"
                id={compId}
                ref={formProps.register({
                    validate: (value: any) => value === true || feilmelding
                })}
            />

            <div role="alert" aria-live="assertive">
                <Vis hvis={formProps.errors.verdi !== undefined}>
                    <Normaltekst tag="span" className="skjemaelement__feilmelding">
                        {formProps.errors.verdi && formProps.errors.verdi.message}
                    </Normaltekst>
                </Vis>
            </div>

            <Vis hvis={watchVerdi > 0}>
                <UndersporsmalListe undersporsmal={sporsmal.undersporsmal} />
            </Vis>
        </>
    )
};
