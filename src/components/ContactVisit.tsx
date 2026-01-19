import type { TemplateConfig } from "../config/template";
import { waQuickLink } from "../utils/links";

type Props = { config: TemplateConfig };

export default function ContactVisit({ config }: Props) {
  const waHref = waQuickLink(config.whatsapp, "Hola! Quiero información sobre planes y horarios.");

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Visitá el gimnasio</h2>
          <p className="text-gray-400 mt-4 text-lg">
            Pasate por el espacio, consultanos por redes o escribinos directo por WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-10 items-stretch">
          {/* INFO CARD (arriba en mobile) */}
          <div
            data-aos="fade-right"
            className="order-1 lg:order-2 bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-violet-500">{config.brandName}</h3>
                <p className="text-gray-400 mt-1">{config.city}</p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </span>
            </div>

            <div className="mt-8 space-y-4 text-gray-300">

              <div>
                <p className="text-gray-400">Dirección</p>
                <p className="font-medium">{config.address}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400">Contacto</p>
                <p className="font-medium">Tel: {config.phoneDisplay}</p>
                <p className="font-medium">
                  Email:{" "}
                  <a href={`mailto:${config.email}`} className="hover:text-violet-500 transition">
                    {config.email}
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400">Horarios</p>
                <p className="font-medium">Lun a Vie: 7:00 - 22:00</p>
                <p className="font-medium">Sáb: 9:00 - 13:00</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 mb-3">Redes</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500 transition"
                  >
                    Instagram
                  </a>
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500 transition"
                  >
                    Facebook
                  </a>
                  <a
                    href={config.social.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500 transition"
                  >
                    TikTok
                  </a>
                </div>
              </div>

              <a
                className="mt-6 inline-flex w-full justify-center bg-violet-500 px-6 py-3 rounded-xl font-semibold
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
                href={waHref}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* MAP (abajo en mobile) */}
          <div
            data-aos="fade-left"
            className="order-2 lg:order-1 lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden min-h-[420px] md:min-h-[520px]"
          >
            <iframe
              id="mapFrame"
              src={config.mapEmbedUrl}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del gimnasio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
