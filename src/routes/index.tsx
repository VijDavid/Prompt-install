import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MessageCircle, Clock, MapPin, Wrench, Droplets, ShowerHead, Toilet,
  Flame, Search, Zap, ShieldCheck, BadgeCheck, ThumbsUp, Sparkles, Users,
  Mail, ArrowRight, Check,
} from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const BUSINESS_NAME = "Prompt Instal";
const PHONE = "+40733357835";
const PHONE_DISPLAY = "+40 733 357 835";
const ADDRESS = "Strada Enache Spirache 22, 052572 București";
const WHATSAPP = "https://wa.me/40733357835?text=Bun%C4%83%2C%20am%20nevoie%20de%20un%20instalator%20%C3%AEn%20Bucure%C8%99ti.";

const services = [
  { icon: Droplets, title: "Plumbing leak detection", desc: "Detectarea rapidă și precisă a scurgerilor de apă." },
  { icon: Flame, title: "Water heater installation", desc: "Instalare profesională pentru boilere și încălzitoare de apă." },
  { icon: Wrench, title: "Tap installation", desc: "Montaj sigur și etanș pentru orice tip de robinet." },
  { icon: Toilet, title: "Toilet installation", desc: "Instalare completă și verificarea etanșeității." },
  { icon: ShowerHead, title: "Shower installation", desc: "Montaj și etanșare pentru cabine și sisteme de duș." },
  { icon: Zap, title: "Plumbing pipe repair", desc: "Reparații pentru țevi și instalații sanitare." },
  { icon: Wrench, title: "Tap repair", desc: "Repararea robinetelor care curg sau funcționează defectuos." },
  { icon: Toilet, title: "Toilet repair", desc: "Remedierea rapidă a problemelor de WC și rezervor." },
  { icon: Search, title: "Intervenții urgente", desc: "Suntem disponibili 24 de ore pentru urgențe sanitare." },
];

const whyUs = [
  { icon: BadgeCheck, title: "Peste 10 ani experiență", desc: "Mii de intervenții reușite în București." },
  { icon: Zap, title: "Intervenție rapidă", desc: "Ajungem în 30–60 de minute în majoritatea sectoarelor." },
  { icon: ThumbsUp, title: "Prețuri corecte", desc: "Deviz clar înainte de a începe lucrarea." },
  { icon: ShieldCheck, title: "Garanție pentru lucrări", desc: "Stăm în spatele fiecărei intervenții." },
  { icon: Wrench, title: "Echipamente profesionale", desc: "Scule moderne pentru rezultate impecabile." },
  { icon: Clock, title: "Program flexibil", desc: "Lucrăm inclusiv în weekend și sărbători." },
];

const pricing = [
  { title: "Intervenție standard", price: "150 lei", desc: "Deplasare + diagnoză în București", items: ["Evaluare la fața locului", "Deviz transparent", "Fără costuri ascunse"] },
  { title: "Desfundare scurgeri", price: "de la 200 lei", desc: "Echipament profesional", items: ["Spirală electrică", "Garanție 30 de zile", "Curățare după lucrare"] , featured: true },
  { title: "Montaj baterie / chiuvetă", price: "de la 180 lei", desc: "Materiale incluse parțial", items: ["Asamblare completă", "Test etanșeitate", "Garanție 12 luni"] },
  { title: "Service centrală termică", price: "de la 250 lei", desc: "Pentru toate mărcile", items: ["Curățare arzător", "Verificare presiune", "Raport detaliat"] },
];

