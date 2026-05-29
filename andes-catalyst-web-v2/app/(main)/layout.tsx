// app/(main)/layout.tsx

'use client'

import { colores } from '@/lib/colores'
import { textos } from '@/config/textos'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    {
      label: textos.nav.home,
      href: '/',
    },
    {
      label: textos.nav.quienesSomos,
      href: '/quienes-somos',
    },
    {
      label: textos.nav.productos,
      href: '/productos',
    },
    {
      label: textos.nav.inversiones,
      href: '/inversiones',
    },
    {
      label: textos.nav.recursos,
      href: '/recursos',
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: colores.background.primary,
      }}
    >

      {/* =========================
          HEADER
      ========================== */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-white/5
          backdrop-blur-xl
        "
        style={{
          background: 'rgba(5,8,22,0.72)',
        }}
      >

        <div className="container mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
          >

            <div className="text-lg font-semibold tracking-tight">

              <span style={{ color: colores.text.primary }}>
                Andes
              </span>

              <span style={{ color: colores.accent.teal }}>
                Catalyst
              </span>

            </div>

          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                  hover:text-white
                  transition-colors
                "
              >
                {link.label}
              </a>

            ))}

          </nav>

          {/* CTA */}
          <a
            href="/contacto"
            className="btn-secondary"
          >
            Contact
          </a>

        </div>

      </header>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <main className="flex-grow">
        {children}
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-white/5 py-24">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-16">

            {/* Brand */}
            <div>

              <div className="text-xl font-semibold mb-6">
                Andes Catalyst
              </div>

              <p
                className="leading-relaxed"
                style={{ color: colores.text.secondary }}
              >
                Institutional climate finance and tokenized real world assets
                across Latin America and the Caribbean.
              </p>

            </div>

            {/* Offices */}
            <div>

              <div className="caption text-white/40 mb-6">
                Offices
              </div>

              <div className="space-y-4">

                <div>

                  <div className="font-medium mb-1">
                    Bolivia
                  </div>

                  <div
                    className="text-sm"
                    style={{ color: colores.text.tertiary }}
                  >
                    La Paz
                  </div>

                </div>

                <div>

                  <div className="font-medium mb-1">
                    Dominican Republic
                  </div>

                  <div
                    className="text-sm"
                    style={{ color: colores.text.tertiary }}
                  >
                    Santo Domingo
                  </div>

                </div>

              </div>

            </div>

            {/* Navigation */}
            <div>

              <div className="caption text-white/40 mb-6">
                Navigation
              </div>

              <div className="flex flex-col gap-4">

                {links.map((link) => (

                  <a
                    key={link.href}
                    href={link.href}
                    className="
                      text-sm
                      text-white/60
                      hover:text-white
                      transition-colors
                    "
                  >
                    {link.label}
                  </a>

                ))}

              </div>

            </div>

            {/* Legal */}
            <div>

              <div className="caption text-white/40 mb-6">
                Legal
              </div>

              <div className="flex flex-col gap-4">

                <a
                  href="/privacidad"
                  className="
                    text-sm
                    text-white/60
                    hover:text-white
                    transition-colors
                  "
                >
                  Política de Privacidad
                </a>

                <a
                  href="/terminos"
                  className="
                    text-sm
                    text-white/60
                    hover:text-white
                    transition-colors
                  "
                >
                  Términos de Uso
                </a>

              </div>

            </div>

          </div>

          {/* Bottom */}
          <div
            className="
              mt-20
              pt-8
              border-t
              border-white/5
              flex
              flex-col
              md:flex-row
              justify-between
              gap-4
            "
          >

            <div
              className="text-sm"
              style={{ color: colores.text.tertiary }}
            >
              © 2026 Andes Catalyst Capital Group
            </div>

            <div
              className="text-sm"
              style={{ color: colores.text.muted }}
            >
              Climate Finance · ReFi · Tokenized Infrastructure
            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}
