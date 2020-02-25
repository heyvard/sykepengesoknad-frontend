export enum FeilaktigeOpplysninger {
    PERIODE = 'PERIODE',
    SYKMELDINGSGRAD = 'SYKMELDINGSGRAD',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
    DIAGNOSE = 'DIAGNOSE',
    ANDRE = 'ANDRE'
}

export enum ForskuttererSvar {
    JA = 'JA',
    NEI = 'NEI',
    VET_IKKE = 'VET_IKKE'
}

export enum InntektskildeTyper {
    ANDRE_ARBEIDSFORHOLD = 'ANDRE_ARBEIDSFORHOLD',
    SELVSTENDIG_NAERINGSDRIVENDE = 'SELVSTENDIG_NAERINGSDRIVENDE',
    SELVSTENDIG_NAERINGSDRIVENDE_DAGMAMMA = 'SELVSTENDIG_NAERINGSDRIVENDE_DAGMAMMA',
    JORDBRUKER_FISKER_REINDRIFTSUTOEVER = 'JORDBRUKER_FISKER_REINDRIFTSUTOEVER',
    FRILANSER = 'FRILANSER',
    ANNET = 'ANNET'
}

export enum NokkelOpplysninger {
    STATUS = 'STATUS',
    INNSENDT_DATO = 'INNSENDT_DATO',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
    ORGNUMMER = 'ORGNUMMER'
}

export enum SporsmalsTyper {
    ANSVAR_BEKREFTET = 'ANSVAR_BEKREFTET',
    EGENMELDINGSDAGER = 'EGENMELDINGSDAGER',
    GJENOPPTATT_ARBEID_FULLT_UT = 'GJENOPPTATT_ARBEID_FULLT_UT',
    FERIE_PERMISJON_UTENLANDSOPPHOLD = 'FERIE_PERMISJON_UTENLANDSOPPHOLD',
    AKTIVITET = 'AKTIVITET',
    INNTEKTSKILDER = 'INNTEKTSKILDER',
    UTDANNING = 'UTDANNING',
    ARBEIDSGIVER_FORSKUTTERER = 'ARBEIDSGIVER_FORSKUTTERER'
}

export enum SykepengesoknadSvartyper {
    CHECKBOX = 'CHECKBOX',
    RADIOKNAPPER = 'RADIOKNAPPER',
    TEKSTSVAR = 'TEKSTSVAR',
    DATO = 'DATO',
    DATOSPENN = 'DATOSPENN',
    HTML = 'HTML'
}

export enum SykmeldingStatuser {
    NY = 'NY',
    SENDT = 'SENDT',
    UTGAATT = 'UTGAATT',
    AVBRUTT = 'AVBRUTT',
    BEKREFTET = 'BEKREFTET',
    TIL_SENDING = 'TIL_SENDING'
}

export enum AvgittAvTyper {
    TIDLIGERE_SOKNAD = 'TIDLIGERE_SOKNAD'
}

