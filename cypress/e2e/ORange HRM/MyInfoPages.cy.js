class MyInfoPage {
    verifyMyInfoPage() {
      // Cek dengan partial match pada bagian yang stabil dari URL
      cy.url().should('include', '/web/index.php/pim/viewPersonalDetails');
      cy.get('h6').should('contain', 'Personal Details');
    }
  }
  
  export default new MyInfoPage();
  