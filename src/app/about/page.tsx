import { Footer } from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            About <span className="text-blue-600">LeadFlow</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            YourPlatformName is a modern B2B intelligence platform built to help
            sales, marketing, and recruiting teams find and connect with the
            right decision-makers — faster and smarter.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What We Do</h2>
            <p className="text-slate-600 leading-relaxed">
              We combine verified contact data, deep company insights, and
              powerful filtering tools to make outbound growth simple,
              scalable, and efficient.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Whether you're building pipeline, recruiting top talent, or
              expanding into new markets, our platform gives you the clarity
              and confidence to move faster.
            </p>
          </div>

          {/* Right Side - Principles */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-semibold mb-6">Our Principles</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="font-medium">Accurate & Actionable Data</p>
                <p className="text-sm text-slate-600 mt-1">
                  Reliable information that drives real results.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="font-medium">Privacy-First Infrastructure</p>
                <p className="text-sm text-slate-600 mt-1">
                  Built with compliance and security at its core.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="font-medium">Simple, Scalable Prospecting</p>
                <p className="text-sm text-slate-600 mt-1">
                  Powerful tools without unnecessary complexity.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="font-medium">Enterprise-Grade Reliability</p>
                <p className="text-sm text-slate-600 mt-1">
                  Performance and stability you can depend on.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}