// app/(main)/productos/page.tsx
'use client'

import { colores } from '@/lib/colores'
import AnimatedSection from '@/components/AnimatedSection'

const productos = [
  {
    categoria: 'Bonos Temáticos',
    items: [
      { nombre: 'Bonos Verdes Municipales', descripcion: 'Financiamiento para infraestructura sostenible en municipios LAC', impacto: 'Certificado CBI' },
      { nombre: 'Carbon Rental Bonds®', descripcion: 'Estructura innovadora de arrendamiento de créditos de carbono', impacto: 'Metodología propia' },
      { nombre: 'Bonos Rehabilitación Minera', descripcion: 'Restauración de pasivos ambientales mineros', impacto: 'Dead2Gold®' },
    ]
  },
  {
    categoria: 'Mercados de Carbono',
    items: [
      { nombre: 'Proyectos VCM', descripcion: 'VM0007 IFM, VM0042 AWM y metodologías propias', impacto: 'Verra/Gold Standard' },
      { nombre: 'Créditos de Carbono', descripcion: 'Generación y comercialización de créditos verificados', impacto: 'Trazabilidad blockchain' },
    ]
  },
  {
    categoria: 'Tokenización RWA',
    items: [
      { nombre: 'Activos Inmobiliarios', descripcion: 'Tokenización de propiedades comerciales y residenciales', impacto: 'Liquidez fraccionada' },
      { nombre: 'Portafolios Hipotecarios', descripcion: 'Securitización tokenizada de carteras hipotecarias', impacto: 'Acceso a mercados globales' },
      { nombre: 'Créditos Carbono', descripcion: 'Tokenización de créditos de carbono verificados', impacto: 'Comercio secundario' },
    ]
  },
  {
    categoria: 'Microfinanzas Climáticas',
    items: [
      { nombre: 'Acorn', descripcion: 'Microcréditos carbono para pequeños agricultores', impacto: 'África/LAC' },
      { nombre: 'Boomitra', descripcion: 'Créditos de carbono por carbono orgánico del suelo', impacto: 'Agricultura regenerativa' },
    ]
  },
  {
    categoria: 'Asesoría Estratégica',
    items: [
      { nombre: 'Estructuración Financiera', descripcion: 'Diseño de instrumentos financieros sostenibles', impacto: 'Bonos/Préstamos verdes' },
      { nombre: 'Due Diligence E&S', descripcion: 'Evaluación ambiental y social', impacto: 'Estándares IFC' },
      { nombre: 'Compliance Verra/GS', descripcion: 'Registro y verificación de proyectos', impacto: 'Certificación internacional' },
    ]
  },
]

export default function ProductosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: colores.fondo.secundario }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Productos</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colores.texto.secundario }}>
            Soluciones financieras innovadoras que conectan capital global con impacto local
          </p>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#008b8b] to-[#f68b1d]" />
        </div>
      </section>

      {/* Listado de productos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productos.map((categoria, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: colores.catalyst.lazo }}>
                    {categoria.categoria}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="glass-card p-6 transition-all hover:scale-105">
                        <div className="text-2xl mb-3">
                          {categoria.categoria === 'Bonos Temáticos' && '📊'}
                          {categoria.categoria === 'Mercados de Carbono' && '🌿'}
                          {categoria.categoria === 'Tokenización RWA' && '🔗'}
                          {categoria.categoria === 'Microfinanzas Climáticas' && '🌱'}
                          {categoria.categoria === 'Asesoría Estratégica' && '⚡'}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: colores.texto.principal }}>
                          {item.nombre}
                        </h3>
                        <p className="text-sm mb-3" style={{ color: colores.texto.secundario }}>
                          {item.descripcion}
                        </p>
                        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${colores.catalyst.lazo}20`, color: colores.catalyst.lazo }}>
                          {item.impacto}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}