export enum TagTyper {
    BEKREFT_OPPLYSNINGER = "BEKREFT_OPPLYSNINGER",
    ANSVARSERKLARING = "ANSVARSERKLARING",
    EGENMELDINGER = "EGENMELDINGER",
    TIDLIGERE_SYK = "TIDLIGERE_SYK",
    TIDLIGERE_EGENMELDING = "TIDLIGERE_EGENMELDING",
    TIDLIGERE_PAPIRSYKMELDING = "TIDLIGERE_PAPIRSYKMELDING",
    EGENMELDINGER_NAR = "EGENMELDINGER_NAR",
    PAPIRSYKMELDING_NAR = "PAPIRSYKMELDING_NAR",
    JOBBET_DU_GRADERT = "JOBBET_DU_GRADERT",
    JOBBET_DU_100_PROSENT = "JOBBET_DU_100_PROSENT",
    HVOR_MANGE_TIMER_PER_UKE = "HVOR_MANGE_TIMER_PER_UKE",
    HVOR_MYE_PROSENT = "HVOR_MYE_PROSENT",
    HVOR_MYE_PROSENT_VERDI = "HVOR_MYE_PROSENT_VERDI",
    HVOR_MYE_TIMER = "HVOR_MYE_TIMER_",
    HVOR_MYE_TIMER_VERDI = "HVOR_MYE_TIMER_VERDI",
    HVOR_MYE_HAR_DU_JOBBET = "HVOR_MYE_HAR_DU_JOBBET",
    TILBAKE_I_ARBEID = "TILBAKE_I_ARBEID",
    TILBAKE_NAR = "TILBAKE_NAR",
    FERIE_PERMISJON_UTLAND = "FERIE_PERMISJON_UTLAND",
    FERIE_PERMISJON_UTLAND_HVA = "FERIE_PERMISJON_UTLAND_HVA",
    FERIE = "FERIE",
    FERIE_NAR = "FERIE_NAR",
    PERMISJON = "PERMISJON",
    PERMISJON_NAR = "PERMISJON_NAR",
    UTLAND = "UTLAND",
    UTLAND_NAR = "UTLAND_NAR",
    FERIE_V2 = "FERIE_V2",
    FERIE_NAR_V2 = "FERIE_NAR_V2",
    PERMISJON_V2 = "PERMISJON_V2",
    PERMISJON_NAR_V2 = "PERMISJON_NAR_V2",
    UTLAND_V2 = "UTLAND_V2",
    UTLAND_NAR_V2 = "UTLAND_NAR_V2",
    UTLANDSOPPHOLD_SOKT_SYKEPENGER = "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
    UTDANNING = "UTDANNING",
    UTDANNING_START = "UTDANNING_START",
    FULLTIDSSTUDIUM = "FULLTIDSSTUDIUM",
    ANDRE_INNTEKTSKILDER = "ANDRE_INNTEKTSKILDER",
    HVILKE_ANDRE_INNTEKTSKILDER = "HVILKE_ANDRE_INNTEKTSKILDER",
    INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD = "INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD",
    INNTEKTSKILDE_SELVSTENDIG = "INNTEKTSKILDE_SELVSTENDIG",
    INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA = "INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA",
    INNTEKTSKILDE_JORDBRUKER = "INNTEKTSKILDE_JORDBRUKER",
    INNTEKTSKILDE_FRILANSER = "INNTEKTSKILDE_FRILANSER",
    INNTEKTSKILDE_ANNET = "INNTEKTSKILDE_ANNET",
    ER_DU_SYKMELDT = "_ER_DU_SYKMELDT",
    VAER_KLAR_OVER_AT = "VAER_KLAR_OVER_AT",

    IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON = "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
    HVOR_MANGE_TIMER = 'HVOR_MANGE_TIMER',
    INNTEKTSKILDE_ARBEIDSFORHOLD = 'INNTEKTSKILDE_ARBEIDSFORHOLD',
    INNTEKTSKILDE_FRILANSER_SELVSTENDIG = 'INNTEKTSKILDE_FRILANSER_SELVSTENDIG',
    INNTEKTSKILDE_ANNET_ER_DU_SYKMELDT = 'INNTEKTSKILDE_ANNET_ER_DU_SYKMELDT',
    INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT = 'INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT',
    INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT = 'INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT',
    INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT = 'INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT',
    PERIODER = 'PERIODER',
    SYKMELDINGSGRAD = 'SYKMELDINGSGRAD',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
    LAND = 'LAND',
    PERIODEUTLAND = 'PERIODEUTLAND',
    BEKREFT_OPPLYSNINGER_UTLAND = 'BEKREFT_OPPLYSNINGER_UTLAND',
    BEKREFT_OPPLYSNINGER_UTLAND_INFO = 'BEKREFT_OPPLYSNINGER_UTLAND_INFO',
    BETALER_ARBEIDSGIVER = 'BETALER_ARBEIDSGIVER',
    INNTEKTSKILDE_SELVSTENDIG_ER_DU_SYKMELDT = 'INNTEKTSKILDE_SELVSTENDIG_ER_DU_SYKMELDT',
    INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA_ER_DU_SYKMELDT = 'INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA_ER_DU_SYKMELDT',
    INNTEKTSKILDE_FRILANSER_ER_DU_SYKMELDT = 'INNTEKTSKILDE_FRILANSER_ER_DU_SYKMELDT',
    INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD_ER_DU_SYKMELDT = 'INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD_ER_DU_SYKMELDT',
    ARBEIDSLEDIG_UTLAND = 'ARBEIDSLEDIG_UTLAND',
    ENKELTSTAENDE_BEHANDLINGSDAGER = 'ENKELTSTAENDE_BEHANDLINGSDAGER',
    ENKELTSTAENDE_BEHANDLINGSDAGER_UKE = 'ENKELTSTAENDE_BEHANDLINGSDAGER_UKE',
    FRAVER_FOR_BEHANDLING = 'FRAVER_FOR_BEHANDLING',
    INNTEKTSKILDE_OMSORGSLONN = 'INNTEKTSKILDE_OMSORGSLONN',
    INNTEKTSKILDE_FOSTERHJEM = 'INNTEKTSKILDE_FOSTERHJEM',
}

export enum Steg {
    FOER_DU_BEGYNNER = 'FOER_DU_BEGYNNER',
    FRAVAER_OG_FRISKMELDING = 'FRAVAER_OG_FRISKMELDING',
    AKTIVITETER_I_SYKMELDINGSPERIODEN = 'AKTIVITETER_I_SYKMELDINGSPERIODEN',
    OPPSUMMERING = 'OPPSUMMERING',
    KVITTERING = 'KVITTERING',
    ETT_SPORSMAL_PER_SIDE = 'ETT_SPORSMAL_PER_SIDE'
}

export enum HotjarTriggerType {
    SOKNAD_ARBEIDSTAKER = 'SOKNAD_ARBEIDSTAKER',
    SOKNAD_FRILANSER_NAERINGSDRIVENDE = 'SOKNAD_FRILANSER_NAERINGSDRIVENDE',
    SOKNAD_OPPHOLD_UTENFOR_NORGE = 'SOKNAD_OPPHOLD_UTENFOR_NORGE',
    SELVSTENDIG_FRILANS_JULI_2018 = 'SELVSTENDIG_FRILANS_JULI_2018',
    SOKNAD_ARBEIDSLEDIG = 'SOKNAD_ARBEIDSLEDIG',
}

export const OPPHOLD_UTLAND_SKJEMA = 'OPPHOLD_UTLAND_SKJEMA';

export const getSoknadSkjemanavn = (id: string) => {
    return `SOKNAD___${id}`;
};

export enum SvarEnums {
    JA = 'JA',
    NEI = 'NEI',
    CHECKED = 'CHECKED',
    UNCHECKED = 'UNCHECKED'
}

export enum UnleashToggles {
    SYKMELDING_ARBEIDSSITUASJON = 'syfo.syfofront.angre.bekreft.sykmelding',
    SELVSTENDIG_KORRIGER = 'syfo.syfofront.korriger.selvstendig.soknad',
    NY_ARBEIDSTAKERSOKNAD = 'syfo.ag.soknad.ny.platform',
    NYTT_SYKMELDINGSMOTTAK = 'syfo.syfofront.nytt.sykmeldingsmottak',
}

export enum SpmKomp {
    CHECKBOX_PANEL = 'CHECKBOX_PANEL',
    JA_NEI = 'JA_NEI',
    DATO = 'DATO',
    TALL = 'TALL',
}

export enum SvarTil {
    NAV = 'NAV',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
}
