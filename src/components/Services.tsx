import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function Services({ config }: Props) {
  const cards = [
    { title: "Entrenamiento funcional", desc: "Fuerza aplicada, resistencia y movilidad real.", delay: 0 },
    { title: "Musculación", desc: "Hipertrofia, definición y progresión guiada.", delay: 150 },
    { title: "Clases grupales", desc: "Motivación, energía y comunidad entrenando juntos.", delay: 300 },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Servicios</h2>
          <p className="text-gray-400 mt-4 text-lg">
            Elegí tu enfoque o combiná ambos para maximizar resultados.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-12">
          {cards.map((c, i) => (
            <div
              key={c.title}
              data-aos="zoom-in"
              data-aos-delay={c.delay}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              {config.images.services && (
                <img
                  src={config.media.serviceImages[i]}
                  alt={c.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-gray-400">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
