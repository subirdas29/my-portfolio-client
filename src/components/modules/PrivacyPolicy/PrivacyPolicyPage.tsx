import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use this website, we may collect the following information:
- **Contact form submissions:** Your name, email address, and message when you fill out the contact or hire me form.
- **Newsletter subscriptions:** Your email address when you subscribe to updates.
- **Analytics data:** Page views, session duration, and general usage statistics collected anonymously via Google Analytics. No personally identifiable information is collected through analytics.
- **Cookies:** We use a minimal cookie to track your consent preference.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `Information you submit is used solely to:
- Respond to your inquiry or project request.
- Send you updates or newsletters if you subscribed (you can unsubscribe anytime).
- Improve the website experience through anonymized analytics.

We do not sell, rent, or share your personal information with third parties.`,
  },
  {
    title: "3. Cookies",
    content: `This website uses a single cookie to store your cookie consent preference (accept/decline). No tracking cookies are set without your consent. Google Analytics is only loaded if you accept cookies. You can clear cookies at any time from your browser settings.`,
  },
  {
    title: "4. Third-Party Services",
    content: `This website uses the following third-party services:
- **Google Analytics:** For anonymized website traffic analysis.
- **Cloudinary:** For image hosting and optimization.
- **Render/Vercel:** For hosting the website and API.

Each service has its own privacy policy. We encourage you to review them.`,
  },
  {
    title: "5. Data Retention",
    content: `Contact form submissions and newsletter emails are retained for a reasonable period to manage communications. You can request deletion of your data at any time by emailing subirdas1045@gmail.com.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to:
- Access the personal data we hold about you.
- Request correction or deletion of your data.
- Withdraw consent at any time (e.g., unsubscribe from newsletter).
- Lodge a complaint with a data protection authority.

To exercise these rights, contact: **subirdas1045@gmail.com**`,
  },
  {
    title: "7. Security",
    content: `We take reasonable measures to protect your information, including HTTPS encryption, secure server configuration, and input validation. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `This privacy policy may be updated occasionally. The last updated date is shown below. Continued use of the website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-[#0a0219] min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-xs text-amber-500 hover:underline font-semibold mb-4 block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated: May 2026</p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            This Privacy Policy explains how <strong>Subir Das</strong> (<Link href="https://subirdas.com" className="text-amber-500 hover:underline">subirdas.com</Link>) collects, uses, and protects your information when you use this website.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-slate-100 dark:border-white/5 pb-8">
              <h2 className="text-lg font-black text-slate-900 dark:text-white mb-3">{section.title}</h2>
              <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {section.content.split("\n").map((line, i) =>
                  line.startsWith("- ") ? (
                    <p key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-amber-500 mb-1">
                      {line.slice(2).replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  ) : (
                    <p key={i} className="mb-2">{line.replace(/\*\*(.*?)\*\*/g, "$1")}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
          <h3 className="font-black text-slate-900 dark:text-white mb-2">Questions?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            If you have any questions about this Privacy Policy, please contact me at{" "}
            <a href="mailto:subirdas1045@gmail.com" className="text-amber-500 hover:underline font-semibold">
              subirdas1045@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
