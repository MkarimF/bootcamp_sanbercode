class AdminPage {
    visit() {
        cy.visit('/web/index.php/admin/viewSystemUsers');
    }

    clickAddButton() {
        cy.get('button.oxd-button--secondary').click();
    }
}

export default new AdminPage();
