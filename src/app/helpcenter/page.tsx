import { Footer } from "@/components/landing/Footer";

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Help Center
          </h1>
          <p className="text-lg text-slate-600">
            Find answers to your questions, learn how to use our platform, and get support quickly.
          </p>

          {/* Search Bar */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Getting Started", description: "Learn the basics to get up and running." },
            { title: "Account & Billing", description: "Manage your account and billing information." },
            { title: "Integrations", description: "Connect with your favorite tools and apps." },
            { title: "Data & Security", description: "Understand our privacy and security practices." },
            { title: "FAQ", description: "Find answers to common questions quickly." },
            { title: "Troubleshooting", description: "Step-by-step solutions to common issues." },
          ].map((category) => (
            <div
              key={category.title}
              className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{category.title}</h3>
              <p className="text-slate-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Frequently Asked Questions</h2>
          {[
            {
              question: "How do I reset my password?",
              answer: "Go to your account settings, click 'Change Password', and follow the instructions."
            },
            {
              question: "How can I update my billing information?",
              answer: "Navigate to the Billing section in your account dashboard and update your payment method."
            },
            {
              question: "How do I integrate with my CRM?",
              answer: "Check our Integrations guide for step-by-step instructions for popular CRMs."
            },
            {
              question: "What data security measures are in place?",
              answer: "We follow strict privacy-first policies with encrypted storage and secure authentication."
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="p-4 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
            >
              <summary className="cursor-pointer text-slate-800 font-medium">{faq.question}</summary>
              <p className="mt-2 text-slate-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

      </div>
        <Footer />
    </main>
  );
}