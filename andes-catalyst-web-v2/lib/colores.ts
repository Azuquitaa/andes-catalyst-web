// lib/colores.ts

export const colores = {
  background: {
    primary: '#050816',
    secondary: '#0B1020',
    tertiary: '#121A2B',
    elevated: 'rgba(255,255,255,0.03)',
  },

  text: {
    primary: '#F5F7FA',
    secondary: 'rgba(245,247,250,0.72)',
    tertiary: 'rgba(245,247,250,0.48)',
    muted: 'rgba(245,247,250,0.28)',
  },

  border: {
    subtle: 'rgba(255,255,255,0.06)',
    strong: 'rgba(255,255,255,0.12)',
  },

  accent: {
    teal: '#00A3A3',
    amber: '#F59E0B',
    indigo: '#312E81',
  },

  gradients: {
    hero:
      'radial-gradient(circle at top left, rgba(0,163,163,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(49,46,129,0.22), transparent 40%)',

    card:
      'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',

    accent:
      'linear-gradient(135deg, #00A3A3 0%, #312E81 100%)',
  },
}