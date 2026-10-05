import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { DEMO_URL } from "./config";

const allFeatures = [
  "Gestión de pacientes",
  "Expediente clínico",
  "Citas",
  "Odontograma",
  "Facturación y pagos",
  "Dashboard y notificaciones",
  "Búsqueda inteligente con IA",
  "Radiografías y archivos clínicos",
  "Acceso a nuevas funciones de Odentia",
];

const plans = [
  {
    name: "Fundador",
    price: "11",
    badge: "Precio especial",
    text: "Todas las funciones de Odentia a un precio especial para nuestros primeros odontólogos.",
    features: allFeatures,
    featured: true,
  },
  {
    name: "Odentia",
    price: "19",
    badge: null,
    text: "Acceso completo a todas las herramientas de Odentia para gestionar tu consultorio.",
    features: allFeatures,
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="planes" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Todas las funciones. Un solo Odentia.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Accede a todas las herramientas de la plataforma. Los primeros
              odontólogos pueden obtener un precio especial como usuarios fundadores.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 80}
              className="h-full"
            >
              <article
                className={`landing-card flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft sm:p-8 ${
                  plan.featured
                    ? "border-brand ring-1 ring-brand/20"
                    : "border-border"
                }`}
              >
                <div className="flex min-h-7 items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-primary">
                    {plan.name}
                  </h3>

                  {plan.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-foreground">
                      <Sparkles
                        className="size-3"
                        aria-hidden="true"
                      />
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-6 text-primary">
                  <span className="text-4xl font-extrabold">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / mes
                  </span>
                </p>

                <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground">
                  {plan.text}
                </p>

                <ul className="my-6 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "brand" : "outline"}
                  size="lg"
                  asChild
                  className="mt-auto w-full"
                >
                  <a
                    href={DEMO_URL}
                    aria-label={`Solicitar demo de ${plan.name}`}
                  >
                    Solicitar demo
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            El plan Fundador incluye las mismas funciones de Odentia y está
            disponible exclusivamente para los primeros usuarios de la plataforma.
          </p>
        </Reveal>
      </div>
    </section>
  );
}