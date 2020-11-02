/// <reference path='../support/index.d.ts' />

Cypress.Commands.add('pass', (somethingToSay: string) => {
  console.log('HELLO', somethingToSay)
});