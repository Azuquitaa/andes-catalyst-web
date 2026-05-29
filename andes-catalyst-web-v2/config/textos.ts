// config/textos.ts
// ============================================
// ¡TODOS LOS TEXTOS DE LA WEB ESTÁN AQUÍ!
// Cambia esto para cada cliente
// ============================================

export const textos = {
  // Meta información (SEO)
  seo: {
    titulo: 'Andes-Catalyst Capital Group | Tokenización RWA & ReFi',
    descripcion: 'Puente estratégico entre Sudamérica y el Caribe para transformar el panorama financiero mediante tokenización de activos reales y finanzas regenerativas.',
  },

  // Header / Navegación
  nav: {
    home: 'Inicio',
    quienesSomos: 'Quiénes Somos',
    productos: 'Productos',
    inversiones: 'Inversiones',
    recursos: 'Recursos',
    contacto: 'Contacto',
  },

  // Hero Section (Portada)
  hero: {
    titulo: 'Andes Catalyst Capital Group',
    subtitulo: 'Puente estratégico entre Sudamérica y el Caribe',
    descripcion: 'Transformamos el panorama financiero mediante la tokenización de activos reales (RWA) y las finanzas regenerativas (ReFi). Desde la imponente orografía andino-amazónica de Bolivia hasta el horizonte turquesa de la República Dominicana.',
    cta: 'Explorar Oportunidades',
    ctaSecundario: 'Ver Productos',
  },

  // Cifras clave (KPIs)
  cifras: [
    { valor: '120,000+', label: 'Hectáreas bajo gestión', icono: '🌲' },
    { valor: '500,000+', label: 'tCO2e evitadas', icono: '🌍' },
    { valor: 'USD 15M+', label: 'Capital movilizado', icono: '💰' },
    { valor: '3', label: 'Países activos', icono: '📍' },
  ],

  // Productos Destacados
  productosDestacados: [
    {
      titulo: 'INTERBOSQUE I',
      descripcion: 'Proyecto VM0007 IFM, 120,000 ha en Bolivia. Conservación de bosques y generación de créditos de carbono.',
      link: '/inversiones/interbosque-i',
      tag: 'Activo',
      color: '#008b8b',
    },
    {
      titulo: 'CritiCore™ Portfolio',
      descripcion: '15 minas abandonadas en Bolivia, Perú y Argentina. Rehabilitación ambiental y bonos temáticos.',
      link: '/inversiones/criticore',
      tag: 'Pre-venta',
      color: '#f68b1d',
    },
    {
      titulo: 'VECRAP-PC',
      descripcion: 'Agroforestería + Acorn, Haití. Microfinanzas climáticas integradas con créditos de carbono.',
      link: '/inversiones/vecrap',
      tag: 'En validación',
      color: '#110890',
    },
  ],

  // Quiénes Somos
  quienesSomos: {
    titulo: 'Quiénes Somos',
    descripcion: 'Andes Catalyst Capital Group surge como un puente estratégico que une el corazón de América del Sur con el dinamismo del Caribe. Una red diseñada para transformar el panorama financiero mediante la tokenización de activos reales (RWA) y las finanzas regenerativas (ReFi).',
    mision: 'Movilizar capital hacia proyectos de impacto ambiental y social mediante instrumentos financieros innovadores, conectando inversores globales con oportunidades sostenibles en Latinoamérica y el Caribe.',
    vision: 'Ser el ecosistema financiero referente en tokenización RWA y finanzas regenerativas para América Latina, acelerando la transición hacia una economía baja en carbono.',
    valores: ['Innovación', 'Sostenibilidad', 'Transparencia', 'Impacto', 'Excelencia'],
  },

  // Footer
  footer: {
    andesCapital: {
      nombre: 'AndesCapital EcoFintech',
      ubicacion: 'La Paz, Bolivia',
    },
    catalystCapital: {
      nombre: 'Catalyst Capital',
      ubicacion: 'Santo Domingo, República Dominicana',
    },
    legal: {
      privacidad: 'Política de Privacidad',
      terminos: 'Términos de Uso',
    },
    derechos: '© 2026 Andes-Catalyst Capital Group. Todos los derechos reservados.',
  },

  // Contacto
  contacto: {
    titulo: 'Contacto',
    descripcion: '¿Interesado en nuestras soluciones? Complete el formulario y nuestro equipo le responderá a la brevedad.',
    formulario: {
      nombre: 'Nombre completo',
      email: 'Correo electrónico',
      empresa: 'Empresa',
      tipoConsulta: 'Tipo de consulta',
      mensaje: 'Mensaje',
      enviar: 'Enviar mensaje',
    },
    opcionesConsulta: [
      'Soy inversor',
      'Tengo un proyecto',
      'Consulta general',
      'Prensa',
    ],
  },
}

// Tipado para TypeScript (autocompletado)
export type Textos = typeof textos