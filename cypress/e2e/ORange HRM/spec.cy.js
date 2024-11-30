import LoginPage from './LoginPage.cy';
import ForgotPasswordPage from './ForgotPasswordPage.cy';
import MyInfoPage from './MyInfoPages.cy';
import DashboardPage from'./DashboardPages.cy';

const loginPage = new LoginPage();
const forgotPasswordPage = new ForgotPasswordPage();

describe('Login Forgot Password ,and my Info Feature', () => {
  
// Positive Case - Login Success
  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.submitLogin();
    loginPage.verifySuccessfulLogin();
    cy.get('.oxd-text.oxd-text--h6').should('contain', 'Dashboard');
  });

  // Negative Case - Invalid Credentials
  it('should display error message for invalid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('InvalidUser');
    loginPage.enterPassword('InvalidPassword');
    loginPage.submitLogin();

    loginPage.verifyErrorMessage('Invalid credentials');
  });



it('should intercept login request and verify API response', () => {
    cy.intercept('POST', '/api/auth/login', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(200);
        expect(res.body).to.have.property('token');
      });
    });
  
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.submitLogin();
  });
  
  it('should intercept forgot password request and verify API response', () => {
    cy.intercept('POST', '/api/auth/forgot-password', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(200);
        expect(res.body.message).to.eq('Email sent successfully');
      });
    });
  
    loginPage.visit();
    loginPage.clickForgotPassword();
    forgotPasswordPage.enterUsername('Admin');
    forgotPasswordPage.clickReset();
  });
it('Should log in and view My Info page', () => {
    cy.intercept('GET', '/web/index.php/pim/viewMyDetails').as('myInfoPageLoad');

    // Step 1: Login
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.submitLogin();
    // Step 2: Navigate to My Info
    DashboardPage.clickMyInfo();
    // Step 3: Verify My Info Page
    cy.wait('@myInfoPageLoad');
    MyInfoPage.verifyMyInfoPage();
  });

});