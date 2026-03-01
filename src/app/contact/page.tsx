import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--clr-bg)' }}>
            <Header />
            <main className="flex-grow">
                <div className="py-16 text-center border-b" style={{ backgroundColor: 'var(--clr-bg-alt)', borderColor: 'var(--clr-border)' }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, color: 'var(--clr-primary)' }}>
                        Contact Us
                    </h1>
                    <p style={{ color: 'var(--clr-text-muted)', marginTop: '0.75rem' }}>
                        Request a wholesale quote or get in touch with our export team
                    </p>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact info */}
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--clr-text)', marginBottom: '1.5rem' }}>
                                Our Office
                            </h2>
                            <ul className="space-y-5">
                                {[
                                    { icon: MapPin, label: '123 Spice Export Zone, Hai Phong, Vietnam' },
                                    { icon: Phone, label: '+84 123 456 789' },
                                    { icon: Mail, label: 'info@nagspice.com' },
                                    { icon: Clock, label: 'Mon – Fri: 8:00 AM – 6:00 PM (ICT)' },
                                ].map(({ icon: Icon, label }) => (
                                    <li key={label} className="flex items-start gap-3">
                                        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--clr-primary)' }} />
                                        <span style={{ color: 'var(--clr-text-muted)' }}>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enquiry form */}
                        <form className="rounded-xl p-8 shadow-sm border space-y-5"
                            style={{ backgroundColor: 'var(--clr-surface)', borderColor: 'var(--clr-border)' }}
                            onSubmit={e => e.preventDefault()}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--clr-text)' }}>
                                Send an Enquiry
                            </h2>
                            {[
                                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                                { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Foods Ltd.' },
                                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                            ].map(f => (
                                <div key={f.id}>
                                    <label htmlFor={f.id} className="block text-sm font-medium mb-1" style={{ color: 'var(--clr-text)' }}>{f.label}</label>
                                    <input id={f.id} type={f.type} placeholder={f.placeholder}
                                        className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none"
                                        style={{ borderColor: 'var(--clr-border)', backgroundColor: 'var(--clr-bg)', color: 'var(--clr-text)' }} />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--clr-text)' }}>Message</label>
                                <textarea id="message" rows={4} placeholder="Tell us about your requirements..."
                                    className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none resize-none"
                                    style={{ borderColor: 'var(--clr-border)', backgroundColor: 'var(--clr-bg)', color: 'var(--clr-text)' }} />
                            </div>
                            <Button variant="primary" size="lg" className="w-full">Send Enquiry</Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
