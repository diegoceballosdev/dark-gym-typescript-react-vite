import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function About({ config }: Props) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6">Nuestra filosofía</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Creemos en la disciplina que se construye día a día. En DarkFit no entrenás solo:
            entrenás con un equipo que te acompaña, te corrige y te empuja cuando hace falta.
            <br /><br />
            Nuestro enfoque combina método + energía + consistencia: resultados reales, medibles y sostenibles.
            Porque el cambio no se logra en una semana… se logra con un plan, un espacio y una comunidad que te sostiene.
          </p>

          <div data-aos="fade-up" data-aos-delay="120" className="mt-8 flex gap-3 flex-wrap text-sm text-gray-300/80">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Evaluación inicial</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Plan por objetivos</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Seguimiento</span>
          </div>
        </div>

        <div data-aos="fade-left" className="border border-white/10 p-[2px] rounded-2xl">
          {config.images.about && (
            <div id="aboutImage">
              <img
                src={config.media.aboutImageUrl}
                alt="Entrenador personal"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
