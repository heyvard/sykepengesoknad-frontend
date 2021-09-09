import { RSSoknad } from '../../../types/rs-types/rs-soknad'
import { arbeidstakerReisetilskuddSyk, gradertReisetilskuddSm } from './sykmeldinger'

export const nyttReisetilskudd: RSSoknad = {
    'id': '5294bdbd-38a2-4d2a-9917-0fcaf6cf205a',
    'sykmeldingId': arbeidstakerReisetilskuddSyk.id,
    'soknadstype': 'REISETILSKUDD',
    'status': 'NY',
    'fom': '2020-04-01',
    'tom': '2020-04-24',
    'opprettetDato': '2021-09-09',
    'sendtTilNAVDato': null,
    'sendtTilArbeidsgiverDato': null,
    'avbruttDato': null,
    'startSykeforlop': '2020-04-01',
    'sykmeldingUtskrevet': '2020-04-01',
    'arbeidsgiver': {
        'navn': 'SAUEFABRIKK',
        'orgnummer': '896929119'
    },
    'korrigerer': null,
    'korrigertAv': null,
    'arbeidssituasjon': 'ARBEIDSTAKER',
    'soknadPerioder': [
        {
            'fom': '2020-04-01',
            'tom': '2020-04-24',
            'grad': 0,
            'sykmeldingstype': 'REISETILSKUDD'
        }
    ],
    'sporsmal': [
        {
            'id': '1566421',
            'tag': 'ANSVARSERKLARING',
            'sporsmalstekst': 'Jeg vet at jeg kan miste retten til reisetilskudd og sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige. Jeg vet også at NAV kan holde igjen eller kreve tilbake penger, og at å gi feil opplysninger kan være straffbart.',
            'undertekst': null,
            'svartype': 'CHECKBOX_PANEL',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        },
        {
            'id': '1566424',
            'tag': 'TRANSPORT_TIL_DAGLIG',
            'sporsmalstekst': 'Brukte du bil eller offentlig transport til og fra jobben før du ble sykmeldt?',
            'undertekst': null,
            'svartype': 'JA_NEI',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': 'JA',
            'svar': [],
            'undersporsmal': [
                {
                    'id': '1566425',
                    'tag': 'TYPE_TRANSPORT',
                    'sporsmalstekst': 'Hva slags type transport brukte du?',
                    'undertekst': null,
                    'svartype': 'CHECKBOX_GRUPPE',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': [
                        {
                            'id': '1566426',
                            'tag': 'OFFENTLIG_TRANSPORT_TIL_DAGLIG',
                            'sporsmalstekst': 'Offentlig transport',
                            'undertekst': null,
                            'svartype': 'CHECKBOX',
                            'min': null,
                            'max': null,
                            'pavirkerAndreSporsmal': false,
                            'kriterieForVisningAvUndersporsmal': 'CHECKED',
                            'svar': [],
                            'undersporsmal': [
                                {
                                    'id': '1566427',
                                    'tag': 'OFFENTLIG_TRANSPORT_BELOP',
                                    'sporsmalstekst': 'Hvor mye betaler du vanligvis i måneden for offentlig transport?',
                                    'undertekst': 'kr',
                                    'svartype': 'BELOP',
                                    'min': '0',
                                    'max': null,
                                    'pavirkerAndreSporsmal': false,
                                    'kriterieForVisningAvUndersporsmal': null,
                                    'svar': [],
                                    'undersporsmal': []
                                }
                            ]
                        },
                        {
                            'id': '1566428',
                            'tag': 'BIL_TIL_DAGLIG',
                            'sporsmalstekst': 'Bil',
                            'undertekst': null,
                            'svartype': 'CHECKBOX',
                            'min': null,
                            'max': null,
                            'pavirkerAndreSporsmal': false,
                            'kriterieForVisningAvUndersporsmal': null,
                            'svar': [],
                            'undersporsmal': []
                        }
                    ]
                }
            ]
        },
        {
            'id': '1566444',
            'tag': 'REISE_MED_BIL',
            'sporsmalstekst': 'Reiste du med egen bil, leiebil eller kollega til jobben mellom 23. desember 2020 - 7. januar 2021?',
            'undertekst': null,
            'svartype': 'JA_NEI',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': 'JA',
            'svar': [],
            'undersporsmal': [
                {
                    'id': '1566445',
                    'tag': 'BIL_DATOER',
                    'sporsmalstekst': 'Hvilke dager reiste du med bil i perioden 23. desember 2020 - 7. januar 2021?',
                    'undertekst': null,
                    'svartype': 'DATOER',
                    'min': '2020-12-23',
                    'max': '2021-01-07',
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                },
                {
                    'id': '1566446',
                    'tag': 'BIL_BOMPENGER',
                    'sporsmalstekst': 'Hadde du utgifter til bompenger?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': 'JA',
                    'svar': [],
                    'undersporsmal': [
                        {
                            'id': '1566447',
                            'tag': 'BIL_BOMPENGER_BELOP',
                            'sporsmalstekst': 'Hvor mye betalte du i bompenger mellom hjemmet ditt og jobben?',
                            'undertekst': 'kr',
                            'svartype': 'BELOP',
                            'min': '0',
                            'max': null,
                            'pavirkerAndreSporsmal': false,
                            'kriterieForVisningAvUndersporsmal': null,
                            'svar': [],
                            'undersporsmal': []
                        }
                    ]
                },
                {
                    'id': '1566448',
                    'tag': 'KM_HJEM_JOBB',
                    'sporsmalstekst': 'Hvor mange kilometer er kjøreturen mellom hjemmet ditt og jobben?',
                    'undertekst': 'km',
                    'svartype': 'KILOMETER',
                    'min': '0',
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                }
            ]
        },
        {
            'id': '1566434',
            'tag': 'KVITTERINGER',
            'sporsmalstekst': 'Last opp kvitteringer for reiser til og fra jobben mellom 1. - 24. april 2020.',
            'undertekst': null,
            'svartype': 'KVITTERING',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        },
        {
            'id': '1566435',
            'tag': 'UTBETALING',
            'sporsmalstekst': 'Legger arbeidsgiveren din ut for reisene?',
            'undertekst': null,
            'svartype': 'JA_NEI',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        },
        {
            'id': '1566422',
            'tag': 'VAER_KLAR_OVER_AT',
            'sporsmalstekst': 'Viktig å være klar over:',
            'undertekst': '<ul><li>Retten til reisetilskudd gjelder bare hvis du trenger midlertidig transport til og fra arbeidsstedet på grunn av helseplager.</li><li>Du kan få reisetilskudd hvis du i utgangspunktet har rett til sykepenger.</li><li>NAV kan innhente flere opplysninger som er nødvendige for å behandle søknaden.</li><li>NAV kan holde igjen eller kreve tilbake penger hvis du gir uriktige eller ufullstendige opplysninger.</li><li>Det å gi feil opplysninger kan være straffbart.</li><li>Fristen for å søke reisetilskudd er som hovedregel 3 måneder.</li></ul><p>Du kan lese mer om rettigheter og plikter på <a href="https://www.nav.no/reisetilskudd" target="_blank">nav.no/reisetilskudd</a>.</p>',
            'svartype': 'IKKE_RELEVANT',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        },
        {
            'id': '1566423',
            'tag': 'BEKREFT_OPPLYSNINGER',
            'sporsmalstekst': 'Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.',
            'undertekst': null,
            'svartype': 'CHECKBOX_PANEL',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        }
    ],
    'egenmeldtSykmelding': false
}

