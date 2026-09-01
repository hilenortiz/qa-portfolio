# 🧪 QA Portfolio — Automation Exercise

[![Cypress](https://img.shields.io/badge/Cypress-13.x-17202C?logo=cypress&logoColor=white)](#)
[![Postman](https://img.shields.io/badge/Postman-v10-FF6C37?logo=postman&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](#)
[![SQL](https://img.shields.io/badge/SQL-SQLite-003B57?logo=sqlite&logoColor=white)](#)

## 📋 Sobre este proyecto

Proyecto de QA sobre el sitio de práctica [AutomationExercise](https://automationexercise.com), armado para mostrar cómo trabajo en las distintas etapas del testing: diseño y ejecución de casos manuales, documentación de bugs, testing de API con Postman, validación de datos con SQL, y automatización de flujos críticos con Cypress.

La idea de este portfolio no fue abarcar todo el sitio, sino combinar estas áreas en un proyecto claro y ordenado, con foco en poder explicar y defender cada decisión que tomé.

---

## 🎯 Alcance

* 📝 **Testing manual:** Diseño y ejecución de 9 casos de prueba sobre registro, login, catálogo, carrito y checkout.
* 🐛 **Bug reports:** Documentación de los bugs encontrados durante la prueba, con pasos para reproducirlos, severidad y capturas de evidencia.
* 🔌 **API testing:** Colección en Postman contra la API del sitio, incluyendo validaciones con respuestas exitosas y de error.
* 🗄️ **SQL:** Consultas de validación de datos para verificar que lo que se ve en la web coincida con lo registrado en la base de datos.
* 🤖 **Automatización E2E:** Pruebas automatizadas con Cypress sobre los flujos principales.

---

## 🛠️ Herramientas utilizadas

* **Testing manual y documentación:** Casos de prueba, reportes de bugs.
* **API testing:** Postman.
* **Automatización:** Cypress, JavaScript.
* **Base de datos:** SQL (SQLite).
* **Control de versiones:** Git, GitHub.

---

## 🐛 Bugs reportados

| ID | Título del Bug | Severidad | Prioridad | Detalle |
| :--- | :--- | :---: | :---: | :---: |
| **BUG-01** | *Pendiente* | `Pendiente` | `Pendiente` | [Ver reporte](manual-testing/bug-reports/BUG-01.md) |
| **BUG-02** | *Pendiente* | `Pendiente` | `Pendiente` | [Ver reporte](manual-testing/bug-reports/BUG-02.md) |
| **BUG-03** | *Pendiente* | `Pendiente` | `Pendiente` | [Ver reporte](manual-testing/bug-reports/BUG-03.md) |

---

## 📁 Estructura del repositorio

```text
qa-portfolio-automationexercise/
├── README.md
├── manual-testing/
│   ├── test-cases/            # Casos de prueba manuales
│   └── bug-reports/           # Reportes de bugs con evidencias
├── api-testing/
│   └── postman/               # Colección y variables de Postman
├── sql/
│   └── validation-queries.sql # Consultas de prueba
└── automation/
    └── cypress/
        ├── e2e/               # Pruebas automatizadas
        └── cypress.config.js

Cómo ver y ejecutar este proyecto
1. Automatización (Cypress)
Tener Node.js instalado, abrir la terminal en la carpeta del proyecto y ejecutar:

bash
npm install
npx cypress open
(Se abrirá la ventana de Cypress para elegir el navegador y correr las pruebas visualmente).

2. API Testing (Postman)
Abrir Postman y hacer clic en Import.

Seleccionar el archivo dentro de la carpeta api-testing/postman/.

Ejecutar las solicitudes individuales o correr la colección completa desde el botón Run collection.

3. Validación de Base de Datos (SQL)
Las consultas de validación se encuentran documentadas y comentadas paso a paso dentro del archivo:
sql/validation-queries.sql

## 🙋🏻‍♀️ Sobre mí

Apasionada por el testing, con formación sólida en pruebas manuales, de API y automatización. Armé este portfolio buscando reflejar un enfoque de trabajo real y aplicado: con flujos completos, bugs documentados con criterio y código pensado para sostenerse por sí mismo.

Busco mi primera oportunidad profesional en QA para sumarme a un equipo, seguir aprendiendo y aportar valor desde el primer día con la misma claridad con la que documento cada hallazgo.

---

📫 **Contacto:** [LinkedIn](https://www.linkedin.com/in/hilenortiz) • [Email](mailto:hilenortiz@gmail.com)

text
