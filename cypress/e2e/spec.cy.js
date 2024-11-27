describe('Fitur Login OrangeHRM', () => {

  // Positive Case
  it.only('TC-001: Pengguna login dengan username dan password valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    
    // Masukkan Username
    cy.get('[name="username"]').type('Admin');
    
    // Masukkan Password
    cy.get('[name="password"]').type('admin123');
    
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
    // Klik tombol login
    cy.get('[type = "submit"]').click();
    // Menunggu 5 detik sebelum assertion
    // cy.wait(5000); 
    // Assertion: Pastikan login berhasil 
    // cy.get('id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').contains('Dashboard').should('have.text', 'Dashboard');
    cy.wait('@actionSummary');

  });

  // Negative Case
  it('TC-002: Pengguna login dengan username dan password invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('aadmin');
    cy.get('[name="password"]').type('aadmin123');
    cy.get('[type="submit"]').click();
    cy.wait(5000); 
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text',{wait:4000}).should('contain', 'Invalid credentials');
    // Assertion: Pastikan login gagal 
    // cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});
