export default function Info() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-dark/90 rounded-3xl p-10 md:p-14 ">
          <div className="text-center max-w-3xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
              Resultados reales, <span className="text-violet-500">con un plan inteligente</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-400 mt-4 text-lg">
              No se trata de entrenar más, sino de entrenar mejor: técnica, constancia y un plan hecho para vos.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Acompañamiento real",
                desc: "Entrenadores atentos a tu técnica, progreso y objetivos. Ajustes semanales si hace falta.",
                delay: 0,
              },
              {
                title: "Plan personalizado",
                desc: "Musculación, funcional o mixto. Rutinas según tu nivel, tiempo disponible y meta.",
                delay: 120,
              },
              {
                title: "Ambiente & equipamiento",
                desc: "Un espacio pensado para enfocarte, con equipamiento profesional y energía de comunidad.",
                delay: 240,
              },
            ].map((c) => (
              <div
                key={c.title}
                data-aos="fade-up"
                data-aos-delay={c.delay}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">

                  <h3 className="text-xl font-semibold">{c.title}</h3>
                </div>
                <p className="text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
