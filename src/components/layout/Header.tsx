import React from 'react';
import { Search, Menu, Mail, Phone } from 'lucide-react';
import { Link } from '../ui/Link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm"
      style={{ borderColor: 'var(--clr-border)' }}>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-6 py-1.5 text-xs border-b"
        style={{ borderColor: 'var(--clr-border)', backgroundColor: 'var(--clr-bg)', color: 'var(--clr-text-muted)' }}>
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" /> +84 123 456 789
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="h-3 w-3" /> info@nagspice.com
        </span>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2" style={{ color: 'var(--clr-text-muted)' }}>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex flex-col leading-none">
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.7rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--clr-primary)',
            }}>
              NAGROUP SPICE
            </span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--clr-text-muted)', textTransform: 'uppercase' }}>
              Excite your palate
            </span>
          </Link>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', href: '/' },
            { label: 'Export Products', href: '/products' },
            { label: 'News', href: '/articles' },
            { label: 'Contact Us', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide transition-colors relative group"
              style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-body)' }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--clr-primary)' }} />
            </Link>
          ))}
        </nav>

        {/* Right: search */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full transition-colors hover:bg-amber-50" style={{ color: 'var(--clr-text-muted)' }}>
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--clr-primary)', fontFamily: 'var(--font-body)' }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
