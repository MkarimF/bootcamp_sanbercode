describe('Fitur Login OrangeHRM', () => {

  // Positive Case
  it('TC-001: Pengguna login dengan username dan password valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    
    // Masukkan Username
    cy.get('input[placeholder="Username"]').type('Admin');
    
    // Masukkan Password
    cy.get('input[placeholder="Password"]').type('admin123');
    
    // Klik tombol login
    cy.contains('Login').click();
    // Menunggu 5 detik sebelum assertion
    cy.wait(5000); 
    // Assertion: Pastikan login berhasil 
    cy.get('h6', { timeout: 10000 }).contains('Dashboard').should('have.text', 'Dashboard');

  });

  // Negative Case
  it('TC-002: Pengguna login dengan username dan password invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Masukkan Username salah
    cy.get('input[placeholder="Username"]').type('aDMIN');
    
    // Masukkan Password salah
    cy.get('input[placeholder="Password"]').type('Admin122');
    
    // Klik tombol login
    cy.contains('Login').click();

    // Assertion: Pastikan login gagal 
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});
