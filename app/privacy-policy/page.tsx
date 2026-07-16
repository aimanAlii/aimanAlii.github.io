import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { personalInfo } from "@/data/profile";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How this website handles the information you share through the contact form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="prompt-label font-mono text-xs uppercase tracking-widest text-muted">legal</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>

      <div className="prose-invert mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">1. Overview</h2>
          <p className="mt-2">
            This website is a personal portfolio belonging to {personalInfo.name}. This policy explains
            what information is collected when you visit or use the contact form, and how it's handled.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">2. Information collected</h2>
          <p className="mt-2">
            The contact form collects the name, email address, subject, and message you choose to submit.
            No account creation or payment information is required anywhere on this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">3. How information is used</h2>
          <p className="mt-2">
            Contact form submissions are used solely to respond to your inquiry. Information is never sold
            or shared with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">4. Analytics</h2>
          <p className="mt-2">
            If enabled, this site may use privacy-respecting analytics (e.g. Google Analytics or Vercel
            Analytics) to understand aggregate traffic patterns. No personally identifiable data is sold.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">5. Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${personalInfo.email}`} className="text-accent underline underline-offset-2">
              {personalInfo.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
