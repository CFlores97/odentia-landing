import { ArrowDown, Search, Sparkles, FileText } from "lucide-react";
import { BrowserFrame } from "@/components/BrowserFrame";
import { Reveal } from "./Reveal";

export function AISearchSection() {
  return (
    <section id="ia" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            Disponible en Odentia Pro
          </span>
          <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">
            Encuentra información clínica de forma más inteligente.
          </h2>
          <p className="mt-5 text-muted-foreground">
            La búsqueda inteligente de Odentia permite localizar pacientes a partir de antecedentes,
            alergias, diagnósticos, medicamentos y otros datos registrados en el expediente, incluso
            cuando la búsqueda no utiliza exactamente las mismas palabras.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Consulta la información de tus propios expedientes. La IA no diagnostica, no recomienda
            tratamientos ni toma decisiones clínicas.
          </p>
          <a
            href="#planes"
            className="mt-6 inline-flex text-sm font-semibold text-accent-foreground hover:underline"
          >
            Conocer Odentia Pro →
          </a>
        </Reveal>
        <Reveal delay={100}>
          <BrowserFrame url="app.odentiahn.com/pacientes">
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Sparkles className="size-4 text-brand" aria-hidden="true" />
                Búsqueda inteligente
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand/30 bg-accent/50 p-4 text-sm text-primary">
                <Search className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <p>Pacientes con alergia a penicilina y antecedentes de endodoncia</p>
              </div>
              <ArrowDown className="mx-auto my-4 size-5 text-brand" aria-hidden="true" />
              <p className="mb-3 text-xs font-semibold text-muted-foreground">
                Resultados relacionados
              </p>
              <ul className="space-y-3">
                {["Paciente A", "Paciente B", "Paciente C"].map((name) => (
                  <li key={name} className="rounded-xl border border-border bg-surface p-4">
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <FileText className="size-4 text-brand" aria-hidden="true" />
                      {name}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Alergia registrada: penicilina · Antecedente: tratamiento de conducto
                      (endodoncia).
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Vista ilustrativa con datos ficticios.
              </p>
            </div>
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
