import Container from "./Container";

export default function Institutional() {
  return (
    <section className="py-16 md:py-24 bg-white/[0.03] border-y border-white/10">
      <Container>
        <h2 className="font-display text-3xl md:text-4xl">Institucional</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-prime-gold font-medium">Missão</div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Transformar tecnologia em vantagem competitiva por meio de inteligência estratégica,
              excelência técnica e entrega sustentável.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-prime-gold font-medium">Visão</div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Ser referência em soluções corporativas que conectam sistemas e decisões, gerando legado,
              clareza e evolução contínua.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-prime-gold font-medium">Valores</div>
            <ul className="mt-3 text-neutral-300 space-y-2">
              <li>Excelência técnica</li>
              <li>Inteligência estratégica</li>
              <li>Responsabilidade e legado</li>
              <li>Clareza e verdade</li>
              <li>Evolução contínua</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
