# TC04: Ver todos los productos

## Descripción
Verificar que cualquier usuario puede visualizar la lista completa de productos y acceder a los detalles de un producto específico.

**Tipo:** Camino feliz (happy path)

## Precondiciones
- Tener acceso a la página principal.
- No es necesario estar logueado.

## Pasos
1. Navegar a la página principal (`https://www.automationexercise.com`).
2. Hacer clic en el botón "Products" en la barra de navegación.
3. Verificar que se visualiza la lista de productos.
4. Hacer clic en "View Product" del primer producto.

## Resultado Esperado
1. El usuario es redirigido a la página "All Products".
2. La lista de productos es visible.
3. Al hacer clic en "View Product", se redirige a la página de detalles del producto.

## Resultado Obtenido
La lista de productos se visualizó correctamente y al hacer clic en "View Product" se accedió a la página de detalles del producto seleccionado; mostrando su nombre, categoría, precio, disponibilidad, condición y marca.

## Evidencia
![Lista de todos los productos](imagenes/evidencia_TC04_lista.png)
![Detalle del producto](imagenes/evidencia_TC04_detalle.png)

## Estado
✅ Aprobado