import React from "react";
import { Helmet } from "react-helmet-async";

function TratamientoPsicopedagogico() {
  return (
    <>
      <Helmet>
        <title>Tratamiento Psicopedagógico | Agustina Deluca</title>
        <meta
          name="description"
          content="Tratamiento psicopedagógico para niños y adolescentes con dificultades en el aprendizaje. También dirigido a jóvenes universitarios que quieren desarrollar técnicas de estudio."
        />
        <meta
          name="keywords"
          content="tratamiento psicopedagógico, dificultades de aprendizaje, técnicas de estudio, apoyo académico"
        />
        <link
          rel="canonical"
          href="https://www.sostumagia.vercel.app/tratamiento-psicopedagogico"
        />
      </Helmet>

      <main className="min-h-screen bg-#fed5d5">
        {/* Hero Section */}
        <div className="relative bg-[#fed5d5] overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#cd5c5c] leading-tight">
                  Tratamiento Psicopedagógico
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Acompañamiento especializado para niños y adolescentes con
                  dificultades en el aprendizaje, y jóvenes universitarios que
                  buscan potenciar sus técnicas de estudio.
                </p>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl mt-6 lg:mt-0">
                <img
                  src="/v2/tratamientos.png"
                  alt="Tratamiento Psicopedagógico"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 lg:mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-16 sm:w-24 h-16 sm:h-24 mx-auto flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-14 sm:w-14"
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-800">
                  Evaluación Inicial
                </h3>
                <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
                  Evaluación exhaustiva de las dificultades específicas en el
                  aprendizaje, identificando fortalezas y áreas de mejora para
                  diseñar un plan personalizado.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-16 sm:w-24 h-16 sm:h-24 mx-auto flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-14 sm:w-14"
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-800">
                  Técnicas de Estudio
                </h3>
                <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
                  Desarrollo de estrategias efectivas y personalizadas de
                  aprendizaje, adaptadas a cada nivel educativo y estilo de
                  aprendizaje individual.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-16 sm:w-24 h-16 sm:h-24 mx-auto flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-14 sm:w-14"
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-800">
                  Apoyo Académico
                </h3>
                <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
                  Acompañamiento personalizado y continuo para superar
                  dificultades específicas y alcanzar un mejor rendimiento
                  académico.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-16 sm:w-24 h-16 sm:h-24 mx-auto flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-14 sm:w-14"
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-800">
                  Acompañamiento Integral
                </h3>
                <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
                  Colaboración activa con familias y docentes para crear un
                  ambiente de aprendizaje óptimo y consistente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TratamientoPsicopedagogico;
