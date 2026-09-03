# BUG-02: Checkout acepta números de tarjeta inválidos

## Descripción
En el flujo de pago, el sistema permite completar una orden utilizando un número de tarjeta con muchos menos dígitos de lo que exige cualquier formato válido (5 dígitos en vez de 16).

## Pasos para reproducir
1. Agregar un producto al carrito.
2. Hacer clic en "Proceed To Checkout".
3. Completar los datos de envío y facturación.
4. Llenar los datos de pago con:
- *Name on Card:* `Juan Test`
- *Card Number:* `12345`
- *CVC:* `123`
- *Expiration Month:* `12`
- *Expiration Year:* `2030`
5. Hacer clic en "Pay and Confirm Order".

## Resultado esperado
El sistema debería mostrar un mensaje de error indicando que el número de tarjeta no tiene un formato válido.

## Resultado obtenido
El sistema procesó el pago y confirmó la orden sin validar que la tarjeta utilizada tenga un formato válido. Se mostró el mensaje "Your order has been placed successfully!" y se confirmó la orden.

## Evidencia
![Pago con tarjeta invalida](/imagenes/BUG-02_tarjnumeros.png)
![Orden confirmada](/imagenes/BUG-02_tarjeta_pagoconfirmado.png)

## Ambiente
- *Navegador:* Chrome 152
- *URL:* `https://www.automationexercise.com/payment`
- *Fecha:* 03/09/2026

## Severidad
🔴 Alta. Permite completar una transacción con un número de tarjeta inválido.

## Prioridad
🔴 Alta.

## Reproducibilidad
Siempre, ocurre en todos los intentos utilizando una tarjeta con formato invalido.

## Casos de prueba relacionados
- TC06 — Checkout completo

## Contexto adicional
Este bug (junto con BUG-01), refuerza la falta de validación en el flujo de pago.