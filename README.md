# 📘 Meta-Responsive Docs - Documentación Completa

## 🎯 Resumen del Proyecto

Se ha creado una **web educativa completa sobre diseño responsive** que explica paso a paso cómo construir layouts responsivos usando **CSS Grid, Flexbox y Media Queries** con metodología **Mobile First**.

---

## 📋 Contenidos Educativos Incluidos

### 1. **Introducción al Diseño Responsive** (Sección Intro)
- Concepto de Mobile First
- Escala Fluida con `clamp()`
- Design Tokens (variables CSS)
- 3 tarjetas informativas con conceptos clave

### 2. **Tipografía Fluida** (Sección Tipografía)
- Explicación de `clamp(min, preferred, max)`
- Cálculo de escalas de tipografía
- Ventajas de la tipografía fluida
- Ejemplos de tamaños en diferentes dispositivos

### 3. **Colores y Design Tokens** (Sección Colores)
- Paleta de colores "Cyber-Doc"
- Implementación con CSS Variables
- Dark mode y Light mode
- Grid visual de colores

### 4. **CSS Grid: Layouts Asimétricos** (Sección Grid)
- Mobile: 1 Columna
- Tablet: 2 Columnas (250px + 1fr)
- Desktop: 12 Columnas Asimétrico
- Ejemplos de código con explicaciones

### 5. **Flexbox: Componentes** (Sección Flexbox)
- Navbar flexible
- Widgets apilados
- Tags responsivos con flex-wrap
- Uso de gap vs márgenes

### 6. **Media Queries: Mobile First** (Sección Media)
- Estructura de media queries
- Breakpoints recomendados (768px, 1024px)
- Comparativa: Mobile First vs Desktop First

### 7. **Tablas Responsivas** (Sección Tabla)
- Transformación: Card View en móvil
- Uso de `data-label` con `::before`
- Comparativa: Flexbox vs Grid vs Block
- Tabla interactiva

### 8. **Accesibilidad (WCAG AA)** (Sección Accesibilidad)
- Contraste de colores 4.5:1
- Focus visible en elementos interactivos
- Atributos ARIA (aria-label, aria-expanded)
- Consideraciones de accesibilidad responsive

### 9. **Formularios y Ley de Fitts** (Sección Formulario)
- Inputs con altura mínima 44x44px
- Grid 2 columnas en desktop
- Validación visual con CSS
- Formulario interactivo funcional

### 10. **Checklist Final** (Sección Resumen)
- 10 puntos de verificación
- Checkboxes interactivos
- Resumen de todos los elementos

---

## 🏗️ Arquitectura Técnica

### HTML5 Semántico
```
<html> (data-theme="light|dark")
├── <header> (Sticky)
├── <aside class="sidebar">
│   ├── Perfil (Avatar + Nombre + Rol)
│   └── <nav> (Menú de navegación)
├── <div class="main-container">
│   ├── <header> (Logo y botones)
│   ├── <section class="hero">
│   ├── <aside class="widgets">
│   ├── <main>
│   │   └── Múltiples <section>
│   └── <footer>
```

### Nomenclatura BEM
- `.block`: Elemento principal (ej: `.header`)
- `.block__element`: Hijo (ej: `.header__logo`)
- `.block__element--modifier`: Variación (ej: `.sidebar__link--active`)

### CSS Grid System

**Mobile (< 768px):**
```css
.layout { grid-template-columns: 1fr; }
```

**Tablet (768px - 1023px):**
```css
.layout { grid-template-columns: 250px 1fr; }
```

**Desktop (> 1024px):**
```css
.layout { grid-template-columns: repeat(12, 1fr); }
```

### Design Tokens
```css
:root {
    /* Tipografía Fluida */
    --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.2rem);
    
    /* Colores Light Mode */
    --bg-body: #F0F2F5;
    --text-primary: #111827;
    --brand-color: #6366F1;
    --accent-color: #10B981;
}

[data-theme="dark"] {
    --bg-body: #0F172A;
    --text-primary: #F8FAFC;
    --brand-color: #818CF8;
    --accent-color: #34D399;
}
```

---

## 🎨 Características Principales

### Mobile First
✓ Estilos base para 320px  
✓ Media queries solo agregan lo necesario  
✓ Menor tamaño de CSS  
✓ Mejor rendimiento en móvil  

### Tipografía Fluida
✓ `clamp()` para escalado automático  
✓ 8 niveles de tamaño (sm, base, lg, xl, 2xl, 3xl)  
✓ 5 niveles de espaciado fluido  
✓ Transiciones suaves entre breakpoints  

