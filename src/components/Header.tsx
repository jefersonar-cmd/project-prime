"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "./Container";

type NavItem = { id: string; label: string };

export default function Header() {
  const navItems: NavItem[] = useMemo(
    () => [
        { id: "topo", label: "Início" },
      { id: "servicos", label: "Serviços" },
      { id: "metodo", label: "Método" },
      { id: "fundador", label: "Fundador" },
      { id: "contato", label: "Contato" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("servicos");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    // Observa quando cada seção entra no "miolo" da tela
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5],
        rootMargin: "-30% 0px -55% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [navItems]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // trava scroll do body quando o menu mobile abre (toque mais “app”)
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <button
            onClick={() => goTo("topo")}
            className="flex items-center gap-3 text-left"
            aria-label="Ir para início"
            type="button"
          >
            <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(200,163,90,0.22), transparent 60%)",
                }}
              />
              <span className="relative font-display text-lg text-prime-gold">TP</span>
            </div>

            <div className="leading-tight">
              <div className="tracking-wide font-semibold">
                TARSUS <span className="text-prime-gold">PRIME</span>
              </div>
              <div className="text-xs text-neutral-400">Inteligência que conecta</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm text-neutral-300">
            {navItems.map((n) => {
              const isActive = activeId === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  type="button"
                  className={[
                    "px-3 py-2 rounded-lg transition",
                    isActive
                      ? "text-white bg-white/10 border border-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {n.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                goTo("contato");
              }}
              className="hidden sm:inline-flex text-sm px-4 py-2 rounded-lg border border-prime-gold/40 text-prime-gold hover:bg-prime-gold hover:text-black transition"
            >
              Conversa estratégica
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <div className="relative h-4 w-5">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-5 bg-neutral-200 transition",
                    mobileOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-5 bg-neutral-200 transition",
                    mobileOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-[2px] w-5 bg-neutral-200 transition",
                    mobileOpen ? "translate-y-[-7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <Container>
            <div className="py-4 flex flex-col gap-2">
              {navItems.map((n) => {
                const isActive = activeId === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => goTo(n.id)}
                    type="button"
                    className={[
                      "w-full text-left px-4 py-3 rounded-xl border transition",
                      isActive
                        ? "border-white/15 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10",
                    ].join(" ")}
                  >
                    {n.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => goTo("contato")}
                className="mt-2 px-4 py-3 rounded-xl bg-prime-gold text-black font-medium hover:brightness-110 transition"
              >
                Solicitar proposta
              </button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
