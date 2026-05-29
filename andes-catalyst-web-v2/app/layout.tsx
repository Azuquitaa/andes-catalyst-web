// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import { textos } from '@/config/textos'
import { colores } from '@/lib/colores'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: textos.seo.titulo,
  description: textos.seo.descripcion,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} font-sans`} style={{ backgroundColor: colores.background.primary }}>
        {children}
      </body>
    </html>
  )
}