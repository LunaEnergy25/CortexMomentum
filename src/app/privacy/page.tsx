import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import {
  LEGAL_ENTITY,
  POSTAL_ADDRESS,
  CONTACT_EMAIL,
  PRIVACY_LAST_UPDATED,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Notice | Cortex Momentum",
  description:
    "How Cortex Momentum handles professional contact information, correspondence and newsletter data.",
};

const h2 = "text-2xl font-serif font-semibold text-white tracking-tight mt-12 mb-4";
const p = "text-slate-300 leading-relaxed mb-4";
const ul = "list-disc pl-6 space-y-3 text-slate-300 leading-relaxed mb-4";
const nested = "list-disc pl-6 mt-3 space-y-2";

export default function PrivacyPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight leading-tight mb-4">
          Privacy Notice
        </h1>
        <p className="text-slate-400 text-sm mb-8">Last updated: {PRIVACY_LAST_UPDATED}</p>

        <h2 className={h2}>Who we are</h2>
        <p className={p}>
          {LEGAL_ENTITY} is an energy and cleantech market-intelligence advisory run by Jamie Skaar. For this notice, {LEGAL_ENTITY} is the data controller.
        </p>
        <p className={p}>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{CONTACT_EMAIL}</a>{POSTAL_ADDRESS ? <> &middot; {POSTAL_ADDRESS}</> : null}
        </p>

        <h2 className={h2}>What we collect</h2>
        <ul className={ul}>
          <li><strong className="text-white">Professional contact information:</strong> your name, job title, company, business location and business email address.</li>
          <li><strong className="text-white">Correspondence:</strong> messages you exchange with us by email or on LinkedIn.</li>
          <li><strong className="text-white">Interactions with our public content:</strong> for example, engagement with posts we publish on LinkedIn.</li>
          <li><strong className="text-white">Newsletter data:</strong> if you subscribe to The Interconnect, your subscription details are handled through our newsletter platform (Beehiiv). Beehiiv&apos;s privacy policy applies as well as this one.</li>
          <li><strong className="text-white">Link activity:</strong> some links we send are personal to you, such as a private edition of a brief. When you open one, we record that it was opened and when, so we know the document reached you. Some email software opens links automatically, so this record does not prove you read it.</li>
        </ul>

                <h2 className={h2}>Website analytics</h2>
        <p className={p}>
          This site uses PostHog to understand how visitors use it: pages viewed, referrer, device and approximate location. It may record clicks and other on-page interactions. It is configured not to store cookies or other identifiers in your browser, and session recording is off. We don&apos;t use it to identify you.
        </p>

        <h2 className={h2}>Where it comes from</h2>
        <ul className={ul}>
          <li><strong className="text-white">From you:</strong> when you write to us, book a call or subscribe.</li>
          <li><strong className="text-white">From public professional sources:</strong> LinkedIn profiles, company websites, and public activity on LinkedIn posts.</li>
          <li><strong className="text-white">From business-contact data providers:</strong> they supply work contact details for professionals in our sector.</li>
        </ul>
        <p className={p}>Our first message to you tells you where your details came from.</p>

        <h2 className={h2}>Why we use it, and on what basis</h2>
        <ul className={ul}>
          <li>
            <strong className="text-white">To correspond with professionals about market intelligence relevant to their role.</strong>
            <ul className={nested}>
              <li>In the UK and EU, our basis is our legitimate interest in professional networking and business development.</li>
              <li>In Canada, we rely on implied consent where it applies (for example, a published business address relevant to your role), or on your express consent.</li>
              <li>We write to business addresses only.</li>
            </ul>
          </li>
          <li><strong className="text-white">To run and improve our research.</strong> We analyse how audiences engage with public energy-market content, in aggregate. Our basis is our legitimate interest in producing market research. We do not publish information that identifies individuals, and we do not quote anyone without permission.</li>
          <li><strong className="text-white">To deliver services and newsletters you have asked for.</strong> Our basis is the contract with you, or your consent.</li>
            <li><strong className="text-white">To understand how this website is used,</strong> in aggregate. Our basis is our legitimate interest in maintaining and improving the site.</li>
        </ul>
        <p className={p}>
          We never sell or rent personal information, and we never share contact lists with clients. Clients receive aggregate analysis only. We make no decisions about you by automated means.
        </p>

        <h2 className={h2}>Who we share it with</h2>
        <p className={p}>
          We share information only with service providers acting on our behalf: email and website hosting, database hosting, website analytics, newsletter delivery and scheduling. Each is bound by its own security and privacy terms. We share it with no one else unless the law requires it.
        </p>

        <h2 className={h2}>Where it is processed</h2>
        <p className={p}>
          Our providers are mainly in the United States and Canada. When information is transferred from the UK, the EU or Canada, we rely on appropriate safeguards. Depending on the provider, these are standard contractual clauses, the UK addendum, or the provider&apos;s Data Privacy Framework certification.
        </p>

        <h2 className={h2}>How long we keep it</h2>
        <ul className={ul}>
          <li><strong className="text-white">Contact and correspondence records</strong> are reviewed after at most 24 months without contact, and deleted when no longer needed.</li>
          <li><strong className="text-white">If you ask us not to contact you,</strong> we keep a minimal suppression record (your email address and the date) so that we can honour the request.</li>
        </ul>

        <h2 className={h2}>Your choices and rights</h2>
        <ul className={ul}>
          <li><strong className="text-white">Opt out at any time:</strong> reply &quot;stop&quot; to any email, or write to {CONTACT_EMAIL}. You may object to direct marketing at any time, and we will stop. We act on it without undue delay, and within 10 business days at most.</li>
          <li><strong className="text-white">Other rights:</strong> you may access, correct or delete your information, restrict or object to other processing, withdraw consent where we rely on it, and ask how we obtained your details. Write to {CONTACT_EMAIL} and we&apos;ll respond within one month.</li>
          <li>
            <strong className="text-white">Complaints:</strong> you can complain to your local data-protection authority:
            <ul className={nested}>
              <li>Canada: the Office of the Privacy Commissioner</li>
              <li>UK: the ICO</li>
              <li>EU: your national supervisory authority</li>
            </ul>
          </li>
        </ul>

        <h2 className={h2}>Changes</h2>
        <p className={p}>We&apos;ll post updates here and change the date above.</p>
      </div>
    </main>
  );
}
