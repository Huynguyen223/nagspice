import React from 'react';
import { Link } from '../ui/Link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react';

const COLS = [
  {
    title: 'Our Story',
    links: [
      { label: 'Company Profile', href: '/contact' },
      { label: 'Our Facility', href: '/contact' },
      { label: 'Commitment To Quality', href: '/contact' },
      { label: 'Contract Manufacturing', href: '/contact' },
      { label: 'Our Awards', href: '/contact' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Cinnamon / Cassia', href: '/category/cinnamon' },
      { label: 'Ginger', href: '/category/ginger' },
      { label: 'Pepper', href: '/category/pepper' },
      { label: 'Star Anise', href: '/category/star-anise' },
      { label: 'Turmeric', href: '/category/turmeric' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Market News', href: '/articles' },
      { label: 'Shipping & Delivery', href: '/contact' },
      { label: 'Request a Sample', href: '/contact' },
      { label: 'Consumer Enquiry', href: '/contact' },
    ],
  },
];

const SOCIAL = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'Youtube' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#110b05', color: 'var(--clr-dark-muted)', fontFamily: 'var(--font-body)' }}>

      {/* ── Top CTA strip ── */}
      <div className="border-b" style={{ borderColor: '#2a1e14' }}>
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.55rem',
              fontWeight: 700,
              color: 'var(--clr-dark-text)',   /* bright warm white */
              letterSpacing: '0.01em',
            }}>
              Ready to Source Premium Vietnamese Spices?
            </p>
            <p style={{ color: 'var(--clr-dark-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              Get a wholesale quote or request free samples today.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--clr-primary)', fontFamily: 'var(--font-body)' }}
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="container mx-auto px-4 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--clr-dark-text)',   /* bright */
                letterSpacing: '0.06em',
              }}>
                NAGROUP SPICE
              </span>
              <br />
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.28em',
                color: 'var(--clr-dark-faint)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
              }}>
                Excite your palate
              </span>
            </div>

            <p style={{
              fontSize: '0.87rem',
              color: 'var(--clr-dark-muted)',  /* golden tan — much more visible */
              lineHeight: 1.8,
              maxWidth: '320px',
              marginBottom: '1.5rem',
            }}>
              Direct-from-farm Vietnamese spices for global food manufacturers and distributors. Bulk cinnamon, pepper, turmeric, star anise and more — shipped from Hai Phong Port.
            </p>

            {/* Contact details */}
            <ul className="space-y-2 text-sm mb-6">
              {[
                { Icon: MapPin, text: '123 Spice Export Zone, Hai Phong, Vietnam' },
                { Icon: Phone, text: '+84 123 456 789' },
                { Icon: Mail, text: 'info@nagroupspice.com' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5" style={{ color: 'var(--clr-dark-muted)' }}>
                  <Icon className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#f59e0b' }} />
                  {text}
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:bg-amber-800"
                  style={{ border: '1px solid #3a2d20', color: 'var(--clr-dark-muted)' }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--clr-dark-text)',   /* bright heading */
                marginBottom: '1.1rem',
                letterSpacing: '0.01em',
              }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-amber-300"
                      style={{ color: 'var(--clr-dark-muted)' }}  /* golden tan */
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t" style={{ borderColor: '#2a1e14' }}>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: 'var(--clr-dark-faint)' }}>
          <p>&copy; {new Date().getFullYear()} NAGROUP Spice. All rights reserved.</p>
          <div className="flex gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-amber-300 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
