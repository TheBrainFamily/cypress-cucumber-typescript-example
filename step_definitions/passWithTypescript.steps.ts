import { Given } from 'cypress-cucumber-preprocessor/steps';
import { pass } from '../page_objects/passWithTypescript.page';

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given(/I pass/, () => {
  pass('hello world');
  console.log(localFunctionWithTypes(1, 2) === 2);
});
