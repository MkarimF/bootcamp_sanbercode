
class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    enterUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[name="password"]').type(password);
    }
  
    submit() {
      cy.get('[type="submit"]').click();
    }
  
    verifySuccessfulLogin() {
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
      cy.wait('@actionSummary');
      cy.url().should('include', '/dashboard');
    }
  
    verifyUnsuccessfulLogin() {
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain', 'Invalid credentials');
    }
  }
  
  export default LoginPage;