# BUG-08: El campo "Zipcode" acepta un solo dígito

## Descripción
En el formulario de registro, el campo "Zipcode" permite ingresar un solo dígito sin ningún tipo de validación de formato.


## Pasos para reproducir
1. Navegar a `https://www.automationexercise.com/login`.
2. En la sección "New User Signup!", completar:
- *Name:* `Nombre Test`
- *Email:* `testzip@ejemplo.com`
3. Hacer clic en "Signup" para avanzar a "Enter Account Information".
4. Completar el resto de los campos con datos válidos.
5. En el campo "Zipcode", ingresar: `1`.
6. Hacer clic en "Create Account".

## Resultado esperado
El sistema debería rechazar el campo por no cumplir una longitud mínima razonable para un código postal.

## Resultado obtenido
El sistema creó la cuenta exitosamente, aceptando `1` como valor válido para el campo Zipcode.

## Evidencia
![Zipcode con un dígito](/imagenes/BUG-08_zipcode_datos.png)
![Cuenta Confirmada](/imagenes/BUG-08_cuenta_creada.png)

## Ambiente
- *Navegador:* Chrome 152
- *URL:* `https://www.automationexercise.com/signup`
- *Fecha:* 03/09/2026

## Severidad
🟡 Media. Permite completar un registro con datos inválidos y puede afectar la calidad de los datos.

## Prioridad
🟡 Media.

## Reproducibilidad
Reproducible de forma consistente.

## Casos de prueba relacionados
- TC01 — Registro exitoso de usuario con datos válidos