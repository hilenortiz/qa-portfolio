describe('Módulo Autenticación - Automation Exercise', () => {

  // Ignoramos errores no capturados del sitio para evitar cortes
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    // Interceptamos la llamada interna de login
    cy.intercept('POST', '**/login').as('loginRequest');
    cy.visit('https://automationexercise.com/login');
  });

  context('Happy Path', () => {

    it('TC02: Login exitoso con datos de acceso válidos', () => {
      cy.fixture('login').then((data) => {
        cy.login(data.valido.email, data.valido.password);

        // Verificamos respuesta del servidor
        cy.wait('@loginRequest').its('response.statusCode').should('be.oneOf', [200, 302]);

        // Validaciones en el header
        cy.contains('Logged in as')
          .should('be.visible')
          .and('contain.text', data.valido.nombreUsuario);

        cy.contains('a', 'Logout').should('be.visible');
        cy.contains('a', 'Delete Account').should('be.visible');
      });
    });

  });

  context('Flujos negativos y validaciones de credenciales', () => {

    it('TC03A: Login con email no registrado', () => {
      cy.fixture('login').then((data) => {
        cy.login(data.emailInvalido.email, data.emailInvalido.password);

        // Mensaje de error visible
        cy.get('.login-form p')
          .should('be.visible')
          .and('have.text', 'Your email or password is incorrect!');

        // Asegurar que NO inició sesión y sigue en login
        cy.contains('Logged in as').should('not.exist');
        cy.url().should('include', '/login');
      });
    });

    it('TC03B: Login con contraseña incorrecta para usuario existente', () => {
      cy.fixture('login').then((data) => {
        cy.login(data.passwordInvalida.email, data.passwordInvalida.password);

        // Validamos que el mensaje de error sea visible
        cy.get('.login-form p')
          .should('be.visible')
          .and('have.text', 'Your email or password is incorrect!');

        // Confirmamos que no se inició sesión y sigue en login
        cy.contains('Logged in as').should('not.exist');
        cy.url().should('include', '/login');
      });
    });

  });

});