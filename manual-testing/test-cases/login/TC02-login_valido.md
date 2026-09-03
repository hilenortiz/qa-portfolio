# TC02: Login exitoso con datos de acceso válidos

## Descripción
Verificar que un usuario registrado pueda iniciar sesión correctamente en el sitio utilizando su email y contraseña.

**Tipo:** Camino feliz (happy path)

## Precondiciones
- El usuario debe estar registrado previamente en el sistema.
- Tener acceso a la página de inicio de sesión (`https://www.automationexercise.com/login`).

## Datos de Acceso
- *Email:* `test@ejemplo.com`
- *Contraseña:* `Password123`

## Pasos
1. Navegar a la página principal del sitio (`https://www.automationexercise.com`).
2. Hacer clic en el botón "Signup / Login".
3. En la sección "Login to your account", completar el campo "Email Address" con el email de prueba (`test@ejemplo.com`).
4. Completar el campo "Password" con la contraseña de prueba (`Password123`).
5. Hacer clic en el botón "Login".

## Resultado Esperado
1. El sistema inicia sesión correctamente.
2. Se muestra el mensaje "Logged in as Juan Test" o el nombre del usuario en la barra de navegación.
3. Se visualizan las opciones "Logout" y "Delete Account".

## Resultado Obtenido
El login fue exitoso. Se visualizaron las opciones de "Logout" como "Delete Account" en la barra de navegación, lo que confirma que la sesión se inició correctamente. Sin embargo, el nombre del usuario no aparecen en la barra de navegación.

## Evidencia
![Login exitoso](imagenes/evidencia_TC02.png)

## Estado
⚠️Aprobado con observaciones: 
Login exitoso, pero el nombre del usuario no se muestra en la barra de navegación.