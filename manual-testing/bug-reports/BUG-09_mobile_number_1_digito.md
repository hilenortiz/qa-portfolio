# BUG-09: El campo "Mobile Number" acepta un solo dígito

## Descripción
En el formulario de registro, el campo "Mobile Number" permite ingresar un solo dígito, sin ningún tipo de validación de formato.

## Pasos para reproducir
1. Navegar a `https://www.automationexercise.com/login`.
2. En la sección "New User Signup!", completar:
- *Name:* `James Test`
- *Email:* `testjames@ejemplo.com`
3. Hacer clic en "Signup" para avanzar a "Enter Account Information".
4. Completar el resto de los campos con datos válidos.
5. En el campo "Mobile Number", ingresar: `1`.
6. Hacer clic en "Create Account".

## Resultado esperado
El sistema debería rechazar el campo por no cumplir una longitud mínima razonable para un número de teléfono.

## Resultado obtenido
El sistema creó la cuenta exitosamente, aceptando `1` como valor válido para el campo Mobile Number.

## Evidencia
![Mobile Number con un dígito](/imagenes/BUG-09_evidencia1.png)
![Cuenta creada](/imagenes/BUG-09_evidencia2.png)

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