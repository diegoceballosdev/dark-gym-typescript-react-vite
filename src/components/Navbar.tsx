import { useEffect, useState } from "react";
import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function Navbar({ config }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Opcional: bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const brandShort = config.brandName.split(" ")[0] || config.brandName;

  return (
    <>
      <nav data-aos="fade-down" className="fixed w-full z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-wide text-violet-500">
              {brandShort}
            </span>
            <span className="hidden md:inline-block text-xs text-gray-400 tracking-widest">
              GYM
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
            <li><a href="#home" className="text-gray-300 hover:text-violet-400 transition">Inicio</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition">Servicios</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-violet-400 transition">Nosotros</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-violet-400 transition">Contacto</a></li>
          </ul>

          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-0 z-[60] transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Overlay (clic para cerrar) */}
        <button
          aria-label="Cerrar menú"
          className="absolute inset-0 bg-black/90 backdrop-blur"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={[
            "absolute inset-0 flex flex-col items-center justify-center gap-8",
            "text-xl font-semibold text-white transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          {/* Botón X (arriba derecha) */}
          <button
            aria-label="Cerrar menú"
            className="absolute top-5 right-5 inline-flex items-center justify-center
                       h-11 w-11 rounded-full bg-white/5 border border-white/10
                       hover:border-violet-500 hover:bg-white/10 transition"
            onClick={() => setOpen(false)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          {[
            ["#home", "Inicio"],
            ["#services", "Servicios"],
            ["#about", "Nosotros"],
            ["#contact", "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hover:text-violet-500 transition"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