const sectors = ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <EmergencyBanner />
      <Services />
      <WhyUs />
      <Pricing />
      <ServiceAreas />
      <Contact />
      <Footer />
      <StickyCTAs />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-navy">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-primary text-primary-foreground">
            <Wrench className="w-5 h-5" />
          </span>
          <span className="text-lg leading-tight">
            {BUSINESS_NAME}<span className="block text-[10px] font-medium text-muted-foreground tracking-widest uppercase">București</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#servicii" className="hover:text-navy transition-colors">Servicii</a>
          <a href="#de-ce-noi" className="hover:text-navy transition-colors">De ce noi</a>
          <a href="#preturi" className="hover:text-navy transition-colors">Prețuri</a>
          <a href="#zone" className="hover:text-navy transition-colors">Zone</a>
          <a href="#contact" className="hover:text-navy transition-colors">Contact</a>
        </nav>
        <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 bg-navy text-navy-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary transition-colors">
          <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img src={heroImg} alt="Instalator profesionist Prompt Instal București la lucru" width={1600} height={1066}
        className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative container mx-auto px-4 py-24 md:py-36 text-navy-foreground">
        <div className="max-w-3xl animate-float-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent-cta animate-pulse" /> Disponibili acum în București
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-balance leading-[1.05]">
            {BUSINESS_NAME} — instalator rapid în <span className="text-primary-glow">București</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl text-balance">
            Intervenții rapide pentru instalații sanitare, scurgeri, centrale și reparații urgente. Echipă profesionistă, garanție pe lucrare, preț corect.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-accent-cta text-accent-cta-foreground px-6 py-4 rounded-xl font-semibold text-base shadow-elegant hover:scale-[1.02] transition-transform">
              <Phone className="w-5 h-5" /> Sună Acum
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 py-4 rounded-xl font-semibold text-base hover:bg-white/90 transition-colors">
              <MessageCircle className="w-5 h-5" /> WhatsApp Rapid
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-cta" /> Deschiși 24 de ore</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-cta" /> Intervenție în 30–60 min</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-cta" /> Garanție pe lucrare</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyBanner() {
  const items = [
    { icon: Clock, title: "Disponibili 24/7", desc: "Zi și noapte, inclusiv weekend" },
    { icon: Zap, title: "Intervenție rapidă", desc: "Ajungem în 30–60 minute" },
    { icon: BadgeCheck, title: "Same-day service", desc: "Rezolvăm azi, nu mâine" },
  ];
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-8 grid sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-4">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-white/10">
              <it.icon className="w-6 h-6 text-primary-glow" />
            </div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-white/70">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          {eyebrow && <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>}
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-balance">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg text-balance">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="servicii" eyebrow="Servicii" title="Soluții complete pentru instalații" subtitle="Prompt Instal oferă servicii de instalare, reparații și detectare a problemelor sanitare în București.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div key={s.title} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all shadow-card">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-secondary text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <div className="bg-secondary/60 border-y border-border">
      <Section id="de-ce-noi" eyebrow={`De ce ${BUSINESS_NAME}`} title="Profesioniști pe care te poți baza" subtitle="Suntem o echipă locală cu mii de intervenții reușite în București.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((w) => (
            <div key={w.title} className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <w.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
