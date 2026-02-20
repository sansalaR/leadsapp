import { Footer } from "@/components/landing/Footer";
import { ShieldCheck, Lock, Server } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-1 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Security & Privacy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            At YourPlatformName, we prioritize the security and privacy of your data with enterprise-grade infrastructure and privacy-first practices.
          </p>
        </div>
      </section>

      {/* Security Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
            <p className="text-slate-600 text-sm">
              All your data is encrypted in transit and at rest with strict access controls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <Lock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy-First Infrastructure</h3>
            <p className="text-slate-600 text-sm">
              Our platform is designed to comply with global data privacy regulations and protect user confidentiality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <Server className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable & Audited Systems</h3>
            <p className="text-slate-600 text-sm">
              Our servers are monitored 24/7 and regularly audited to ensure uptime and security compliance.
            </p>
          </div>
        </div>

        {/* Detailed Security Section */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Encryption</h2>
            <p className="text-slate-600 leading-relaxed">
              All sensitive data is encrypted using industry-standard protocols (AES-256) during storage and TLS 1.2+ during transmission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Access Control & Authentication</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement role-based access controls (RBAC) to ensure that only authorized users can access specific resources. Multi-factor authentication (MFA) is supported to enhance security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Monitoring & Compliance</h2>
            <p className="text-slate-600 leading-relaxed">
              Our systems are continuously monitored for suspicious activity, and we comply with GDPR, CCPA, and other global privacy standards.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}