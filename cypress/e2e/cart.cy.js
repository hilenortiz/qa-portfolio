describe('Módulo Carrito - Automation Exercise', () => {

Cypress.on('uncaught:exception', () => false);

beforeEach(() => {
    cy.visit('https://automationexercise.com/products');
});

it('TC05: Agregar múltiples productos al carrito y verificar el detalle', () => {
    cy.fixture('products').then((items) => {

    //Agrego el primer producto (Blue Top)
    cy.contains('.productinfo p', items.primerProducto.nombre)
        .parents('.single-products')
        .contains('Add to cart')
        .click();

    //Continuar comprando desde el modal emergente
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-content').contains('Continue Shopping').click();

    //Agregar el segundo producto (Sleeveless Dress)
    cy.contains('.productinfo p', items.segundoProducto.nombre)
        .parents('.single-products')
        .contains('Add to cart')
        .click();

    //Ir a la vista del carrito desde el enlace del modal
    cy.get('.modal-content').contains('u', 'View Cart').click();


    cy.url().should('include', '/view_cart');

    // Validar fila del primer producto
    cy.contains('#cart_info_table tbody tr', items.primerProducto.nombre).within(() => {
        cy.get('.cart_price').should('contain.text', items.primerProducto.precio);
        cy.get('.cart_quantity button').should('have.text', items.primerProducto.cantidad);
        cy.get('.cart_total_price').should('have.text', items.primerProducto.total);
    });

    // Validar segundo producto
    cy.contains('#cart_info_table tbody tr', items.segundoProducto.nombre).within(() => {
        cy.get('.cart_price').should('contain.text', items.segundoProducto.precio);
        cy.get('.cart_quantity button').should('have.text', items.segundoProducto.cantidad);
        cy.get('.cart_total_price').should('have.text', items.segundoProducto.total);
});
    });
});

});