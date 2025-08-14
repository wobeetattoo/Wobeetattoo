"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CalendarDays, Shield, ChevronRight, Instagram, Mail, MapPin, Clock } from "lucide-react";
const ACCENT = "#079A2F";
const BRAND = { name: "Wobee Tattoo Gallery", accent: ACCENT, city: "Cork, Ireland", email: "booking@wobee.gallery", instagram: "https://instagram.com/yourhandle" };
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_40%_at_50%_-10%,rgba(7,154,47,0.25),rgba(0,0,0,0)_60%),radial-gradient(30%_20%_at_0%_0%,rgba(7,154,47,0.10),rgba(0,0,0,0)_60%),radial-gradient(30%_20%_at_100%_0%,rgba(7,154,47,0.10),rgba(0,0,0,0)_60%)]" />
    <div className="mx-auto max-w-6xl px-6">{children}</div>
  </section>
);
const CornerDots = ({ position = "tl" }) => {
  const base = "pointer-events-none absolute grid grid-cols-4 gap-2 opacity-40";
  const pos = { tl: "top-6 left-6", tr: "top-6 right-6", bl: "bottom-6 left-6", br: "bottom-6 right-6" }[position];
  return (<div className={`${base} ${pos}`} style={{ color: ACCENT }}>{Array.from({ length: 16 }).map((_, i) => (<span key={i} className="block h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />))}</div>);
};
const XMarks = ({ count = 4, className = "" }) => (<div className={`pointer-events-none absolute flex gap-2 opacity-60 ${className}`}>{Array.from({ length: count }).map((_, i) => (<div key={i} className="h-4 w-4 rotate-45 border-2" style={{ borderColor: ACCENT }} />))}</div>);
const Card = ({ children, className = "" }) => (<div className={`rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-xl backdrop-blur ${className}`}>{children}</div>);
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group inline-flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl" style={{ background: ACCENT }} />
            <span className="font-semibold tracking-wide">{BRAND.name}</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#framework" className="hover:opacity-80">Co‑Creation</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#book" className="rounded-full px-4 py-2 font-medium" style={{ background: ACCENT, color: "black" }}>Book</a>
          </nav>
        </div>
      </header>
      <Section id="top" className="pt-24">
        <CornerDots position="tl" /><CornerDots position="tr" />
        <XMarks className="left-6 top-1/2" /><XMarks className="right-6 bottom-16" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              <span className="block" style={{ color: ACCENT }}>REAL</span>
              <span className="block">RECOGNIZE</span>
              <span className="block" style={{ color: ACCENT }}>REAL</span>
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" className="mb-10 max-w-2xl text-lg text-white/80">
              Everything else is just noise. I create tattoos that are built from your story and my vision—nothing copied, nothing watered down.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap items-center justify-center gap-4">
              <a href="#book" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium" style={{ background: ACCENT, color: "black" }}>
                Book Co‑Creation Call <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5">
                View Projects <ChevronRight size={18} />
              </a>
            </motion.div>
            <div className="mt-14 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              {[{k:"Technical Mastery"},{k:"Zero Pinterest Copies"},{k:"Two‑Stage Certainty"},{k:"Respect for Your Time"}].map((item, i) => (
                <Card key={i} className="text-sm">
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} style={{ color: ACCENT }} />
                    <span className="font-medium">{item.k}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
      <Section id="work">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold md:text-4xl">Selected Work</h2>
            <a href="#book" className="hidden rounded-full px-4 py-2 text-sm md:inline-block" style={{ background: ACCENT, color: "black" }}>Start your piece</a>
          </div>
          <p className="mb-8 max-w-3xl text-white/70">A small glimpse. Each piece was co‑created with the client and designed specifically for their body and story.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50" whileHover={{ scale: 1.01 }}>
                <div className="aspect-[4/5] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)]" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-md bg-black/60 px-2 py-1 text-xs">Project #{i + 1}</span>
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))" }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
      <Section id="drops" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0))]">
        <CornerDots position="bl" /><CornerDots position="br" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold md:text-4xl">Premium Project Drops</h2>
            <p className="text-sm text-white/70">Limited designs for people who understand value.</p>
          </div>
          <div className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="min-w-[280px] max-w-sm p-0">
                <div className="aspect-[4/5] rounded-t-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)]" />
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">Drop #{i + 1}</h3>
                  <p className="text-sm text-white/70">Statement piece. Custom‑fit to your story and body. One of one.</p>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: ACCENT, color: "black" }}>Available</span>
                    <a href="#book" className="text-sm underline decoration-transparent underline-offset-4 hover:decoration-white">Claim</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>
      <Section id="framework">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Co‑Creation Framework</h2>
            <p className="text-white/70">My two‑stage protocol eliminates uncertainty and turns you from a client into a co‑author. You arrive on tattoo day with confidence, not hope.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <div className="mb-4 inline-flex items-center gap-3 text-sm font-semibold"><Shield size={16} style={{ color: ACCENT }} /> Stage I — Alignment & Commitment</div>
              <ul className="space-y-3 text-white/80">
                <li>Short online consultation to tune the vision.</li>
                <li>We set direction, style guardrails and key elements.</li>
                <li>Full trust before we move forward.</li>
              </ul>
            </Card>
            <Card>
              <div className="mb-4 inline-flex items-center gap-3 text-sm font-semibold"><CalendarDays size={16} style={{ color: ACCENT }} /> Stage II — Finalization & Certainty</div>
              <ul className="space-y-3 text-white/80">
                <li>2–3 days before your session: live online reveal.</li>
                <li>On‑screen tweaks together until it’s perfect.</li>
                <li>Body visualization so you see the final outcome.</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </Section>
      <Section id="pricing">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Pricing</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[{ title: "Full Day", price: "€600", note: "Best for large work & sleeves" },{ title: "Half Day", price: "€350", note: "Great for medium pieces" },{ title: "Small Tattoo", price: "from €60", note: "Minimal pieces & touch‑ups" }].map((p, i) => (
              <Card key={i}>
                <h3 className="mb-1 text-xl font-semibold">{p.title}</h3>
                <div className="mb-2 text-3xl font-black" style={{ color: ACCENT }}>{p.price}</div>
                <p className="mb-4 text-sm text-white/70">{p.note}</p>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-white/80">
                  {i === 0 && <li>Usually one focused session per day.</li>}
                  {i === 1 && <li>Perfect for step‑by‑step progress.</li>}
                  {i === 2 && <li>Fast booking windows available.</li>}
                </ul>
                <a href="#book" className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium" style={{ background: ACCENT, color: "black" }}>
                  Reserve <ArrowRight size={16} />
                </a>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/60">Deposit: €50 (small tattoos €20). Non‑refundable. One free reschedule up to 3 days before. No‑show = deposit lost.</div>
        </motion.div>
      </Section>
      <Section id="stories" className="bg-[linear-gradient(180deg,rgba(7,154,47,0.08),rgba(0,0,0,0))]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Client Evolution</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["From Pinterest to Personal","Minimalist with Maximum Impact","The ‘Impossible’ Request"].map((title, i) => (
              <Card key={i}>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-white/70">Idea → my interpretation → final result. I document the journey so you feel like a co‑author, not a passenger.</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>
      <Section id="faq">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">FAQ</h2>
          <div className="space-y-6">
            <Card><h3 className="mb-2 font-semibold">How do I book?</h3><p className="text-white/70">Hit the booking button, tell me your story and preferred body area. I’ll reply with a short questionnaire and a link to Stage I consultation.</p></Card>
            <Card><h3 className="mb-2 font-semibold">What styles do you do?</h3><p className="text-white/70">I don’t sell “styles”. I deliver authenticity. My technical range is a tool to serve the idea we create together.</p></Card>
            <Card><h3 className="mb-2 font-semibold">Do you copy references?</h3><p className="text-white/70">Never. References help define direction. The final work is unique to you, designed for your body.</p></Card>
          </div>
        </motion.div>
      </Section>
      <Section id="book">
        <CornerDots position="tl" /><CornerDots position="br" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let’s create your statement piece</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70">Tell me what you want it to say about you. I’ll take it from there and show you what’s possible.</p>
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <a href={BRAND.instagram} className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-neutral-900/70 px-5 py-4 font-medium hover:bg-neutral-800">
                <Instagram size={18} style={{ color: ACCENT }} /> DM me on Instagram
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-medium" style={{ background: ACCENT, color: "black" }}>
                <Mail size={18} /> Email booking
              </a>
            </div>
            <div className="mt-6 text-sm text-white/60">New studio from Sept — {BRAND.city}. Online consultations available worldwide.</div>
          </div>
        </motion.div>
      </Section>
      <footer className="border-t border-white/10 py-10 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3"><div className="h-4 w-4 rounded-md" style={{ background: ACCENT }} /><span>{BRAND.name}</span></div>
          <div className="flex items-center gap-4"><span className="inline-flex items-center gap-1"><MapPin size={14} /> {BRAND.city}</span><span className="inline-flex items-center gap-1"><Clock size={14} /> By appointment only</span></div>
          <div className="">© {new Date().getFullYear()} — Real recognize real.</div>
        </div>
      </footer>
    </main>
  );
}
