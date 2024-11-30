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
    verifySuccessfulLogin() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
        cy.wait('@actionSummary');
        cy.url().should('include', '/dashboard');
    }
      
    verifyUnsuccessfulLogin() {
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain', 'Invalid credentials');
      }
      
    submitLogin() {
      cy.get('[type="submit"]').click();
    }
    clickForgotPassword() {
      cy.contains('Forgot your password?').click();
    }
    verifyErrorMessage(message) {
      cy.get('.oxd-alert-content-text').should('contain', message);
    }
  }
  
  export default LoginPage;
  