import type { TemplateConfig } from "../config/template";

type Props = { config: TemplateConfig };

export default function Hero({ config }: Props) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {config.images.hero && (
        <div
          id="heroBg"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${config.media.heroBgUrl}')` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/90" />

      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 blur-[120px]" />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-dark" />

      <div className="relative z-10 max-w-4xl text-center px-6 pt-24">
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          Transformá tu cuerpo{" "}
          <span className="text-violet-500">con un método que funciona</span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="250" className="text-gray-200/90 max-w-2xl mx-auto mb-10 text-lg">
          Entrenamientos personalizados, acompañamiento real y resultados sostenibles.
          Sin rutinas genéricas. Sin perder tiempo.
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <a
            href="#contact"
            className="bg-violet-500/90 hover:bg-violet-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 md:text-lg"
          >
            Entrená hoy
          </a>

          <a
            href="#about"
            className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:border-violet-500 transition text-lg"
          >
            Conocé el método
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="550" className="mt-10 text-sm text-gray-300/80">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            +10 años • Planes a medida • Equipamiento pro
          </span>
        </div>
      </div>
    </section>
  );
}
