import Container from "./Container";

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/7 to-white/3 p-8 md:p-10">
          <h2 className="font-display text-3xl md:text-4xl">Contato</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl">
            Me diga o contexto (empresa, problema, objetivo). Eu retorno com direção clara e próximos passos.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-neutral-400">E-mail</div>
              <div className="mt-1 text-white">contato@tarsusprime.com.br</div>
              <div className="mt-2 text-xs text-neutral-500">(Contato Corporativo)</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-neutral-400">WhatsApp</div>
              <div className="mt-1 text-white">+55 (11) 99738-6605</div>
              <div className="mt-2 text-xs text-neutral-500">(Contato Rápido/Tiragem de Dúvidas)</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-neutral-400">Atuação</div>
              <div className="mt-1 text-white">Brasil • Remoto</div>
              <div className="mt-2 text-xs text-neutral-500">Projetos sob demanda</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
