import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function Footer({ config }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div data-aos="fade-up">
          <h3 className="text-2xl font-extrabold text-primary">{config.brandName}</h3>
          <p className="text-gray-400 mt-4">
            Gimnasio moderno con entrenamientos personalizados, musculación y clases funcionales.
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            {config.city} · Disciplina · Fuerza · Constancia
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <h4 className="font-semibold text-white">Navegación</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a className="hover:text-violet-400 transition" href="#home">Inicio</a></li>
            <li><a className="hover:text-violet-400 transition" href="#services">Servicios</a></li>
            <li><a className="hover:text-violet-400 transition" href="#about">Nosotros</a></li>
            <li><a className="hover:text-violet-400 transition" href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="240">
          <h4 className="font-semibold text-white">Contacto</h4>
          <div className="mt-4 space-y-2 text-gray-400">
            <p><span className="text-gray-500">Tel:</span> {config.phoneDisplay}</p>
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <a href={`mailto:${config.email}`} className="hover:text-white transition">
                {config.email}
              </a>
            </p>
            <p><span className="text-gray-500">Dirección:</span> {config.address}</p>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              ["Instagram", config.social.instagram, "fa-brands fa-instagram"],
              ["Facebook", config.social.facebook, "fa-brands fa-facebook-f"],
              ["TikTok", config.social.tiktok, "fa-brands fa-tiktok"],
            ].map(([label, href, icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-primary transition "
                title={label}
              >
                {/* iconos simples (puedes reemplazar por lucide-react si querés) */}
                <span className="text-lg text-gray-300 hover:text-violet-400">
                  <i className={icon}></i>
                </span>
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex flex-col md:flex-row gap-2 justify-between">
          <p>© {year} {config.brandName}. Todos los derechos reservados.</p>
          <p>
            Desarrollado by <span className="text-gray-400">Diego E. Ceballos & StudioCBL</span> · Optimizado para SEO + Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
