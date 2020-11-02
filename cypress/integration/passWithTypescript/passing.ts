/// <reference path='../../support/index.d.ts' />
import { Given } from 'cypress-cucumber-preprocessor/steps';

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given(/I pass/, () => {
  cy.pass("hello world");
  console.log(localFunctionWithTypes(1, 2) === 2);
});
