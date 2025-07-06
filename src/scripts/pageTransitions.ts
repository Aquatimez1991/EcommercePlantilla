// Script para manejar transiciones de página suaves
export function initPageTransitions() {
  // Función para transición suave entre páginas
  function smoothPageTransition(url: string) {
    // Crear overlay de transición
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    // Agregar spinner
    const spinner = document.createElement('div');
    spinner.innerHTML = `
      <div style="text-align: center; color: white;">
        <div style="width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
        <p style="font-size: 18px; margin: 0;">Cargando...</p>
      </div>
    `;
    overlay.appendChild(spinner);

    // Agregar estilos para el spinner
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    // Mostrar overlay
    document.body.appendChild(overlay);
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);

    // Navegar después de la transición
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }

  // Interceptar clicks en enlaces internos
  document.addEventListener('click', function(e) {
    const target = e.target as HTMLElement;
    const link = target.closest('a') as HTMLAnchorElement;
    if (link && link.href && link.href.startsWith(window.location.origin) && !link.href.includes('#')) {
      e.preventDefault();
      smoothPageTransition(link.href);
    }
  });

  // Transición de entrada para la página actual
  function pageEnterTransition() {
    const pageContent = document.querySelector('.page-transition') as HTMLElement;
    if (pageContent) {
      pageContent.style.opacity = '0';
      pageContent.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        pageContent.style.transition = 'all 0.6s ease-out';
        pageContent.style.opacity = '1';
        pageContent.style.transform = 'translateY(0)';
      }, 100);
    }
  }

  // Ejecutar transición de entrada
  pageEnterTransition();

  // Efecto de hover para imágenes de productos
  const productImages = document.querySelectorAll('.product-card img, .page-transition img');
  productImages.forEach(img => {
    const image = img as HTMLImageElement;
    image.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.filter = 'brightness(1.1)';
    });

    image.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.filter = 'brightness(1)';
    });
  });

  // Efecto de hover para botones
  const buttons = document.querySelectorAll('.page-transition button');
  buttons.forEach(button => {
    const btn = button as HTMLButtonElement;
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });

    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });

  // Efecto de hover para cards de productos
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    const cardElement = card as HTMLElement;
    cardElement.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
    });

    cardElement.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '';
    });
  });
}

// Función global para transiciones programáticas
declare global {
  interface Window {
    smoothNavigate: (url: string) => void;
  }
}

window.smoothNavigate = function(url: string) {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const spinner = document.createElement('div');
  spinner.innerHTML = `
    <div style="text-align: center; color: white;">
      <div style="width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <p style="font-size: 18px; margin: 0;">Cargando...</p>
    </div>
  `;
  overlay.appendChild(spinner);

  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);

  setTimeout(() => {
    window.location.href = url;
  }, 300);
};

// Inicializar cuando el DOM esté listo
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initPageTransitions);
} 