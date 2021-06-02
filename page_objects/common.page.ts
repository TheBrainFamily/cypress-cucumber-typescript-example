export const visitUri = (uri: string) => {
  cy.visit(uri);
};

export const takeScreenshot = () => {
  cy.percySnapshot();
};
