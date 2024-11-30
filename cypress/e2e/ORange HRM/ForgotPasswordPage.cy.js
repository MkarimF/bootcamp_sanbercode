class ForgotPasswordPage {
    enterUsername(username) {
      cy.get('input[placeholder="Username"]').type(username);
    }
  
    clickReset() {
      cy.contains('Reset Password').click();
    }

  
    verifyResetMessage() {
      cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309').as('sendPassReset');
      cy.wait('@sendPassReset',{timeout:6000});
      cy.url().should('contain','Reset Password link sent successfully');
    }
  }
  
  export default ForgotPasswordPage;
  