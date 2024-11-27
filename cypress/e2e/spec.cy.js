import LoginPage from "./LoginPOM.cy";

describe('Fitur Login OrangeHRM', () => {
  const loginPage = new LoginPage();
  // intercept 
  // Positive Case
  // it('TC-001: Pengguna login dengan username dan password valid', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  //   cy.get('[name="username"]').type('Admin');
  //   cy.get('[name="password"]').type('admin123');
  //   cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
  //   cy.get('[type = "submit"]').click();
  //   cy.wait('@actionSummary');
  //   // cy.get('id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').contains('Dashboard').should('have.text', 'Dashboard');

  // });

  // Negative Case
  // it('TC-002: Pengguna login dengan username dan password invalid', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //   cy.get('[name="username"]').type('aadmin');
  //   cy.get('[name="password"]').type('aadmin123');
  //   cy.get('[type="submit"]').click();
  //   cy.wait(5000); 
  //   cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text',{wait:4000}).should('contain', 'Invalid credentials');
  //   // Assertion: Pastikan login gagal 
  //   // cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain', 'Invalid credentials');
  // });
  
  // POM Login Success
  it('TC-001.1: Pengguna login ', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.submit();
    loginPage.verifySuccessfulLogin();
  });
  //POM Login Unsucces
  it('TC-002.1: Pengguna login dengan credential yang salah ', () => {
    loginPage.visit();
    loginPage.enterUsername('aadmin');
    loginPage.enterPassword('aadmin123');
    loginPage.submit();
    loginPage.verifyUnsuccessfulLogin();
  });
});
