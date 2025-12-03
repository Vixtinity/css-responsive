# 📘 PRÁCTICA FINAL: "META-RESPONSIVE DOCS"

**Módulo:** Diseño de Interfaces Web (2º DAW)  
**Proyecto:** Maquetación Responsive Avanzada (Grid + Flexbox + BEM)  
**Tiempo estimado:** 2 horas  
**Entrega:** Plataforma Moodle.

---

## 1. Contexto del Proyecto
Vas a construir una **Web de Documentación Técnica** sobre "Cómo hacer esta misma web". Es un ejercicio de meta-aprendizaje: el contenido de la página explica las técnicas que estás usando para construirla.

**Objetivo:** Demostrar el dominio de **Grid CSS** para layouts asimétricos y **Flexbox** para componentes, bajo una estricta metodología **Mobile First**.

---

## 2. Requerimientos Técnicos (Constraints)

### 2.1. Tecnologías Permitidas
*   **HTML5:** Semántico estricto.
*   **CSS3:** Nativo. **Prohibido SASS/SCSS** (queremos que uses variables CSS nativas y CSS Nesting nativo si lo deseas).
*   **JS:** Vanilla ES6+ (Solo para el menú móvil y el cambio de tema).
*   **Recursos Gráficos:**
    *   **Iconos:** Usar SVGs de [Heroicons](https://heroicons.com/) (copiar el SVG e insertarlo en el HTML).
    *   **Avatares:** Usar API de [DiceBear](https://www.dicebear.com/) o [UI Faces](https://uifaces.co/).

### 2.2. Accesibilidad (A11Y) -
*   **Contraste:** Los colores elegidos deben pasar el test AA de la WCAG.
*   **Interactividad:** El botón de menú y el de cambio de tema deben tener `aria-label` y atributos de estado (`aria-expanded="true/false"`).
*   **Foco:** Los elementos interactivos deben tener un `outline` visible al navegar con tabulador.

---

## 3. Sistema de Diseño (Design Tokens)

Debes implementar estas variables en `:root` y sus variaciones en `[data-theme="dark"]`.

### 3.1. Tipografía Variable y Fluida
Calcula los valores usando [Utopia.fyi](https://utopia.fyi/) para generar el código `clamp()`.
*   **Headings:** `'Space Grotesk'` (Google Fonts). Variable axes: `wght`.
*   **Body:** `'Inter'` (Google Fonts). Variable axes: `slnt`, `wght`.
*   **Escala:** El tamaño base del texto debe oscilar entre `1rem` (móvil) y `1.2rem` (escritorio) fluidamente.

### 3.2. Paleta de Color "Cyber-Doc"
| Token | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| `--bg-body` | `#F0F2F5` | `#0F172A` |
| `--bg-card` | `#FFFFFF` | `#1E293B` |
| `--text-primary` | `#111827` | `#F8FAFC` |
| `--text-secondary`| `#64748B` | `#94A3B8` |
| `--brand-color` | `#6366F1` (Indigo) | `#818CF8` |
| `--accent-color` | `#10B981` (Emerald) | `#34D399` |

---

## 4. Arquitectura del Layout (Grid System)

El layout cambia drásticamente en 3 puntos. **Se recomienda encarecidamente usar `grid-template-areas`**.

### 📱 Layout Mobile (< 768px)
*   **Estructura:** 1 Columna.
*   **Flujo:** Header (Sticky) ➔ Hero ➔ Content ➔ Widgets ➔ Footer.
*   **Menú:** Botón hamburguesa abre navegación a pantalla completa.

###  tablet Layout Tablet (768px - 1023px)
*   **Estructura:** 2 Columnas (`250px 1fr`).
*   **Sidebar:** Visible fijo a la izquierda (`height: 100vh`, `position: sticky`).
*   **Contenido:** El Header, Hero, Widgets y Main ocupan la columna derecha.

### 💻 Layout Desktop (> 1024px) - "El Asimétrico"
*   **Grid:** 12 Columnas.
*   **Sidebar:** Cols 1-2.
*   **Header:** Cols 3-12.
*   **Hero:** Cols 3-9 (Ocupa 7 columnas).
*   **Widgets:** Cols 10-12 (Ocupa 3 columnas, a la derecha del Hero).
*   **Main Content:** Cols 3-12 (Ocupa todo el ancho disponible debajo).

#### Esquema Visual (Wireframe Desktop)
```text
------------------------------------------------------------
| SIDE |                   HEADER                          |
| BAR  |---------------------------------------------------|
|      |                  |                                |
| (1-2)|   HERO AREA      |         WIDGETS AREA           |
|      |   (Cols 3-9)     |         (Cols 10-12)           |
|      |                  |                                |
|      |---------------------------------------------------|
|      |                                                   |
|      |            MAIN CONTENT AREA                      |
|      |            (Cols 3-12)                            |
|      |                                                   |
------------------------------------------------------------
```

---

## 5. Componentes Flexbox y Contenidos

Debes crear los siguientes componentes. **Copia y pega el texto proporcionado** en el HTML para cada sección.

### A. Componente: Hero Section (Grid Item)
*   **Técnica:** Flexbox centrado verticalmente.
*   **Contenido (H1 + P):**
    > **H1:** "Diseño Fluido: Del Caos al Orden"
    > **P:** "Bienvenido a la documentación viva. Esta página es un ejemplo práctico de cómo CSS Grid (Macro-layout) y Flexbox (Micro-layout) conviven en armonía. Cambia el tamaño de tu navegador para ver la magia."

### B. Componente: Sidebar Navigation
*   **Técnica:** Flex Column.
*   **Contenido:**
    *   **Perfil:** (Avatar + Nombre "Alex Dev" + Rol "Frontend Student"). Usa `align-items: center`.
    *   **Menú:** Links a: "Inicio", "Grid System", "Flex Components", "Tabla", "Formulario".

### C. Componente: Widgets Area (Grid Item lateral)
*   **Técnica:** Flex Column (Gap 1rem). Contiene dos tarjetas internas.
*   **Contenido Widget 1 (Stats):**
    *   **Titulo:** "Progreso del Curso"
    *   **Dato:** "75%" (Grande).
    *   **Texto:** "Módulos completados con Flexbox y Grid."
*   **Contenido Widget 2 (Tag Cloud):**
    *   **Técnica:** `display: flex; flex-wrap: wrap; gap: 0.5rem;`
    *   **Tags:** HTML5, Semántica, CSS Grid, Flexbox, BEM, A11y, SVG, Design Tokens.

### D. Componente: Sección Tabla (Main Content)
*   **Ubicación:** Dentro de `<main>`, etiqueta `<section>`.
*   **Reto:** "Card View" en móvil (ocultar thead, mostrar data-labels).
*   **Texto Introductorio:**
    > **H2:** "Tablas que sobreviven al móvil"
    > **P:** "Las tablas HTML tradicionales rompen el layout en pantallas pequeñas. La solución profesional no es poner un scroll horizontal, sino cambiar el `display` de las filas a `block` o `flex` para que parezcan tarjetas, inyectando los títulos con `::before` y `content: attr(data-label)`."
*   **Datos de la Tabla:** 4 columnas (Propiedad, Eje Principal, Eje Secundario, Uso Ideal). Llenar con 3 filas comparando `display: flex`, `display: grid` y `display: block`.

### E. Componente: Sección Formulario (Main Content)
*   **Ubicación:** Dentro de `<main>`, etiqueta `<section>`.
*   **Reto:** Inputs de 44px de alto en móvil. Grid de 2 columnas para "Nombre/Email" en Desktop.
*   **Texto Introductorio:**
    > **H2:** "Formularios y la Ley de Fitts"
    > **P:** "En dispositivos táctiles, el tamaño importa. Observa cómo los campos de este formulario aumentan su área de clic en pantallas pequeñas para cumplir con los estándares de accesibilidad (mínimo 44x44px)."
*   **Campos:** Nombre, Email, Select (Tema favorito), Checkbox (Acepto aprender CSS nativo), Botón Enviar.

### F. Footer (Flex Component)
*   **Técnica:** `justify-content: space-between`.
*   **Contenido:**
    *   Izquierda: Copyright © 2024.
    *   Derecha: **Social Strip** (3 iconos SVG de redes sociales con `gap: 1rem`).

---

## 6. Guía de Implementación (Paso a Paso)

1.  **HTML Skeleton:** Crea todo el HTML primero. No toques el CSS. Usa nombres de clase BEM (ej: `header__logo`, `nav__item--active`).
2.  **Variables:** Define los colores y tipografías en el CSS. Implementa el JS básico para que el botón de tema cambie la clase/atributo en el `<html>`.
3.  **Mobile First:** Escribe el CSS base. Olvida que existen pantallas grandes. Haz que se vea genial en una columna.
    *   *Tip:* Aquí es donde estilas la "Tabla Card" y el menú hamburguesa.
4.  **Tablet Breakpoint (`min-width: 768px`):**
    *   Activa el Grid de 2 columnas.
    *   Haz visible el Sidebar.
5.  **Desktop Breakpoint (`min-width: 1024px`):**
    *   Define el Grid de 12 columnas.
    *   Usa `grid-template-areas` para colocar el Hero y los Widgets lado a lado.
    *   Ajusta la tipografía con las variables fluidas.

---

# 🔎 Análisis Final y Preguntas (Self-Correction)

*Análisis realizado por el profesor sobre esta especificación:*

Esta especificación es mucho más sólida que las versiones anteriores porque **elimina la ambigüedad** del contenido. Al darles el texto exacto ("Copy"), el alumno se centra en la estructura, no en inventar "lorem ipsum".

La decisión de **eliminar el sidebar colapsable** es pedagógicamente correcta: el salto conceptual de Mobile-First a un Grid Asimétrico de 12 columnas ya es suficientemente complejo. Añadir mutaciones de layout con JS podría frustrar a los alumnos con menos nivel.

Los **Wireframes en texto** solucionan el problema de visualización espacial, y la **Lista de Recursos (Assets)** evita la parálisis por análisis buscando imágenes.

### Preguntas de Mejora (Para reflexionar tras la entrega):

1.  **¿Deberíamos exigir CSS Subgrid?**
    *   *Reflexión:* `subgrid` es muy potente para alinear el contenido de las tarjetas de los Widgets con el grid principal.
    *   *Decisión:* Para 2º de DAW puede ser demasiado avanzado si no todos los navegadores lo soportan perfectamente en los ordenadores del aula. Lo dejaremos como "Bonus Point".
2.  **¿Es suficiente la validación del formulario solo con CSS?**
    *   *Reflexión:* Hemos pedido estilos de `:valid/:invalid`. ¿Deberíamos pedir JS para evitar el envío?
    *   *Decisión:* No, el foco es el diseño. El feedback visual CSS es suficiente para esta asignatura.
3.  **Gestión de `gap` en el Grid asimétrico:**
    *   *Reflexión:* Al usar 12 columnas, el `gap` puede desalinear elementos si no se calcula bien el ancho total.
    *   *Decisión:* Recordar a los alumnos que usen `fr` (unidades fraccionarias) y no porcentajes fijos `%` para que el `gap` no rompa el layout.