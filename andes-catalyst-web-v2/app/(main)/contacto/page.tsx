// app/(main)/contacto/page.tsx
'use client'

import { colores } from '@/lib/colores'
import { useState } from 'react'

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <div>
      <section className="py-20" style={{ backgroundColor: colores.fondo.secundario }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto <span className="text-gradient">Estratégico</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colores.texto.secundario }}>
            ¿Interesado en nuestras soluciones? Completa el formulario y nuestro equipo te responderá
          </p>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#008b8b] to-[#f68b1d]" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: colores.texto.principal }}>
                Oficinas
              </h2>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="text-2xl mb-2">🏔️</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colores.catalyst.lazo }}>AndesCapital EcoFintech</h3>
                  <p style={{ color: colores.texto.secundario }}>La Paz, Bolivia</p>
                  <p style={{ color: colores.texto.terciario }}>contacto@andes-capital.com</p>
                </div>
                <div className="glass-card p-6">
                  <div className="text-2xl mb-2">🌊</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colores.andes.nodo }}>Catalyst Capital</h3>
                  <p style={{ color: colores.texto.secundario }}>Santo Domingo, República Dominicana</p>
                  <p style={{ color: colores.texto.terciario }}>info@catalyst-capital.com</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colores.texto.principal }}>
                Envíanos un mensaje
              </h2>
              
              {enviado ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <p style={{ color: colores.catalyst.lazo }}>¡Mensaje enviado! Te contactaremos pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: colores.texto.secundario }}>Nombre completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 rounded-lg bg-black/30 border transition-all focus:outline-none"
                      style={{ borderColor: colores.bordes.sutil, color: colores.texto.principal }}
                      onFocus={(e) => e.target.style.borderColor = colores.catalyst.lazo}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: colores.texto.secundario }}>Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 rounded-lg bg-black/30 border transition-all focus:outline-none"
                      style={{ borderColor: colores.bordes.sutil, color: colores.texto.principal }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: colores.texto.secundario }}>Empresa</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-black/30 border transition-all focus:outline-none"
                      style={{ borderColor: colores.bordes.sutil, color: colores.texto.principal }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: colores.texto.secundario }}>Tipo de consulta</label>
                    <select 
                      className="w-full px-4 py-2 rounded-lg bg-black/30 border transition-all focus:outline-none"
                      style={{ borderColor: colores.bordes.sutil, color: colores.texto.principal }}
                    >
                      <option>Soy inversor</option>
                      <option>Tengo un proyecto</option>
                      <option>Consulta general</option>
                      <option>Prensa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: colores.texto.secundario }}>Mensaje</label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-black/30 border transition-all focus:outline-none"
                      style={{ borderColor: colores.bordes.sutil, color: colores.texto.principal }}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 btn-primary"
                  >
                    Enviar mensaje →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}