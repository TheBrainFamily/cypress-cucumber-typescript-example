// eslint-disable-next-line
/// <reference path="../../support/index.d.ts" />

before(() => {
    cy.log('before')
});

beforeEach(async () => {
    cy.log('beforeEach')
});

after(() => {
    cy.log('After all')
});
