import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  CalendarDays,
  FileText,
  Activity,
  Image as ImageIcon,
  Receipt,
  Bell,
  LayoutDashboard,
  Check,
  MessageCircle,
  Menu,
  Search,
  Sparkles,
  FolderOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { BrowserFrame } from "@/components/BrowserFrame";

import { Reveal } from "@/components/landing/Reveal";
import { Pricing } from "@/components/landing/Pricing";
import { AISearchSection } from "@/components/landing/AISearchSection";
import {
  DEMO_URL,
  LOGIN_URL,
  WHATSAPP_URL,
  SEO_TITLE,
  SEO_DESCRIPTION,
} from "@/components/landing/config";

import dashboardImg from "@/assets/dashboard-generic.jpg";
import pacienteImg from "@/assets/paciente-generic.jpg";
import agendaImg from "@/assets/agenda-generic.jpg";
import odontogramaImg from "@/assets/odontograma-generic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://odentiahn.com" }],
    meta: [
      { property: "og:url", content: "https://odentiahn.com" },
      { title: SEO_TITLE },
      {
        name: "description",
        content: SEO_DESCRIPTION,
      },
      { property: "og:title", content: SEO_TITLE },
      {
        property: "og:description",
        content: SEO_DESCRIPTION,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { href: "#funciones", label: "Funciones" },
  { href: "#ia", label: "IA" },
  { href: "#planes", label: "Planes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const features = [
  {
    icon: Users,
    title: "Gestión de pacientes",
    text: "Registra, organiza y encuentra rápidamente la información de tus pacientes.",
  },
  {
    icon: CalendarDays,
    title: "Agenda de citas",
    text: "Programa citas y consulta fácilmente la actividad diaria de tu clínica.",
  },
  {
    icon: FileText,
    title: "Expediente clínico",
    text: "Antecedentes médicos, diagnósticos, últimas consultas y actividad clínica del paciente.",
  },
  {
    icon: Activity,
    title: "Odontograma digital",
    text: "Registra visualmente hallazgos, diagnósticos y cambios en las piezas dentales.",
  },

  {
    icon: Receipt,
    title: "Facturación y pagos",
    text: "Crea facturas, registra pagos y consulta saldos pendientes.",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    text: "Mantén visibles eventos e información importante dentro del sistema.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Visualiza citas, pacientes y actividad reciente desde una sola pantalla.",
  },
  {
    icon: Search,
    title: "Búsqueda normal de pacientes",
    text: "Encuentra pacientes por nombre o número de expediente.",
  },
  {
    icon: Sparkles,
    title: "Búsqueda inteligente",
    text: "Busca pacientes por alergias, antecedentes, diagnósticos y conceptos relacionados, no solo por nombre o número de expediente.",
    pro: true,
  },
  {
    icon: ImageIcon,
    title: "Radiografías",
    text: "Guarda y consulta radiografías asociadas directamente a cada paciente.",
    pro: true,
  },
  {
    icon: FolderOpen,
    title: "Archivos clínicos",
    text: "Organiza y consulta los archivos clínicos asociados a cada expediente.",
    pro: true,
  },
];

const faqs = [
  {
    q: "¿Qué hace la búsqueda inteligente de Odentia?",
    a: "Permite buscar pacientes utilizando información registrada en sus expedientes, como alergias, antecedentes, diagnósticos, medicamentos y otros conceptos relacionados. No realiza diagnósticos ni sustituye el criterio clínico del odontólogo.",
  },
  {
    q: "¿Qué incluye Odentia Pro?",
    a: "Además de las funciones de gestión de Odentia Esencial, Pro incluye búsqueda inteligente, gestión de radiografías y archivos clínicos.",
  },
  {
    q: "¿Qué es Odentia?",
    a: "Odentia es un software de gestión para consultorios y clínicas dentales. Reúne pacientes, citas, expediente clínico, odontograma, radiografías y pagos en una sola plataforma.",
  },
  {
    q: "¿Odentia está diseñado específicamente para odontólogos?",
    a: "Sí. Sus funciones están construidas alrededor del flujo de trabajo de un consultorio odontológico, no de un sistema médico genérico.",
  },
  {
    q: "¿Necesito instalar algún programa?",
    a: "No. Odentia se utiliza desde el navegador, así que puedes acceder desde tu computadora sin instalaciones.",
  },
  {
    q: "¿Qué información puedo gestionar?",
    a: "Pacientes, citas, expediente clínico, odontograma, radiografías, facturación y pagos, además del resumen de actividad de la clínica.",
  },
  {
    q: "¿Puedo solicitar una demostración antes de contratarlo?",
    a: "Sí. Puedes solicitar una demo y te mostramos el sistema funcionando para que veas si se ajusta a tu clínica.",
  },
  {
    q: "¿Ofrecen soporte?",
    a: "Sí. Damos acompañamiento directo y cercano durante la configuración y el uso diario del sistema.",
  },
];

function Landing() {
  return (
    <div className="landing min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Problema />
        </Reveal>
        <Funciones />
        <AISearchSection />
        <Reveal>
          <Paciente />
        </Reveal>
        <Reveal>
          <Simplicidad />
        </Reveal>
        <Reveal>
          <ComoFunciona />
        </Reveal>
        <Pricing />
        <Reveal>
          <Origen />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <CtaFinal />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="Odentia">
          <Logo />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={LOGIN_URL}>Iniciar sesión</a>
          </Button>
          <Button variant="brand" size="sm" asChild>
            <a href={DEMO_URL}>Solicitar demo</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="landing w-72 overflow-y-auto">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <SheetDescription className="sr-only">
              Navega por las funciones, planes y opciones de contacto de Odentia.
            </SheetDescription>
            <div className="mt-8 flex flex-col gap-5">
              {navLinks.map((l) => (
                <SheetClose key={l.href} asChild>
                  <a href={l.href} className="text-base font-medium text-foreground">
                    {l.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button variant="outline" asChild>
                  <a href={LOGIN_URL}>Iniciar sesión</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="brand" asChild>
                  <a href={DEMO_URL}>Solicitar demo</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 text-center sm:pt-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
          Tu clínica dental, organizada de principio a fin.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Gestiona pacientes, citas, expedientes, odontogramas y facturación desde un solo lugar,
          con herramientas inteligentes que te ayudan a encontrar la información que necesitas.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="brand" size="xl" asChild>
            <a href={DEMO_URL}>Solicitar una demo</a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#como-funciona">Ver cómo funciona</a>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {[
            "Diseñado para odontología",
            "Acceso desde el navegador",
            "Búsqueda inteligente",
            "Soporte cercano",
          ].map((i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="size-4 text-brand" />
              {i}
            </li>
          ))}
        </ul>
        <Reveal className="mt-14">
          <BrowserFrame url="app.odentiahn.com/dashboard" className="text-left">
            <img
              src={dashboardImg}
              alt="Dashboard de Odentia con citas del día, pacientes activos y pagos pendientes"
              width={1600}
              height={1008}
              className="w-full"
            />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}

function Problema() {
  const items = [
    {
      title: "Información dispersa",
      text: "Datos del paciente repartidos entre papeles, hojas de cálculo y carpetas.",
    },
    {
      title: "Agenda difícil de controlar",
      text: "Citas anotadas en distintos lugares y sin una vista clara del día.",
    },
    {
      title: "Seguimiento separado",
      text: "Lo clínico por un lado y lo administrativo por otro, sin conexión.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Menos tiempo organizando. Más tiempo atendiendo.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Administrar pacientes, citas, información clínica, radiografías y pagos desde diferentes
          lugares genera desorden y trabajo innecesario. Odentia reúne la información esencial de la
          clínica en una única plataforma.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="landing-card rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="font-semibold text-primary">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Funciones() {
  return (
    <section id="funciones" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-3xl font-bold text-primary sm:text-4xl">
          Lo esencial de tu clínica, en un solo lugar.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BrowserFrame url="app.odentiahn.com/citas">
            <img
              src={agendaImg}
              alt="Agenda semanal de citas en Odentia"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full"
            />
          </BrowserFrame>
          <BrowserFrame url="app.odentiahn.com/odontograma">
            <img
              src={odontogramaImg}
              alt="Odontograma digital en Odentia"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full"
            />
          </BrowserFrame>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, index) => (
            <Reveal delay={(index % 4) * 70} key={f.title} className="h-full">
              <div className="landing-card h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  {f.pro && (
                    <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-bold tracking-wide text-accent-foreground">
                      PRO
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paciente() {
  const items = [
    "Resumen clínico",
    "Antecedentes médicos",
    "Diagnósticos",
    "Odontograma",
    "Radiografías · PRO",
    "Facturación",
    "Actividad reciente",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Toda la historia del paciente, donde la necesitas.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde un mismo perfil accedes a la información clínica y administrativa del paciente.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="size-4 shrink-0 text-brand" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <BrowserFrame url="app.odentiahn.com/pacientes">
          <img
            src={pacienteImg}
            alt="Ficha de paciente en Odentia con resumen clínico y actividad reciente"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full"
          />
        </BrowserFrame>
      </div>
    </section>
  );
}

function Simplicidad() {
  const items = [
    { title: "Simple", text: "Una interfaz clara para las tareas que realizas todos los días." },
    {
      title: "Dental",
      text: "Funciones construidas alrededor del flujo de trabajo de un consultorio odontológico.",
    },
    {
      title: "Cercano",
      text: "Soporte directo y una plataforma que puede evolucionar escuchando las necesidades reales de las clínicas.",
    },
  ];
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Hecho para trabajar, no para complicarte.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="landing-card rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    { n: "1", title: "Conoce Odentia", text: "Solicita una demostración del sistema." },
    {
      n: "2",
      title: "Configura tu clínica",
      text: "Prepara tu cuenta y comienza a registrar tus pacientes.",
    },
    {
      n: "3",
      title: "Trabaja desde un solo lugar",
      text: "Gestiona tu actividad clínica y administrativa dentro de Odentia.",
    },
  ];
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">Empieza de forma sencilla.</h2>
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="landing-card rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
              {s.n}
            </span>
            <h3 className="mt-4 font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Origen() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="rounded-3xl border border-border bg-surface px-8 py-10 text-center">
        <p className="text-lg font-semibold text-primary">
          Software desarrollado en Honduras <span aria-hidden="true">🇭🇳</span>
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Odentia nace como una alternativa cercana y sencilla para digitalizar la gestión de
          consultorios y clínicas dentales.
        </p>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section id="cta" className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Conoce una forma más simple e inteligente de gestionar tu consultorio.
        </h2>
        <p className="mt-4 text-primary-foreground/70">
          Solicita una demostración y descubre cómo Odentia reúne la gestión clínica y
          administrativa en una sola plataforma.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="brand" size="xl" asChild>
            <a href={DEMO_URL}>Solicitar una demo</a>
          </Button>
          <Button variant="outlineDark" size="xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle />
              Escribir por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">Preguntas frecuentes</h2>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base font-semibold text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Producto",
      links: [
        { label: "Funciones", href: "#funciones" },
        { label: "Planes", href: "#planes" },
        { label: "Solicitar demo", href: DEMO_URL },
        { label: "Iniciar sesión", href: LOGIN_URL },
      ],
    },
    { title: "Empresa", links: [{ label: "Contacto", href: WHATSAPP_URL }] },
    {
      // TODO(production): replace legal placeholders with published policy URLs.
      title: "Legal",
      links: [
        { label: "Privacidad", href: "#" },
        { label: "Términos", href: "#" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Tu clínica, en orden.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold text-primary">{c.title}</h3>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © Odentia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
