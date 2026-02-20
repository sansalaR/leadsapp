import { Footer } from "@/components/landing/Footer";

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Getting Started
              </h2>

              <nav className="space-y-3 text-sm">
                <a href="#introduction" className="block text-slate-600 hover:text-blue-600 transition">
                  Introduction
                </a>
                <a href="#authentication" className="block text-slate-600 hover:text-blue-600 transition">
                  Authentication
                </a>
                <a href="#searching" className="block text-slate-600 hover:text-blue-600 transition">
                  Searching Contacts
                </a>
                <a href="#exporting" className="block text-slate-600 hover:text-blue-600 transition">
                  Exporting Data
                </a>
                <a href="#compliance" className="block text-slate-600 hover:text-blue-600 transition">
                  Privacy & Compliance
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-3 space-y-16">
            
            {/* Page Header */}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight mb-4">
                Documentation
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Everything you need to integrate, use, and scale with 
                YourPlatformName. Designed to get you productive in minutes.
              </p>
            </div>

            {/* Introduction */}
            <div id="introduction" className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                YourPlatformName is a B2B intelligence platform that provides
                verified contact data, company insights, and advanced filtering
                capabilities to accelerate outbound growth.
              </p>
            </div>

            {/* Authentication */}
            <div id="authentication" className="space-y-4">
              <h2 className="text-2xl font-semibold">Authentication</h2>
              <p className="text-slate-600 leading-relaxed">
                All API requests require an API key. You can generate your
                API key inside your dashboard settings.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 text-sm overflow-x-auto">
                <code>
{`curl https://api.yourplatform.com/v1/search \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                </code>
              </div>
            </div>

            {/* Searching */}
            <div id="searching" className="space-y-4">
              <h2 className="text-2xl font-semibold">Searching Contacts</h2>
              <p className="text-slate-600 leading-relaxed">
                Use advanced filters such as industry, job title, company size,
                and location to find your ideal prospects.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-sm text-slate-600">
                  Example filters:
                </p>
                <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                  <li>Industry: SaaS</li>
                  <li>Job Title: Head of Marketing</li>
                  <li>Company Size: 50–200 employees</li>
                  <li>Location: United States</li>
                </ul>
              </div>
            </div>

            {/* Exporting */}
            <div id="exporting" className="space-y-4">
              <h2 className="text-2xl font-semibold">Exporting Data</h2>
              <p className="text-slate-600 leading-relaxed">
                Export verified contacts directly to CSV or sync them with
                your CRM in one click.
              </p>
            </div>

            {/* Compliance */}
            <div id="compliance" className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Privacy & Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We maintain strict data compliance standards and operate with
                privacy-first infrastructure to ensure secure data handling.
              </p>
            </div>

          </section>
        </div>
      </div>
        <Footer />
    </main>
  );
}