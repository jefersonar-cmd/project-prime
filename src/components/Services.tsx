import Container from "./Container";

const services = [
  {
    title: "Criação de Aplicações",
    desc: "Soluções sob medida para processos internos, portais e automações que aumentam controle e reduzem esforço.",
  },
  {
    title: "Integrações",
    desc: "Conectamos ERP, APIs, bancos e sistemas legados com rastreabilidade, estabilidade e evolução segura.",
  },
  {
    title: "Sites Institucionais Premium",
    desc: "Presença corporativa que transmite confiança: performance, SEO, manutenção simples e acabamento de marca.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Serviços</h2>
            <p className="mt-3 text-neutral-400 max-w-2xl">
              O objetivo não é só entregar — é integrar, sustentar e deixar sua operação mais inteligente.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition"
            >
              <div className="text-prime-gold font-medium">{s.title}</div>
              <p className="mt-3 text-neutral-300 leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-xs text-neutral-400">
                Entrega com documentação • padrões • continuidade
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
