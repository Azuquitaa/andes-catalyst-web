
// app/(main)/page.tsx

'use client'

import { motion } from 'framer-motion'
import { colores } from '@/lib/colores'
import { textos } from '@/config/textos'
import AnimatedSection from '@/components/AnimatedSection'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">

      {/* =========================
          HERO SECTION
      ========================== */}
      {/* HERO SECTION */}
<section className="relative min-h-screen overflow-hidden flex items-center">

  {/* =========================
      BACKGROUND LAYERS
  ========================== */}

  {/* Base background */}
  <div className="absolute inset-0 bg-[#050816]" />

  {/* Gradient atmosphere */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,163,163,0.18),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(49,46,129,0.22),transparent_35%)]" />

  {/* Grid overlay */}
  <div className="absolute inset-0 grid-overlay opacity-30" />

  {/* Ambient glow */}
  <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />

  {/* =========================
      CONTENT
  ========================== */}

  <div className="container mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* =========================
          LEFT COLUMN
      ========================== */}

      <div>

        {/* Institutional badge */}
        <div className="mb-8">

          <div className="
            inline-flex
            items-center
            gap-3
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          ">

            <div className="w-2 h-2 rounded-full bg-[#00A3A3]" />

            <span className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/60
            ">
              Climate Finance Infrastructure
            </span>

          </div>

        </div>

        {/* Headline */}
        <h1 className="
          text-6xl
          md:text-7xl
          lg:text-8xl
          font-black
          tracking-tight
          leading-[0.92]
          max-w-4xl
          mb-8
        ">

          Financing the next generation of regenerative infrastructure.

        </h1>

        {/* Paragraph */}
        <p className="
          text-lg
          md:text-xl
          leading-relaxed
          text-white/70
          max-w-2xl
          mb-12
        ">

          Andes Catalyst Capital Group connects institutional capital
          with climate-focused real world assets across Latin America
          and the Caribbean.

        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mb-20">

          {/* Primary */}
          <a
            href="/inversiones"
            className="
              px-6
              py-4
              rounded-xl
              bg-gradient-to-r
              from-[#00A3A3]
              to-[#312E81]
              text-white
              font-medium
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            Explore Investments
          </a>

          {/* Secondary */}
          <a
            href="/quienes-somos"
            className="
              px-6
              py-4
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-white/80
              hover:bg-white/[0.06]
              transition-all
            "
          >
            About the Group
          </a>

        </div>

        {/* Metrics */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-10
          pt-10
          border-t
          border-white/10
        ">

          <div>

            <div className="text-4xl font-bold mb-2">
              120K+
            </div>

            <div className="text-sm text-white/50 leading-relaxed">
              Hectares under management
            </div>

          </div>

          <div>

            <div className="text-4xl font-bold mb-2">
              USD 15M+
            </div>

            <div className="text-sm text-white/50 leading-relaxed">
              Capital mobilized
            </div>

          </div>

          <div>

            <div className="text-4xl font-bold mb-2">
              500K+
            </div>

            <div className="text-sm text-white/50 leading-relaxed">
              tCO₂e avoided
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          RIGHT COLUMN
      ========================== */}

      <div className="relative hidden lg:block">

        {/* Main panel */}
        <div className="
          relative
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8
          overflow-hidden
        ">

          <div className="
            aspect-[4/5]
            rounded-[24px]
            bg-[#0B1020]
            border
            border-white/5
            relative
            overflow-hidden
          ">

            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                border
                border-cyan-400/20
              " />

              <div className="
                absolute
                w-[300px]
                h-[300px]
                rounded-full
                border
                border-indigo-500/30
              " />

              <div className="
                absolute
                w-[180px]
                h-[180px]
                rounded-full
                border
                border-white/10
              " />

              {/* Core */}
              <div className="
                w-5
                h-5
                rounded-full
                bg-cyan-400
                shadow-[0_0_40px_rgba(34,211,238,0.8)]
              " />

            </div>

            {/* Floating card */}
            <div className="
              absolute
              top-8
              left-8
              px-5
              py-4
              rounded-2xl
              border
              border-white/10
              bg-black/30
              backdrop-blur-xl
            ">

              <div className="
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-white/40
                mb-2
              ">
                Carbon Assets
              </div>

              <div className="text-2xl font-semibold">
                500K+ tCO₂e
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          INVESTMENT OPPORTUNITIES
      ========================== */}

      <section className="py-32 relative">

        <div className="container mx-auto px-6">

          <AnimatedSection>

            <div className="max-w-3xl mb-20">

              <div className="caption text-white/40 mb-6">
                ACTIVE OPPORTUNITIES
              </div>

              <h2 className="display-lg mb-8">
                Institutional climate investment vehicles.
              </h2>

              <p
                className="body-lg"
                style={{ color: colores.text.secondary }}
              >
                Structured financial products designed to connect global capital
                with regenerative projects across Latin America and the Caribbean.
              </p>

            </div>

          </AnimatedSection>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8">

            {textos.productosDestacados.map((producto, index) => (

              <AnimatedSection
                key={index}
                delay={index * 0.1}
              >

                <div
                  className="
                    glass-panel
                    p-8
                    h-full
                    transition-colors
                    hover:bg-white/[0.05]
                  "
                >

                  {/* Status */}
                  <div
                    className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      mb-8
                    "
                    style={{
                      backgroundColor: `${producto.color}15`,
                      color: producto.color,
                    }}
                  >
                    {producto.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold mb-6">
                    {producto.titulo}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed mb-10"
                    style={{ color: colores.text.secondary }}
                  >
                    {producto.descripcion}
                  </p>

                  {/* Link */}
                  <a
                    href={producto.link}
                    className="text-sm uppercase tracking-[0.15em]"
                    style={{ color: producto.color }}
                  >
                    View Opportunity →
                  </a>

                </div>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
          ABOUT SECTION
      ========================== */}

      <section
        className="py-32 border-y border-white/5"
        style={{
          background: 'rgba(255,255,255,0.02)',
        }}
      >

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <AnimatedSection>

              <div>

                <div className="caption text-white/40 mb-6">
                  ABOUT THE GROUP
                </div>

                <h2 className="display-lg mb-8">
                  A strategic bridge between Latin America and the Caribbean.
                </h2>

              </div>

            </AnimatedSection>

            <AnimatedSection delay={0.2}>

              <div
                className="text-lg leading-relaxed"
                style={{ color: colores.text.secondary }}
              >
                {textos.quienesSomos.descripcion}
              </div>

            </AnimatedSection>

          </div>

        </div>

      </section>

    </div>
  )
}

