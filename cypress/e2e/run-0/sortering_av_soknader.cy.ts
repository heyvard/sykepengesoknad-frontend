import { soknaderOpplaering } from '../../../src/data/mock/data/opplaering'
import { soknaderIntegration } from '../../../src/data/mock/data/soknader-integration'
import { Soknad } from '../../../src/types/types'
import { getFomFraSoknad, senesteSendtDato } from '../../../src/utils/sorter-soknader'

const articleTilSoknad = (articles: any) => {
    const soknader: Soknad[] = []
    articles.map((idx: any) => {
        const id = articles[idx].attributes['aria-labelledby'].value.split('soknader-header-')[1]
        const rsSoknad = soknaderIntegration.find((s) => s.id === id) || soknaderOpplaering.find((s) => s.id === id)
        if (rsSoknad) soknader.push(new Soknad(rsSoknad))
    })
    return soknader
}

describe('Tester sortering av søknader', () => {
    it('Laster startside', function () {
        cy.visit('http://localhost:8080/syk/sykepengesoknad?testperson=alle-soknader')
        cy.get('.navds-heading--xlarge').should('be.visible').and('have.text', 'Søknader')
    })

    it('Nye søknader sorteres etter tidligste tom dato', function () {
        cy.get('#soknader-list-til-behandling article').then((articles: any) => {
            const soknader = articleTilSoknad(articles)
            let forrigeSoknad = soknader[0]
            soknader.forEach((sok: Soknad) => {
                assert.isTrue(getFomFraSoknad(forrigeSoknad).getTime() <= getFomFraSoknad(sok).getTime())
                forrigeSoknad = sok
            })
        })
    })

    it('Sorter etter Status', function () {
        cy.get('.inngangspanel__sortering select').select('Status')
        cy.get('#soknader-sendt article').then((articles: any) => {
            const soknader = articleTilSoknad(articles)
            let forrigeSoknad = soknader[0]
            soknader.forEach((sok: Soknad) => {
                assert.isTrue(forrigeSoknad.status <= sok.status)
                forrigeSoknad = sok
            })
        })
    })

    it('Sorter etter Dato', function () {
        cy.get('.inngangspanel__sortering select').select('Dato')
        cy.get('#soknader-sendt article').then((articles: any) => {
            const soknader = articleTilSoknad(articles)
            let forrigeSoknad = soknader[0]
            soknader.forEach((sok: Soknad) => {
                assert.isTrue(getFomFraSoknad(forrigeSoknad).getTime() >= getFomFraSoknad(sok).getTime())
                forrigeSoknad = sok
            })
        })
    })

    it('Sorter etter Sendt', function () {
        cy.get('.inngangspanel__sortering select').select('Sendt')
        cy.get('#soknader-sendt article').then((articles: any) => {
            const soknader = articleTilSoknad(articles)
            let forrigeSoknad = soknader[0]
            soknader.forEach((sok: Soknad) => {
                assert.isTrue(senesteSendtDato(sok) <= senesteSendtDato(forrigeSoknad))
                forrigeSoknad = sok
            })
        })
    })
})
