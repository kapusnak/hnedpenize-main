"use client"

import { useState } from "react"
import { Info, Menu, Phone, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <img
              src="/logo-house-lock.png"
              alt="Spolehlivé financování"
              className="w-12 h-12 sm:w-[3.3rem] sm:h-[3.3rem] rounded-xl object-contain shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-card">Spolehlivé financování</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-card"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/jak-to-funguje" className="flex items-center gap-2 text-card/80 hover:text-card transition-colors font-medium">
              <Info className="w-5 h-5 shrink-0" />
              Jak to funguje
            </Link>
            <Link href="/kontakty" className="flex items-center gap-2 text-card/80 hover:text-card transition-colors font-medium">
              <Phone className="w-5 h-5 shrink-0" />
              Kontakty
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-white/20 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/jak-to-funguje"
              className="flex items-center gap-2 text-white hover:bg-white/10 transition-colors font-medium py-3 px-2 rounded-lg"
            >
              <Info className="w-5 h-5 shrink-0" />
              Jak to funguje
            </Link>
            <Link
              href="/kontakty"
              className="flex items-center gap-2 text-white hover:bg-white/10 transition-colors font-medium py-3 px-2 rounded-lg"
            >
              <Phone className="w-5 h-5 shrink-0" />
              Kontakty
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
