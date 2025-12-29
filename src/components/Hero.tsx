"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section
      id="topo"
      className="scroll-mt-24 pt-16 md:pt-24 pb-10 md:pb-16"
    >
      <Container>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.h1
              className="font-display text-4xl md:text-6xl leading-[1.05]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Inteligência que conecta
              <span className="text-prime-gold"> sistemas</span>, dados e decisões.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-neutral-300 max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Criamos aplicações, integrações e presença institucional com padrão corporativo:
              clareza, desempenho e responsabilidade técnica — para o que você constrói hoje virar legado amanhã.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              <a
                href="#contato"
                className="px-6 py-3 rounded-lg bg-prime-gold text-black font-medium hover:brightness-110 transition"
              >
                Solicitar proposta
              </a>
              <a
                href="#servicos"
                className="px-6 py-3 rounded-lg border border-white/15 text-neutral-200 hover:bg-white/5 transition"
              >
                Ver serviços
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-xs text-neutral-400 max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Arquitetura e integração
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Padrões e documentação
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Performance e legado
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/7 to-white/3 p-6">
              <div className="text-sm text-neutral-300">
                <div className="text-neutral-400">Manifesto</div>
                <div className="mt-3 font-display text-2xl">
                  “Não entregamos apenas código; entregamos inteligência de negócio.”
                </div>
                <div className="mt-4 text-neutral-400 leading-relaxed">
                  Toda solução precisa ser compreensível, escalável e sustentável.
                  O objetivo não é “funcionar hoje”, é permanecer sólido amanhã.
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Foco</span>
                  <span>Empresas em evolução</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-neutral-400">Entrega</span>
                  <span>Clareza + resultado</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-neutral-400">Postura</span>
                  <span>Excelência e verdade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
