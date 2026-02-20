import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-1 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Contact <span className="text-blue-600">LeadFlow</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have questions, need support, or want to partner with us? We’re here to help. Reach out and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-slate-600 leading-relaxed">
            Whether you have a question about LeadFlow, our services, or partnerships, our team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-slate-600">support@leadflow.com</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p className="text-slate-600">123 LeadFlow St, Suite 100, Tech City, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </Button>
          </form>
        </div>

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}