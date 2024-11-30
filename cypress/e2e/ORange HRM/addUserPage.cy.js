class AddUserPage {
    selectUserRole(role) {
        cy.get('div[role="listbox"]').click();
        cy.contains('span', role).click();
    }

    typeEmployeeName(name) {
        cy.get('input[placeholder="Type for hints..."]').type(name);
        cy.wait(500);  // Menunggu dropdown suggestion muncul
        cy.contains('.oxd-autocomplete-option', name).click();
    }

    typeUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    typePassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    confirmPassword(password) {
        cy.get('input[name="confirmPassword"]').type(password);
    }

    clickSaveButton() {
        cy.get('button[type="submit"]').click();
    }
}

export default new AddUserPage();
