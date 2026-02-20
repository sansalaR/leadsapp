import { Footer } from "@/components/landing/Footer";
import { Eye, Shield, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-1 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Your privacy is our top priority. At YourPlatformName, we ensure transparency, security, and control over your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <p className="text-slate-600 text-sm">
              All personal data is securely stored, encrypted, and handled according to industry best practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <Eye className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-slate-600 text-sm">
              We are transparent about what data we collect and how it’s used, ensuring you remain in control.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <FileText className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance</h3>
            <p className="text-slate-600 text-sm">
              Our practices comply with GDPR, CCPA, and other global privacy regulations.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We collect only the necessary information to provide and improve our services. This may include account details, usage data, and preferences.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed">
              Your data is used to deliver the services you signed up for, improve features, communicate updates, and maintain security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Rights & Control</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to access, modify, or delete your data at any time. Our platform allows you to control your personal information easily.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We may share limited data with trusted third-party service providers to operate and improve our platform, always under strict privacy agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain personal data only as long as necessary for our services or as required by law, after which it is securely deleted.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}