describe('Módulo Checkout - Automation Exercise', () => {

Cypress.on('uncaught:exception', () => false);

beforeEach(() => {
    // Precondición 1: Iniciar sesión con usuario válido
    cy.visit('https://automationexercise.com/login');
    cy.fixture('login').then((user) => {
    cy.login(user.valido.email, user.valido.password);
    cy.contains('Logged in as').should('be.visible');
    });
});

it('TC06: Checkout completo', () => {

// Agrego el primer producto y continuo con la compra
    cy.visit('https://automationexercise.com/products');
    cy.fixture('products').then((prod) => {
    cy.contains('.productinfo p', prod.primerProducto.nombre)
        .parents('.single-products')
        .contains('Add to cart')
        .click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-content').contains('Continue Shopping').click();

    // Agrego segundo producto
    cy.contains('.productinfo p', prod.segundoProducto.nombre)
        .parents('.single-products')
        .contains('Add to cart')
        .click();

    // Ir al carrito
    cy.get('.modal-content').contains('u', 'View Cart').click();
    });

    // Proceder al checkout
    cy.url().should('include', '/view_cart');
    cy.contains('a', 'Proceed To Checkout').click();
    cy.url().should('include', '/checkout');

    // Validar datos de envío y total esperado (1500)
    cy.get('#address_delivery').should('be.visible');
    cy.fixture('checkout').then((data) => {
    cy.get('#cart_info').should('contain.text', data.totalEsperado);

    // Cargar comentario y hacer clic en Place Order
    cy.get('textarea[name="message"]').type(data.comentario);
    cy.contains('a', 'Place Order').click();

    // Completar datos de pago
    cy.url().should('include', '/payment');
    cy.get('[data-qa="name-on-card"]').type(data.pago.nombreTitular);
    cy.get('[data-qa="card-number"]').type(data.pago.numeroTarjeta);
    cy.get('[data-qa="cvc"]').type(data.pago.cvc);
    cy.get('[data-qa="expiry-month"]').type(data.pago.mesExpiracion);
    cy.get('[data-qa="expiry-year"]').type(data.pago.anioExpiracion);

    // Confirmar orden
    cy.get('[data-qa="pay-button"]').click();

    // Validar confirmación de compra
    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.contains('Order Placed!').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    });
});

});