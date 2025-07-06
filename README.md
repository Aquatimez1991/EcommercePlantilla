# CarpiShop - Ecommerce con Astro + Tailwind

Este proyecto es una migración de un ecommerce simple de HTML/CSS/JavaScript vanilla a **Astro con Tailwind CSS**, manteniendo toda la funcionalidad original pero con las ventajas del framework moderno y un diseño mejorado.

## 🚀 Características

- **Migración completa a Astro**: Proyecto modernizado con componentes reutilizables
- **Diseño con Tailwind CSS**: Interfaz moderna y responsive con utilidades CSS
- **Funcionalidad completa del carrito**: Agregar, eliminar y vaciar productos
- **Filtrado por categorías**: Abrigos, Camisetas, Pantalones
- **Persistencia de datos**: Carrito guardado en localStorage
- **Diseño responsive**: Adaptado para móviles y desktop
- **Notificaciones**: Toast notifications al agregar productos
- **Animaciones suaves**: Transiciones y efectos hover mejorados

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navigation.astro # Navegación principal
│   └── ProductCard.astro # Tarjeta de producto
├── data/
│   └── productos.ts     # Datos de productos con TypeScript
├── layouts/
│   └── Layout.astro     # Layout principal
└── pages/
    ├── index.astro      # Página principal
    └── carrito.astro    # Página del carrito

tailwind.config.mjs      # Configuración de Tailwind CSS

public/
└── assets/              # Assets estáticos
    ├── images/          # Imágenes de productos
    │   ├── abrigos/
    │   ├── camisetas/
    │   └── pantalones/
    └── styles/          # Estilos adicionales (futuro)
```

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework principal
- **Tailwind CSS**: Framework de utilidades CSS
- **TypeScript**: Tipado de datos
- **Bootstrap Icons**: Iconografía
- **Toastify**: Notificaciones
- **SweetAlert2**: Alertas

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar producción**:
   ```bash
   npm run preview
   ```

## 🔄 Migración Realizada

### Cambios Principales:

1. **Estructura de archivos**: Reorganizada siguiendo las convenciones de Astro
2. **Componentes**: HTML convertido a componentes `.astro` reutilizables
3. **Datos**: JSON convertido a TypeScript con interfaces tipadas
4. **Rutas**: Sistema de rutas basado en archivos de Astro
5. **Scripts**: JavaScript integrado en los componentes con `<script>`
6. **Assets**: Imágenes movidas a `/public` para servir estáticamente
7. **CSS → Tailwind**: Migración completa de CSS personalizado a utilidades de Tailwind
8. **Diseño mejorado**: Interfaz más moderna con animaciones y transiciones

### Funcionalidades Mantenidas:

- ✅ Filtrado por categorías
- ✅ Agregar productos al carrito
- ✅ Eliminar productos del carrito
- ✅ Vaciar carrito completo
- ✅ Cálculo de totales
- ✅ Persistencia en localStorage
- ✅ Notificaciones toast
- ✅ Diseño responsive
- ✅ Menú móvil

## 🎨 Componentes

### Navigation.astro
Componente de navegación que se adapta según la página actual (productos o carrito).

### ProductCard.astro
Tarjeta de producto reutilizable con botón de agregar al carrito.

### Layout.astro
Layout principal que incluye los meta tags, CSS y scripts necesarios.

## 📱 Páginas

### `/` - Página Principal
- Lista todos los productos
- Filtrado por categorías
- Funcionalidad de agregar al carrito

### `/carrito` - Carrito de Compras
- Muestra productos en el carrito
- Permite eliminar productos
- Cálculo de totales
- Botón de compra

## 🔧 Configuración

El proyecto está configurado en `astro.config.mjs` con:
- Site URL configurada
- Título y descripción por defecto

## 📝 Notas de Desarrollo

- Los scripts están integrados en los componentes para mantener la funcionalidad original
- Se mantiene la compatibilidad con localStorage para el carrito
- Las imágenes se sirven desde `/public` para mejor rendimiento
- TypeScript proporciona tipado seguro para los datos de productos
- Tailwind CSS proporciona un sistema de diseño consistente y responsive
- Las animaciones y transiciones mejoran la experiencia de usuario

## 🚀 Próximas Mejoras

- [ ] Agregar más categorías de productos
- [ ] Implementar búsqueda de productos
- [ ] Agregar sistema de usuarios
- [ ] Integrar pasarela de pagos
- [ ] Optimizar imágenes con Astro Image
- [ ] Agregar tests unitarios 