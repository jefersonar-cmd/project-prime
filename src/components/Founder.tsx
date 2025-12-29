import Container from "./Container";

export default function Founder() {
  return (
    <section id="fundador" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">Sobre</h2>
            <p className="mt-3 text-neutral-400">
              Uma empresa jovem pode ser séria — se tiver método, responsabilidade e compromisso com excelência.
            </p>
          </div>

          <div className="md:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-neutral-300 leading-relaxed">
              <p className="text-neutral-400">Fundador</p>
              <p className="mt-2">
                Sou <span className="text-white">Jefferson</span>, fundador da Tarsus Prime.
                Ainda estou construindo minha trajetória — e justamente por isso eu opero com disciplina,
                transparência e responsabilidade.
              </p>
              <p className="mt-4">
                Meu compromisso é simples: entregar soluções que funcionem hoje e permaneçam sólidas amanhã.
                Quando não for o momento certo, eu digo. Quando for, eu assumo e executo.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-neutral-400">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Clareza</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Excelência</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Legado</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
