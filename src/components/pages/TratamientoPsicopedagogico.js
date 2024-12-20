import React from "react";

function TratamientoPsicopedagogico() {
  return (
    <main className="min-h-screen bg-#fed5d5">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img
          src="/img/fotoAgustinillis.jpg"
          alt="Tratamiento Psicopedagógico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
            Tratamiento Psicopedagógico
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-light leading-relaxed">
            Acompañamiento especializado para niños y adolescentes con
            dificultades en el aprendizaje, y jóvenes universitarios que buscan
            potenciar sus técnicas de estudio.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-2xl p-6 w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Evaluación Inicial
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Evaluación exhaustiva de las dificultades específicas en el
                aprendizaje, identificando fortalezas y áreas de mejora para
                diseñar un plan personalizado.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-2xl p-6 w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Técnicas de Estudio
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Desarrollo de estrategias efectivas y personalizadas de
                aprendizaje, adaptadas a cada nivel educativo y estilo de
                aprendizaje individual.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-2xl p-6 w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Apoyo Académico
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Acompañamiento personalizado y continuo para superar
                dificultades específicas y alcanzar un mejor rendimiento
                académico.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-2xl p-6 w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Acompañamiento Integral
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Colaboración activa con familias y docentes para crear un
                ambiente de aprendizaje óptimo y consistente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TratamientoPsicopedagogico;
