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

| ID | Título | Severidad | Prioridad |
| :--- | :--- | :---: | :---: |
| **BUG-01** | Checkout acepta tarjetas vencidas | 🔴 Alta | 🔴 Alta |
| **BUG-02** | Checkout acepta números de tarjeta inválidos | 🔴 Alta | 🔴 Alta |
| **BUG-03** | Checkout 404 con total negativo | 🔴 Crítica | 🔴 Alta |
| **BUG-04** | Campo cantidad sin límites | 🟡 Media | 🟡 Media |
| **BUG-05** | Cantidad solo editable desde vista de producto | 🟡 Media | 🟡 Media |
| **BUG-06** | Registro permite contraseñas débiles | 🔴 Alta | 🔴 Alta |
| **BUG-07** | Registro acepta emails sin dominio válido | 🟡 Media | 🟡 Media |
| **BUG-08** | El campo "Zipcode" acepta un solo dígito | 🟡 Media | 🟡 Media |
| **BUG-09** | El campo "Mobile Number" acepta un solo dígito | 🟡 Media | 🟡 Media |

📎 [Ver todos los reportes de bugs](manual-testing/bug-reports/)

---

## 📁 Estructura del repositorio

```text
qa-portfolio/
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
```
# ▶️ Cómo ver y ejecutar este proyecto

### 1. Automatización (Cypress)

Asegurate de tener **Node.js** instalado. Abrí la terminal en la raíz del proyecto y ejecutá:

```bash
# Instalar dependencias
npm install

# Abrir Cypress en modo interactivo (recomendado)
npx cypress open

# Ejecutar las pruebas por consola (headless)
npx cypress run
```

### 2. API Testing (Postman)

1. Abrir **Postman**.
2. Hacer clic en **Import** (arriba a la izquierda).
3. Seleccionar el archivo:

```text
api-testing/postman/AutomationExercise_API.postman_collection.json
```

4. Ejecutar las requests individuales o correr la suite completa desde **Run collection**.

### 3. Validación de Base de Datos (SQL)

Las consultas de prueba y validación se encuentran explicadas y documentadas paso a paso en:

```text
sql/validation-queries.sql
```

## 🙋🏻‍♀️ Sobre mí

Apasionada por el testing, con formación sólida en pruebas manuales, de API y automatización. Diseñé este portfolio para mostrar mi forma de trabajar: estructurada, con atención al detalle, casos de prueba reales y bugs bien documentados.

Busco mi primera oportunidad profesional en QA para sumarme a un equipo, seguir aprendiendo y aportar valor desde el primer día.

📫 **Contacto:** [LinkedIn](https://linkedin.com/in/hilenortiz) • [Email](mailto:hilenortiz@gmail.com)



