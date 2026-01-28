import { useEffect, useMemo, useState } from "react";
import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function Navbar({ config }: Props) {
  const [open, setOpen] = useState(false);

  // Para animación + desmontaje del overlay (evita overflow fantasma)
  const [menuMounted, setMenuMounted] = useState(false);

  // Escape para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 🔒 Blindaje: evita scroll horizontal SIEMPRE (y “franja”)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlX = html.style.overflowX;
    const prevBodyX = body.style.overflowX;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";

    return () => {
      html.style.overflowX = prevHtmlX;
      body.style.overflowX = prevBodyX;
    };
  }, []);

  // ✅ Bloquear SOLO scroll vertical cuando el menú está abierto
  // (No usar body.style.overflow porque pisa overflow-x)
  useEffect(() => {
    const body = document.body;
    const prevY = body.style.overflowY;

    body.style.overflowY = open ? "hidden" : prevY || "";

    return () => {
      body.style.overflowY = prevY;
    };
  }, [open]);

  // Montaje/desmontaje del menú (mantiene animación al cerrar)
  useEffect(() => {
    if (open) {
      setMenuMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMenuMounted(false), 450); // debe matchear duration
    return () => window.clearTimeout(t);
  }, [open]);

  const brandShort = useMemo(() => {
    const name = config.brandName?.trim() || "Brand";
    return name.split(" ")[0] || name;
  }, [config.brandName]);

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed left-0 right-0 top-0 w-full z-50 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center min-w-0">
          <a href="#home" className="flex items-baseline gap-2 min-w-0">
            <span className="text-3xl font-extrabold tracking-wide text-violet-500 truncate">
              {brandShort}
            </span>
            <span className="hidden md:inline-block text-xs text-gray-400 tracking-widest shrink-0">
              GYM
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-violet-400 transition"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-violet-400 transition"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-violet-400 transition"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-violet-400 transition"
              >
                Contacto
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden shrink-0 flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile menu (solo montado cuando hace falta) */}
      {menuMounted && (
        <div
          className={[
            "fixed inset-0 z-[60] overflow-hidden transition-opacity duration-450",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-hidden={!open}
        >
          {/* Overlay (clic para cerrar) */}
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/90 backdrop-blur"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            className={[
              "absolute inset-0 flex flex-col items-center justify-center gap-8",
              "text-xl font-semibold text-white transition-transform duration-450 will-change-transform",
              open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
          >
            {/* Botón X */}
            <button
              type="button"
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

            {(
              [
                ["#home", "Inicio"],
                ["#services", "Servicios"],
                ["#about", "Nosotros"],
                ["#contact", "Contacto"],
              ] as const
            ).map(([href, label]) => (
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
      )}
    </>
  );
}
