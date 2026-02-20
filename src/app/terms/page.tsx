import { Footer } from "@/components/landing/Footer";

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-1 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Please read these terms carefully before using YourPlatformName. By accessing our platform, you agree to comply with these terms.
          </p>
        </div>
      </section>

      {/* Key Sections */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        
        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, do not use our platform.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Users are responsible for maintaining the confidentiality of their account information and for all activities conducted under their account.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">3. Prohibited Activities</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Users may not engage in activities that interfere with or compromise the platform, including unauthorized access, spamming, or violating laws or third-party rights.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            All content, software, and materials provided by the platform are owned by YourPlatformName or its licensors. Users may not copy, distribute, or create derivative works without permission.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">5. Termination</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may suspend or terminate accounts that violate these terms or pose a risk to our platform, at our discretion.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Your use of the platform is at your own risk. We are not liable for any damages resulting from your use or inability to use the service.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may update these Terms of Service at any time. Users will be notified of significant changes, and continued use indicates acceptance of the updated terms.
          </p>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you have any questions regarding these terms, please contact us at support@yourplatformname.com.
          </p>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}