function Pricing() {
  return (
    <Section id="preturi" eyebrow="Prețuri transparente" title="Tarife clare, fără surprize" subtitle="Prețuri orientative pentru cele mai cerute servicii. Devizul final ți-l confirmăm înainte de a începe lucrarea.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pricing.map((p) => (
          <div key={p.title} className={`p-6 rounded-2xl border transition-all ${p.featured ? "bg-gradient-primary text-primary-foreground border-primary shadow-elegant scale-[1.02]" : "bg-card border-border"}`}>
            <h3 className={`font-semibold ${p.featured ? "" : "text-navy"}`}>{p.title}</h3>
            <div className="mt-3 text-3xl font-extrabold">{p.price}</div>
            <p className={`mt-1 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`}>{p.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-white" : "text-primary"}`} /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">* Prețurile pot varia în funcție de complexitatea lucrării. Solicită o ofertă personalizată la telefon.</p>
    </Section>
  );
}

function ServiceAreas() {
  return (
    <div className="bg-secondary/60 border-y border-border">
      <Section id="zone" eyebrow="Zone deservite" title="Acoperim întreg Bucureștiul" subtitle="Echipa noastră intervine rapid în toate cele 6 sectoare ale capitalei.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map((s) => (
            <div key={s} className="p-5 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-card transition-all">
              <MapPin className="w-5 h-5 text-primary mx-auto" />
              <div className="mt-2 font-semibold text-navy text-sm">{s}</div>
              <div className="text-xs text-muted-foreground mt-1">București</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Hai să rezolvăm problema acum" subtitle="Sună, scrie pe WhatsApp sau vino la adresa noastră. Prompt Instal este deschis 24 de ore.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
            <div className="grid place-items-center w-14 h-14 rounded-xl bg-white/15"><Phone className="w-7 h-7" /></div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-80">Sună direct</div>
              <div className="text-2xl font-extrabold">{PHONE_DISPLAY}</div>
            </div>
            <ArrowRight className="ml-auto w-5 h-5" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-4 p-5 rounded-2xl bg-accent-cta text-accent-cta-foreground">
            <div className="grid place-items-center w-14 h-14 rounded-xl bg-white/15"><MessageCircle className="w-7 h-7" /></div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-90">Scrie pe WhatsApp</div>
              <div className="text-lg font-bold">Răspuns în câteva minute</div>
            </div>
            <ArrowRight className="ml-auto w-5 h-5" />
          </a>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-border bg-card">
              <Clock className="w-5 h-5 text-primary" />
              <div className="mt-2 font-semibold text-navy">Program</div>
              <div className="text-sm text-muted-foreground mt-1">Deschis zilnic<br />24 de ore</div>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="mt-2 font-semibold text-navy">Adresă</div>
              <div className="text-sm text-muted-foreground mt-1">{ADDRESS}</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Hartă București"
              src="https://www.google.com/maps?q=Strada+Enache+Spirache+22%2C+052572+Bucuresti&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-card" onSubmit={(e) => { e.preventDefault(); window.location.href = WHATSAPP; }}>
          <h3 className="font-bold text-navy text-xl">Trimite-ne o cerere rapidă</h3>
          <p className="text-sm text-muted-foreground mt-1">Completează formularul și te contactăm în maxim 10 minute.</p>
          <div className="mt-6 grid gap-4">
            <Field label="Nume" required><input required className="input" placeholder="Numele tău" /></Field>
            <Field label="Telefon" required><input required type="tel" className="input" placeholder="07xx xxx xxx" /></Field>
            <Field label="Sector / Adresă"><input className="input" placeholder="Ex: Sector 3, Titan" /></Field>
            <Field label="Descrie problema" required>
              <textarea required rows={4} className="input resize-none" placeholder="Ex: am o scurgere la chiuveta din bucătărie..." />
            </Field>
            <button className="mt-2 inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-primary transition-colors">
              <Mail className="w-4 h-4" /> Trimite cererea
            </button>
            <p className="text-xs text-muted-foreground text-center">Sau sună direct la <a href={`tel:${PHONE}`} className="font-semibold text-primary">{PHONE_DISPLAY}</a></p>
          </div>
        </form>
      </div>
      <style>{`.input{width:100%;padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid var(--border);background:var(--background);font-size:0.95rem;outline:none;transition:border-color .2s,box-shadow .2s}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px oklch(0.52 0.18 248 / 0.15)}`}</style>
    </Section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}{required && <span className="text-destructive ml-0.5">*</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-primary"><Wrench className="w-5 h-5" /></span>
            {BUSINESS_NAME} București
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">Prompt Instal oferă servicii de instalații sanitare, disponibil 24 de ore în București.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Servicii populare</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Plumbing leak detection</li>
            <li>Water heater installation</li>
            <li>Plumbing pipe repair</li>
            <li>Toilet repair</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {PHONE_DISPLAY}</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp 24 de ore</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {ADDRESS}</li>
            <li className="flex items-center gap-2"><Users className="w-4 h-4" /> Persoane fizice & juridice</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
        <div>© {new Date().getFullYear()} {BUSINESS_NAME} București. Toate drepturile rezervate.</div>
        <div>Făcut cu grijă pentru clienții noștri din București.</div>
      </div>
    </footer>
  );
}

function StickyCTAs() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 md:hidden flex gap-3">
      <a href={`tel:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground py-3.5 rounded-xl font-semibold shadow-elegant animate-pulse-ring">
        <Phone className="w-5 h-5" /> Sună
      </a>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 bg-accent-cta text-accent-cta-foreground py-3.5 rounded-xl font-semibold shadow-elegant">
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
    </div>
  );
}
