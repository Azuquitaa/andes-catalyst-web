// app/(main)/inversiones/page.tsx
'use client'

import { colores } from '@/lib/colores'
import AnimatedSection from '@/components/AnimatedSection'
import { useState } from 'react'

const proyectos = [
  {
    id: 1,
    nombre: 'INTERBOSQUE I',
    ubicacion: 'Bolivia',
    hectares: '120,000 ha',
    metodologia: 'VM0007 IFM',
    precio: 'USD 12.50',
    retorno: '18-22%',
    plazo: '5 años',
    status: 'Emisión activa',
    descripcion: 'Proyecto de conservación de bosques en la Amazonía boliviana, generando créditos de carbono verificados bajo Verra.',
    color: '#008b8b',
  },
  {
    id: 2,
    nombre: 'CritiCore™ Portfolio',
    ubicacion: 'Bolivia / Perú / Argentina',
    hectares: '15 minas',
    metodologia: 'Dead2Gold®',
    precio: 'USD 8.75',
    retorno: '25-30%',
    plazo: '4 años',
    status: 'Pre-venta',
    descripcion: 'Rehabilitación de pasivos ambientales mineros con generación de bonos temáticos.',
    color: '#f68b1d',
  },
  {
    id: 3,
    nombre: 'VECRAP-PC',
    ubicacion: 'Haití',
    hectares: '25,000 ha',
    metodologia: 'Acorn',
    precio: 'USD 6.25',
    retorno: '15-18%',
    plazo: '7 años',
    status: 'En validación Verra',
    descripcion: 'Proyecto de agroforestería y microfinanzas climáticas en Plateau Central.',
    color: '#110890',
  },
]

export default function InversionesPage() {
  const [filtro, setFiltro] = useState('todos')

  const filteredProjects = filtro === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.status === filtro)

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: colores.fondo.secundario }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oportunidades de <span className="text-gradient">Inversión</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colores.texto.secundario }}>
            Acceda a proyectos de alto impacto con retornos financieros atractivos
          </p>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#008b8b] to-[#f68b1d]" />
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b" style={{ borderColor: colores.bordes.sutil }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setFiltro('todos')}
              className={`px-4 py-2 rounded-full transition-all ${filtro === 'todos' ? 'text-white' : ''}`}
              style={{ 
                backgroundColor: filtro === 'todos' ? colores.catalyst.lazo : 'transparent',
                border: `1px solid ${filtro === 'todos' ? 'transparent' : colores.bordes.sutil}`,
                color: filtro === 'todos' ? '#fff' : colores.texto.secundario
              }}
            >
              Todos
            </button>
            <button 
              onClick={() => setFiltro('Emisión activa')}
              className={`px-4 py-2 rounded-full transition-all ${filtro === 'Emisión activa' ? 'text-white' : ''}`}
              style={{ 
                backgroundColor: filtro === 'Emisión activa' ? colores.catalyst.lazo : 'transparent',
                border: `1px solid ${filtro === 'Emisión activa' ? 'transparent' : colores.bordes.sutil}`,
                color: filtro === 'Emisión activa' ? '#fff' : colores.texto.secundario
              }}
            >
              Emisión activa
            </button>
            <button 
              onClick={() => setFiltro('Pre-venta')}
              className={`px-4 py-2 rounded-full transition-all ${filtro === 'Pre-venta' ? 'text-white' : ''}`}
              style={{ 
                backgroundColor: filtro === 'Pre-venta' ? colores.andes.nodo : 'transparent',
                border: `1px solid ${filtro === 'Pre-venta' ? 'transparent' : colores.bordes.sutil}`,
                color: filtro === 'Pre-venta' ? '#fff' : colores.texto.secundario
              }}
            >
              Pre-venta
            </button>
            <button 
              onClick={() => setFiltro('En validación Verra')}
              className={`px-4 py-2 rounded-full transition-all ${filtro === 'En validación Verra' ? 'text-white' : ''}`}
              style={{ 
                backgroundColor: filtro === 'En validación Verra' ? colores.andes.top : 'transparent',
                border: `1px solid ${filtro === 'En validación Verra' ? 'transparent' : colores.bordes.sutil}`,
                color: filtro === 'En validación Verra' ? '#fff' : colores.texto.secundario
              }}
            >
              En validación
            </button>
          </div>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proyecto, index) => (
              <AnimatedSection key={proyecto.id} delay={index * 0.1}>
                <div className="glass-card overflow-hidden transition-all duration-500 hover:scale-105">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${proyecto.color}20`,
                          color: proyecto.color,
                        }}
                      >
                        {proyecto.status}
                      </div>
                      <div className="text-2xl">🌳</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2" style={{ color: colores.texto.principal }}>
                      {proyecto.nombre}
                    </h3>
                    
                    <p className="text-sm mb-4" style={{ color: colores.texto.secundario }}>
                      {proyecto.descripcion}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: colores.texto.terciario }}>📍 Ubicación</span>
                        <span style={{ color: colores.texto.secundario }}>{proyecto.ubicacion}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: colores.texto.terciario }}>🌲 Superficie</span>
                        <span style={{ color: colores.texto.secundario }}>{proyecto.hectares}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: colores.texto.terciario }}>📊 Retorno</span>
                        <span className="text-gradient">{proyecto.retorno}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: colores.texto.terciario }}>💰 Precio</span>
                        <span style={{ color: colores.catalyst.lazo }}>{proyecto.precio}/tCO2e</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`/inversiones/${proyecto.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block text-center py-2 rounded-lg transition-all hover:scale-105"
                      style={{ 
                        background: `linear-gradient(90deg, ${proyecto.color}, ${proyecto.color}cc)`,
                        color: '#fff'
                      }}
                    >
                      Ver detalles →
                    </a>
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