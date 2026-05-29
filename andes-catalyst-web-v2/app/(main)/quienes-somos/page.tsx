// app/(main)/quienes-somos/page.tsx
'use client'

import { colores } from '@/lib/colores'
import { textos } from '@/config/textos'

export default function QuienesSomosPage() {
  return (
    <div>
      {/* Hero interior */}
      <section className="py-20" style={{ backgroundColor: colores.fondo.secundario }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colores.texto.principal }}>
            {textos.quienesSomos.titulo}
          </h1>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: colores.gradientes.accent }} />
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div 
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{ 
                backgroundColor: colores.fondo.tarjeta,
                border: `1px solid ${colores.borde.sutil}`
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: colores.catalyst.lazo }}>Nuestra Historia</h2>
              <p className="leading-relaxed" style={{ color: colores.texto.secundario }}>
                {textos.quienesSomos.descripcion}
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{ 
                backgroundColor: colores.fondo.tarjeta,
                border: `1px solid ${colores.borde.sutil}`
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: colores.catalyst.lazo }}>Misión</h2>
              <p className="leading-relaxed" style={{ color: colores.texto.secundario }}>
                {textos.quienesSomos.mision}
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{ 
                backgroundColor: colores.fondo.tarjeta,
                border: `1px solid ${colores.borde.sutil}`
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: colores.catalyst.lazo }}>Visión</h2>
              <p className="leading-relaxed" style={{ color: colores.texto.secundario }}>
                {textos.quienesSomos.vision}
              </p>
            </div>

            <div 
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{ 
                backgroundColor: colores.fondo.tarjeta,
                border: `1px solid ${colores.borde.sutil}`
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: colores.catalyst.lazo }}>Nuestros Valores</h2>
              <div className="flex flex-wrap gap-3">
                {textos.quienesSomos.valores.map((valor, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${colores.catalyst.lazo}20`,
                      color: colores.catalyst.lazo,
                      border: `1px solid ${colores.catalyst.lazo}40`
                    }}
                  >
                    {valor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}