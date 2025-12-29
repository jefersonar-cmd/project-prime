import Container from "./Container";

const steps = [
  { t: "Diagnóstico", d: "Entendemos o cenário, gargalos e riscos com objetividade." },
  { t: "Arquitetura", d: "Desenhamos a solução com visão de negócio e sustentabilidade." },
  { t: "Implementação", d: "Código limpo, testes quando aplicável e rastreabilidade." },
  { t: "Entrega & Legado", d: "Documentação, handover e acompanhamento inicial." },
];

export default function Method() {
  return (
    <section id="metodo" className="scroll-mt-24 py-16 md:py-24 bg-white/[0.03] border-y border-white/10">
      <Container>
        <h2 className="font-display text-3xl md:text-4xl">Método</h2>
        <p className="mt-3 text-neutral-400 max-w-2xl">
          Menos promessa, mais processo. O que sustenta uma empresa é previsibilidade e clareza.
        </p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-xs text-neutral-500">Etapa {i + 1}</div>
              <div className="mt-2 text-lg text-neutral-100">{s.t}</div>
              <p className="mt-2 text-neutral-400 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
