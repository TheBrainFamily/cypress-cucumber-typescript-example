/// <reference path='../../../support/index.d.ts' />
import { When } from 'cypress-cucumber-preprocessor/steps';

const url = "https://github.com";

When(`I open GitHub page`, () => {
  cy.visit(url);
});
