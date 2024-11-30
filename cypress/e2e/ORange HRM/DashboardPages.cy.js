class DashboardPage {
    clickMyInfo() {
      cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click();
    }
  }
  
  export default new DashboardPage();
  