# 🎸 Rafita Music Lab

Una página web personal para clases de música personalizadas, especializada en guitarra eléctrica, acústica, teoría musical y producción musical.

## 📋 Descripción

**Rafita Music Lab** es el sitio web oficial de Rafael, un guitarrista y profesor de música con más de 8 años de experiencia musical y 2 años de experiencia docente. El sitio presenta sus servicios de enseñanza musical, experiencia profesional y permite a los estudiantes potenciales conocer más sobre las clases ofrecidas.

### 🎯 Objetivos del Sitio

- Presentar los servicios de enseñanza musical de Rafael
- Mostrar la experiencia y trayectoria profesional
- Facilitar el contacto con estudiantes potenciales
- Demostrar las habilidades a través de contenido multimedia
- Ofrecer información detallada sobre las diferentes modalidades de clases

## ✨ Características Principales

### 🎵 Servicios Ofrecidos
- **Guitarra Eléctrica**: Rock, blues, metal y jazz
- **Guitarra Acústica**: Técnica de dedos y repertorio variado
- **Técnica Moderna**: Ejercicios avanzados para velocidad y precisión
- **Teoría Musical**: Armonía, escalas, modos e improvisación
- **Producción Musical**: Grabación, mezcla y software musical

### 💻 Características Técnicas
- ✅ **Diseño Responsivo**: Optimizado para dispositivos móviles y escritorio
- ✅ **Navegación Suave**: Scroll suave entre secciones
- ✅ **Header Fijo**: Navegación siempre accesible con efectos de transparencia
- ✅ **Menú Móvil**: Navegación hamburguesa para dispositivos pequeños
- ✅ **Popup Promocional**: Oferta especial para nuevos estudiantes
- ✅ **Formulario de Contacto**: Captura de leads para información
- ✅ **Video Integrado**: Demostración de habilidades vía YouTube
- ✅ **Timeline Interactiva**: Experiencia profesional visualizada
- ✅ **Tema Oscuro**: Diseño moderno con acentos azules

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Flexbox para layouts
  - Transiciones y animaciones
  - Media queries para responsividad
- **JavaScript (Vanilla)**: 
  - Manipulación del DOM
  - Event listeners
  - Almacenamiento de sesión
  - Efectos de scroll
- **Google Fonts**: Tipografía Inter
- **YouTube API**: Integración de video

## 📁 Estructura del Proyecto

```
AngelR-Msicz/
├── assets/
│   └── img/
│       ├── logoAng.png          # Logo principal
│       ├── LogoG.png            # Logo para fondo
│       ├── LogoNom.png          # Logo con nombre
│       ├── FotoPerfil.jpeg      # Foto del profesor
│       ├── Electrica.jpg        # Imagen guitarra eléctrica
│       ├── Clasica.jpg          # Imagen guitarra acústica
│       ├── Moderna.jpg          # Imagen técnica moderna
│       ├── Teoria.jpg           # Imagen teoría musical
│       ├── Estudio.jpg          # Imagen producción musical
│       └── 2148465333.jpg       # Imagen adicional
├── index.html                   # Página principal
├── styles.css                   # Estilos principales
├── script.js                    # Funcionalidad JavaScript
└── README.md                    # Este archivo
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar fuentes y video de YouTube)

### Instalación Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Isradu/AngelR-Msicz.git
   cd AngelR-Msicz
   ```

2. **Abrir el sitio**:
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Usar un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (si tienes http-server instalado)
     npx http-server
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder al sitio**:
   - Si abriste el archivo directamente: se abrirá en tu navegador
   - Si usas servidor local: visita `http://localhost:8000`

## 🎨 Personalización

### Colores del Tema
Los colores están definidos como variables CSS en `:root`:

```css
:root {
    --color-primary: #1a1a1a;      /* Fondo principal */
    --color-secondary: #2c2c2c;     /* Fondo secundario */
    --color-accent: #4f4f4f;        /* Acentos */
    --color-text-main: #e0e0e0;     /* Texto principal */
    --color-text-muted: #a0a0a0;    /* Texto secundario */
    --color-highlight: #00aaff;     /* Color de marca */
}
```

### Contenido Editable
- **Textos**: Modifica directamente en `index.html`
- **Imágenes**: Reemplaza archivos en `assets/img/`
- **Video**: Cambia el `src` del iframe en la sección `#video-demo`
- **Formulario**: Actualiza la `action` del formulario en `#form`

### Popup Promocional
Para modificar o deshabilitar el popup, edita las variables en `script.js`:
```javascript
// Cambiar tiempo de aparición (en milisegundos)
setTimeout(showPopup, 1500);

// Para deshabilitar, comenta esta línea:
// window.addEventListener('load', () => {
//     setTimeout(showPopup, 1500);
// });
```

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos
- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🔧 Funcionalidades Principales

### 1. Navegación
- Header fijo con efecto de transparencia al hacer scroll
- Navegación suave entre secciones
- Menú hamburguesa en dispositivos móviles

### 2. Popup Promocional
- Aparece 1.5 segundos después de cargar la página
- Se puede cerrar haciendo clic en la X o fuera del contenido
- Se guarda en sessionStorage para no molestar en la misma sesión

### 3. Formulario de Contacto
- Validación HTML5 nativa
- Campos requeridos: email y asunto
- Envío a FreeCodeCamp (para demo)

### 4. Timeline de Experiencia
- Visualización cronológica de la trayectoria profesional
- Diseño responsive que se adapta a móviles

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Áreas de Mejora Sugeridas
- [ ] Añadir testimonios de estudiantes
- [ ] Implementar calendario de disponibilidad
- [ ] Añadir galería de fotos/videos
- [ ] Integrar sistema de pago
- [ ] Añadir blog musical
- [ ] Implementar modo claro/oscuro

## 📞 Contacto

**Rafael - Rafita Music Lab**
- 📧 Email: [Información disponible a través del formulario de contacto]
- 🎸 Especialidades: Guitarra Eléctrica, Acústica, Teoría Musical, Producción
- 🎓 Educación: Estudiante de Música Popular Contemporánea - Universidad Autónoma de Querétaro
- 🎵 Experiencia: +8 años como músico, +2 años como profesor

## 📄 Licencia

Este proyecto es un sitio web personal. El código está disponible para fines educativos y de referencia.

## 🏆 Reconocimientos

- **Diseño**: Inspirado en portfolios modernos de músicos
- **Fuentes**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Iconos**: Iconos unicode y símbolos CSS

---

**¿Interesado en clases de música?** ¡Visita el sitio web y contáctanos para más información!

## 📊 Estado del Proyecto

🟢 **Activo** - El proyecto está siendo mantenido y actualizado regularmente.

**Última actualización**: Enero 2025