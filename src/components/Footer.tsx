import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-neutral-500">
          <div>
            <div className="text-neutral-300">
              Tarsus Prime <span className="text-neutral-600">•</span>{" "}
              <span className="text-prime-gold">Inteligência que conecta</span>
            </div>
            <div className="mt-1">
              CNPJ: 63.816.240/0001-89
            </div>
          </div>

          <div className="text-xs text-neutral-600">
            © {new Date().getFullYear()} • Todos os direitos reservados
          </div>
        </div>
      </Container>
    </footer>
  );
}
