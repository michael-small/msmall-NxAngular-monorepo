describe('sidenav', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavcomponent--primary'));
  it('should render the component', () => {
    cy.get('msmall-angular-monorepo-sidenav').should('exist');
  });
});