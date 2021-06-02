import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { takeScreenshot, visitUri } from '../page_objects/common.page';

When(/^I visit the "([^\"]+)" uri$/, (uri: string) => {
  visitUri(uri);
});

Then(/^I take a snapshot for visual diffing$/, () => {
  takeScreenshot();
});