### Accesibilidad WCAG AA
✓ Contraste 4.5:1 mínimo  
✓ Focus outline visible (2px)  
✓ aria-label en botones interactivos  
✓ aria-expanded para menú colapsable  
✓ Respeta `prefers-reduced-motion`  

### Componentes Responsive
✓ Menú hamburguesa funcional  
✓ Sidebar sticky en tablet/desktop  
✓ Tabla con card view en móvil  
✓ Formulario con layout adaptativo  
✓ Grid de tarjetas auto-responsive  

### Tema Oscuro/Claro
✓ Detecta preferencia del sistema  
✓ Guarda selección en localStorage  
✓ Transiciones suaves  
✓ Icono dinámico (sol/luna)  

---

## 📱 Breakpoints

| Dispositivo | Ancho | Layout | Sidebar |
|-----------|-------|--------|---------|
| **Móvil** | < 768px | 1 columna | Colapsable |
| **Tablet** | 768px - 1023px | 2 columnas | Visible fijo |
| **Desktop** | > 1024px | 12 columnas | Visible fijo |

---

## 📚 Tecnologías Utilizadas

- **HTML5**: Semántico, estructura clara
- **CSS3 Nativo**: Variables, Grid, Flexbox, Media Queries, clamp()
- **JavaScript ES6+**: Vanilla (menú, tema, validación)
- **Google Fonts**: Space Grotesk, Inter
- **SVGs**: Heroicons (inline)
- **APIs**: DiceBear (avatares)

---

## 🔧 Funcionalidades JavaScript

### Menú Hamburguesa
- Abre/cierra con botón
- Cierra con ESC o overlay
- Cierra al hacer clic en link
- Estado aria-expanded actualizado

### Cambio de Tema
- Detección automática de sistema
- Almacenamiento en localStorage
- Icono dinámico (sol/luna)
- Transiciones suaves

### Navegación Activa
- Intersection Observer para secciones visibles
- Actualización de link activo en sidebar
- Viewport margin customizado

### Validación de Formulario
- Feedback visual en tiempo real
- Estilos :valid/:invalid
- Mensaje de envío exitoso
- Reset automático

---

## 📊 Estructura de Secciones

1. **Inicio** → Hero + Widgets
2. **Introducción** → 3 tarjetas conceptos
3. **Tipografía Fluida** → clamp() explicado
4. **Design Tokens** → Colores, variables
5. **CSS Grid** → Mobile → Tablet → Desktop
6. **Flexbox** → 3 ejemplos prácticos
7. **Media Queries** → Estructura Mobile First
8. **Tablas** → Card view + Comparativa
9. **Accesibilidad** → WCAG AA + Atributos
10. **Formulario** → Ley de Fitts + Validación
11. **Resumen** → Checklist 10 puntos

---

## 🎓 Casos de Uso Educativo

Esta web es perfecta para:
- ✅ Aprender responsive design desde cero
- ✅ Entender Mobile First methodology
- ✅ Ver ejemplos de código ejecutable
- ✅ Conocer CSS Grid asimétrico
- ✅ Aprender Flexbox para componentes
- ✅ Implementar accesibilidad (WCAG)
- ✅ Design Tokens en CSS nativo
- ✅ Tablas responsivas
- ✅ Formularios accesibles
- ✅ Tema oscuro/claro

---

## 🚀 Cómo Usar

1. Abre `index.html` en navegador
2. Explora las secciones desde la navegación
3. Redimensiona la ventana para ver breakpoints
4. Prueba el modo oscuro (botón arriba derecha)
5. Interactúa con formulario y checklist
6. Lee los bloques de código para aprender
7. Inspecciona el código fuente (DevTools)

---

## ✨ Puntos Destacados

✓ **Meta-proyecto**: La web explica cómo está hecha  
✓ **100% CSS Nativo**: Sin SASS/SCSS  
✓ **Accesible**: WCAG AA compliance  
✓ **Educativo**: Explicaciones paso a paso  
✓ **Responsive**: 3 breakpoints completos  
✓ **Interactivo**: Menú, tema, validación  
✓ **Performance**: Optimizado para móvil  
✓ **Código Limpio**: BEM + Semántica HTML  

---

## 📝 Notas para el Alumno

- Abre DevTools (F12) para inspeccionar el CSS
- Usa la pestaña "Elements" para ver la estructura HTML
- En la pestaña "Styles" verás las media queries
- Prueba redimensionando en el modo responsive (Cmd+Shift+M en Mac)
- Lee los comentarios en el CSS para entender la estructura
- Experimenta cambiando los valores en DevTools

---

Creado para: **2º DAW - Diseño de Interfaces Web (IES Cura Valera)**  
Metodología: **Mobile First + Design Tokens + Semantic HTML + WCAG AA**
