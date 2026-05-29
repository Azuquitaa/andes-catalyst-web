// app/(main)/recursos/page.tsx
'use client'

import { colores } from '@/lib/colores'
import AnimatedSection from '@/components/AnimatedSection'

const recursos = [
  {
    tipo: 'Whitepaper',
    titulo: 'Tokenización de Créditos de Carbono',
    descripcion: 'Marco regulatorio y técnico para la tokenización RWA en América Latina',
    fecha: 'Abril 2026',
    link: '#',
  },
  {
    tipo: 'Case Study',
    titulo: 'INTERBOSQUE I: Conservación en la Amazonía',
    descripcion: 'Resultados preliminares y proyecciones del proyecto VM0007',
    fecha: 'Marzo 2026',
    link: '#',
  },
  {
    tipo: 'Metodología',
    titulo: 'WETI Concept®',
    descripcion: 'Metodología propia para humedales y turberas',
    fecha: 'Febrero 2026',
    link: '#',
  },
  {
    tipo: 'Blog',
    titulo: 'Tendencias ReFi 2026 en América Latina',
    descripcion: 'Análisis del mercado de carbono y tokenización en la región',
    fecha: 'Enero 2026',
    link: '#',
  },
  {
    tipo: 'Guía',
    titulo: 'Cómo estructurar un bono verde municipal',
    descripcion: 'Guía paso a paso para gobiernos locales',
    fecha: 'Diciembre 2025',
    link: '#',
  },
  {
    tipo: 'Webinar',
    titulo: 'Finanzas regenerativas y mercados VCM',
    descripcion: 'Grabación del webinar con expertos del sector',
    fecha: 'Noviembre 2025',
    link: '#',
  },
]

export default function RecursosPage() {
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: colores.fondo.secundario }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Biblioteca de <span className="text-gradient">Recursos</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colores.texto.secundario }}>
            Whitepapers, guías, metodologías y análisis del mercado climático LAC
          </p>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#008b8b] to-[#f68b1d]" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-6 transition-all hover:scale-105">
                  <div className="flex justify-between items-start mb-3">
                    <span 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${colores.catalyst.lazo}20`, color: colores.catalyst.lazo }}
                    >
                      {recurso.tipo}
                    </span>
                    <span className="text-xs" style={{ color: colores.texto.terciario }}>{recurso.fecha}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colores.texto.principal }}>
                    {recurso.titulo}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: colores.texto.secundario }}>
                    {recurso.descripcion}
                  </p>
                  <a href={recurso.link} className="text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" style={{ color: colores.catalyst.lazo }}>
                    Descargar / Ver →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}