export const gradertReisetilskudd: RSSoknad = {
    'id': 'bc250797-147c-4050-b193-920c508902aa',
    'sykmeldingId': gradertReisetilskuddSm.id,
    'soknadstype': 'GRADERT_REISETILSKUDD',
    'status': 'NY',
    'fom': '2020-04-01',
    'tom': '2020-04-24',
    'opprettetDato': '2021-07-26',
    'sendtTilNAVDato': null,
    'sendtTilArbeidsgiverDato': null,
    'avbruttDato': null,
    'startSykeforlop': '2020-04-01',
    'sykmeldingUtskrevet': '2020-04-01',
    'arbeidsgiver': { 'navn': 'SNILL TORPEDO', 'orgnummer': '967170232' },
    'korrigerer': null,
    'korrigertAv': null,
    'arbeidssituasjon': 'ARBEIDSTAKER',
    'soknadPerioder': [ { 'fom': '2020-04-01', 'tom': '2020-04-24', 'grad': 60, 'sykmeldingstype': 'GRADERT' } ],
    'sporsmal': [ {
        'id': '1547215',
        'tag': 'ANSVARSERKLARING',
        'sporsmalstekst': 'Jeg vet at jeg kan miste retten til reisetilskudd og sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige. Jeg vet også at NAV kan holde igjen eller kreve tilbake penger, og at å gi feil opplysninger kan være straffbart.',
        'undertekst': null,
        'svartype': 'CHECKBOX_PANEL',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    }, {
        'id': '1547242',
        'tag': 'FRAVAR_FOR_SYKMELDINGEN',
        'sporsmalstekst': 'Var du syk og borte fra jobb mellom 16. - 31. mars 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547243',
            'tag': 'FRAVAR_FOR_SYKMELDINGEN_NAR',
            'sporsmalstekst': 'Hvilke dager var du syk og borte fra jobb? Du trenger bare oppgi dager før 1. april 2020.',
            'undertekst': null,
            'svartype': 'PERIODER',
            'min': '2019-10-01',
            'max': '2020-03-31',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547216',
        'tag': 'TILBAKE_I_ARBEID',
        'sporsmalstekst': 'Var du tilbake i fullt arbeid hos SNILL TORPEDO i løpet av perioden 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': true,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547217',
            'tag': 'TILBAKE_NAR',
            'sporsmalstekst': 'Når begynte du å jobbe igjen?',
            'undertekst': null,
            'svartype': 'DATO',
            'min': '2020-04-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': true,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547218',
        'tag': 'FERIE_V2',
        'sporsmalstekst': 'Hadde du ferie i tidsrommet 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547219',
            'tag': 'FERIE_NAR_V2',
            'sporsmalstekst': 'Når tok du ut ferie?',
            'undertekst': null,
            'svartype': 'PERIODER',
            'min': '2020-04-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547220',
        'tag': 'PERMISJON_V2',
        'sporsmalstekst': 'Tok du permisjon mens du var sykmeldt 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547221',
            'tag': 'PERMISJON_NAR_V2',
            'sporsmalstekst': 'Når tok du permisjon?',
            'undertekst': null,
            'svartype': 'PERIODER',
            'min': '2020-04-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547222',
        'tag': 'UTLAND_V2',
        'sporsmalstekst': 'Var du på reise utenfor EØS mens du var sykmeldt 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547223',
            'tag': 'UTLAND_NAR_V2',
            'sporsmalstekst': 'Når var du utenfor EØS?',
            'undertekst': null,
            'svartype': 'PERIODER',
            'min': '2020-04-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547244',
        'tag': 'ARBEID_UTENFOR_NORGE',
        'sporsmalstekst': 'Har du arbeidet i utlandet i løpet av de siste 12 månedene?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    }, {
        'id': '1547249',
        'tag': 'JOBBET_DU_GRADERT_0',
        'sporsmalstekst': 'I perioden 1. - 24. april 2020 skulle du jobbe 40 % med reisetilskudd hos SNILL TORPEDO. Jobbet du mer enn dette?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547250',
            'tag': 'HVOR_MANGE_TIMER_PER_UKE_0',
            'sporsmalstekst': 'Hvor mange timer i uken jobber du vanligvis når du er frisk? Varierer det, kan du oppgi gjennomsnittet.',
            'undertekst': 'timer per uke',
            'svartype': 'TALL',
            'min': '1',
            'max': '150',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        }, {
            'id': '1547251',
            'tag': 'HVOR_MYE_HAR_DU_JOBBET_0',
            'sporsmalstekst': 'Hvor mye jobbet du totalt 1. - 24. april 2020 hos SNILL TORPEDO?',
            'undertekst': null,
            'svartype': 'RADIO_GRUPPE_TIMER_PROSENT',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': [ {
                'id': '1547252',
                'tag': 'HVOR_MYE_PROSENT_0',
                'sporsmalstekst': 'prosent',
                'undertekst': null,
                'svartype': 'RADIO',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [ { 'id': '360269', 'verdi': 'CHECKED', 'avgittAv': null } ],
                'undersporsmal': [ {
                    'id': '1547253',
                    'tag': 'HVOR_MYE_PROSENT_VERDI_0',
                    'sporsmalstekst': null,
                    'undertekst': 'prosent',
                    'svartype': 'TALL',
                    'min': '41',
                    'max': '99',
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547254',
                'tag': 'HVOR_MYE_TIMER_0',
                'sporsmalstekst': 'timer',
                'undertekst': null,
                'svartype': 'RADIO',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547255',
                    'tag': 'HVOR_MYE_TIMER_VERDI_0',
                    'sporsmalstekst': null,
                    'undertekst': 'timer totalt',
                    'svartype': 'TALL',
                    'min': '1',
                    'max': '514',
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            } ]
        } ]
    }, {
        'id': '1547224',
        'tag': 'ANDRE_INNTEKTSKILDER',
        'sporsmalstekst': 'Har du andre inntektskilder enn SNILL TORPEDO? Du trenger ikke oppgi penger fra NAV.',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547225',
            'tag': 'HVILKE_ANDRE_INNTEKTSKILDER',
            'sporsmalstekst': 'Hvilke andre inntektskilder har du?',
            'undertekst': null,
            'svartype': 'CHECKBOX_GRUPPE',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': [ {
                'id': '1547226',
                'tag': 'INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD',
                'sporsmalstekst': 'andre arbeidsforhold',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547227',
                    'tag': 'INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD_ER_DU_SYKMELDT',
                    'sporsmalstekst': 'Er du sykmeldt fra dette?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547228',
                'tag': 'INNTEKTSKILDE_SELVSTENDIG',
                'sporsmalstekst': 'selvstendig næringsdrivende',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547229',
                    'tag': 'INNTEKTSKILDE_SELVSTENDIG_ER_DU_SYKMELDT',
                    'sporsmalstekst': 'Er du sykmeldt fra dette?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547230',
                'tag': 'INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA',
                'sporsmalstekst': 'dagmamma',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547231',
                    'tag': 'INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA_ER_DU_SYKMELDT',
                    'sporsmalstekst': 'Er du sykmeldt fra dette?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547232',
                'tag': 'INNTEKTSKILDE_JORDBRUKER',
                'sporsmalstekst': 'jordbruk / fiske / reindrift',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547233',
                    'tag': 'INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT',
                    'sporsmalstekst': 'Er du sykmeldt fra dette?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547234',
                'tag': 'INNTEKTSKILDE_FRILANSER',
                'sporsmalstekst': 'frilanser',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547235',
                    'tag': 'INNTEKTSKILDE_FRILANSER_ER_DU_SYKMELDT',
                    'sporsmalstekst': 'Er du sykmeldt fra dette?',
                    'undertekst': null,
                    'svartype': 'JA_NEI',
                    'min': null,
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547236',
                'tag': 'INNTEKTSKILDE_ANNET',
                'sporsmalstekst': 'annet',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': null,
                'svar': [],
                'undersporsmal': []
            } ]
        } ]
    }, {
        'id': '1547237',
        'tag': 'UTDANNING',
        'sporsmalstekst': 'Har du vært under utdanning i løpet av perioden 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547238',
            'tag': 'UTDANNING_START',
            'sporsmalstekst': 'Når startet du på utdanningen?',
            'undertekst': null,
            'svartype': 'DATO',
            'min': null,
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        }, {
            'id': '1547239',
            'tag': 'FULLTIDSSTUDIUM',
            'sporsmalstekst': 'Er utdanningen et fulltidsstudium?',
            'undertekst': null,
            'svartype': 'JA_NEI',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547245',
        'tag': 'PERMITTERT_NAA',
        'sporsmalstekst': 'Var du permittert av arbeidsgiveren din da du ble sykmeldt 1. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547246',
            'tag': 'PERMITTERT_NAA_NAR',
            'sporsmalstekst': 'Velg første dag i permitteringen',
            'undertekst': null,
            'svartype': 'DATO',
            'min': '2020-02-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547247',
        'tag': 'PERMITTERT_PERIODE',
        'sporsmalstekst': 'Har du vært permittert av arbeidsgiveren din i mer enn 14 sammenhengende dager mellom 1. mars - 1. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547248',
            'tag': 'PERMITTERT_PERIODE_NAR',
            'sporsmalstekst': null,
            'undertekst': null,
            'svartype': 'PERIODER',
            'min': '2020-03-01',
            'max': '2020-04-01',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547256',
        'tag': 'TRANSPORT_TIL_DAGLIG',
        'sporsmalstekst': 'Brukte du bil eller offentlig transport til og fra jobben før du ble sykmeldt?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547257',
            'tag': 'TYPE_TRANSPORT',
            'sporsmalstekst': 'Hva slags type transport brukte du?',
            'undertekst': null,
            'svartype': 'CHECKBOX_GRUPPE',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': [ {
                'id': '1547258',
                'tag': 'OFFENTLIG_TRANSPORT_TIL_DAGLIG',
                'sporsmalstekst': 'Offentlig transport',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': 'CHECKED',
                'svar': [],
                'undersporsmal': [ {
                    'id': '1547259',
                    'tag': 'OFFENTLIG_TRANSPORT_BELOP',
                    'sporsmalstekst': 'Hvor mye betaler du vanligvis i måneden for offentlig transport?',
                    'undertekst': 'kr',
                    'svartype': 'BELOP',
                    'min': '0',
                    'max': null,
                    'pavirkerAndreSporsmal': false,
                    'kriterieForVisningAvUndersporsmal': null,
                    'svar': [],
                    'undersporsmal': []
                } ]
            }, {
                'id': '1547260',
                'tag': 'BIL_TIL_DAGLIG',
                'sporsmalstekst': 'Bil',
                'undertekst': null,
                'svartype': 'CHECKBOX',
                'min': null,
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': null,
                'svar': [],
                'undersporsmal': []
            } ]
        } ]
    }, {
        'id': '1547261',
        'tag': 'REISE_MED_BIL',
        'sporsmalstekst': 'Reiste du med egen bil, leiebil eller kollega til jobben mellom 1. - 24. april 2020?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': 'JA',
        'svar': [],
        'undersporsmal': [ {
            'id': '1547262',
            'tag': 'BIL_DATOER',
            'sporsmalstekst': 'Hvilke dager reiste du med bil i perioden 1. - 24. april 2020?',
            'undertekst': null,
            'svartype': 'DATOER',
            'min': '2020-04-01',
            'max': '2020-04-24',
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        }, {
            'id': '1547263',
            'tag': 'BIL_BOMPENGER',
            'sporsmalstekst': 'Hadde du utgifter til bompenger?',
            'undertekst': null,
            'svartype': 'JA_NEI',
            'min': null,
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': 'JA',
            'svar': [],
            'undersporsmal': [ {
                'id': '1547264',
                'tag': 'BIL_BOMPENGER_BELOP',
                'sporsmalstekst': 'Hvor mye betalte du i bompenger mellom hjemmet ditt og jobben?',
                'undertekst': 'kr',
                'svartype': 'BELOP',
                'min': '0',
                'max': null,
                'pavirkerAndreSporsmal': false,
                'kriterieForVisningAvUndersporsmal': null,
                'svar': [],
                'undersporsmal': []
            } ]
        }, {
            'id': '1547265',
            'tag': 'KM_HJEM_JOBB',
            'sporsmalstekst': 'Hvor mange kilometer er kjøreturen mellom hjemmet ditt og jobben?',
            'undertekst': 'km',
            'svartype': 'KILOMETER',
            'min': '0',
            'max': null,
            'pavirkerAndreSporsmal': false,
            'kriterieForVisningAvUndersporsmal': null,
            'svar': [],
            'undersporsmal': []
        } ]
    }, {
        'id': '1547266',
        'tag': 'KVITTERINGER',
        'sporsmalstekst': 'Last opp kvitteringer for reiser til og fra jobben mellom 1. - 24. april 2020.',
        'undertekst': null,
        'svartype': 'KVITTERING',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    }, {
        'id': '1547267',
        'tag': 'UTBETALING',
        'sporsmalstekst': 'Legger arbeidsgiveren din ut for reisene?',
        'undertekst': null,
        'svartype': 'JA_NEI',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    }, {
        'id': '1547240',
        'tag': 'VAER_KLAR_OVER_AT',
        'sporsmalstekst': 'Viktig å være klar over:',
        'undertekst': '<ul><li>Du kan bare få sykepenger og reisetilskudd hvis det er din egen sykdom eller skade som hindrer deg i å jobbe. Sosiale eller økonomiske problemer gir ikke rett til sykepenger eller reisetilskudd.</li><li>Du kan miste retten til sykepenger og reisetilskudd  hvis du nekter å opplyse om din egen arbeidsevne, eller hvis du ikke tar imot behandling eller tilrettelegging.</li><li>Retten til sykepenger og reisetilskudd gjelder bare inntekt du har mottatt som lønn og betalt skatt av på sykmeldingstidspunktet.</li><li>NAV kan innhente opplysninger som er nødvendige for å behandle søknaden.</li><li>Du må melde fra til NAV hvis du satt i varetekt, sonet straff eller var under forvaring i sykmeldingsperioden.</li><li>Fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul><p>Du kan lese mer om rettigheter og plikter på <a href="https://www.nav.no/sykepenger" target="_blank">nav.no/sykepenger</a> og <a href="https://www.nav.no/reisetilskudd" target="_blank">nav.no/reisetilskudd</a>.</p>',
        'svartype': 'IKKE_RELEVANT',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    }, {
        'id': '1547241',
        'tag': 'BEKREFT_OPPLYSNINGER',
        'sporsmalstekst': 'Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.',
        'undertekst': null,
        'svartype': 'CHECKBOX_PANEL',
        'min': null,
        'max': null,
        'pavirkerAndreSporsmal': false,
        'kriterieForVisningAvUndersporsmal': null,
        'svar': [],
        'undersporsmal': []
    } ],
    'egenmeldtSykmelding': false
}
