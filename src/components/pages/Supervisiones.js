import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Supervisiones() {
  return (
    <>
      <Helmet>
        <title>Supervisiones Individuales | Agustina Deluca</title>
        <meta
          name="description"
          content="Supervisiones individuales para psicopedagogos que inician en la clínica. Espacio personalizado de consulta y acompañamiento profesional."
        />
        <link
          rel="canonical"
          href="https://www.sostumagia.vercel.app/supervisiones"
        />
      </Helmet>

      <main className="min-h-screen bg-[#fed5d5]">
        {/* Hero Section */}
        <div className="relative bg-[#fed5d5] overflow-hidden py-12 sm:py-16 md:py-20">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fed5d5] to-[#ffecec]" />
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#cd5c5c]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#cd5c5c]/10 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#cd5c5c]/10 text-[#cd5c5c] text-sm font-medium mb-2">
                  Crecimiento Profesional
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#cd5c5c] leading-tight">
                  Supervisiones <br />
                  <span className="text-[#cd5c5c]/80">Individuales</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Un espacio personalizado para psicopedagogos que inician su
                  camino en la clínica, donde podrás consultar tus dudas y
                  recibir orientación profesional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://api.whatsapp.com/send?phone=5491133855500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-[#cd5c5c] text-white rounded-lg shadow-lg hover:bg-[#cd5c5c]/90 transition-colors"
                  >
                    ¡Contactate conmigo!
                  </a>
                  <Link
                    to="/cursos"
                    className="px-8 py-3 bg-white/50 backdrop-blur-sm text-[#cd5c5c] rounded-lg shadow-md hover:bg-white/60 transition-colors"
                  >
                    Mis cursos
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#cd5c5c] to-[#e88888] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src="/v2/supervisions.jpeg"
                    alt="Supervisiones Individuales"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* ¿Qué ofrecemos? */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  ¿Qué ofrecemos?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Supervisiones individuales personalizadas para psicopedagogos
                  que inician en la clínica. Un espacio seguro y confidencial
                  para resolver dudas y recibir orientación profesional.
                </p>
              </div>
            </div>

            {/* ¿Para quién? */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 sm:mb-6 text-[#cd5c5c] bg-[#fed5d5]/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  ¿Para quién está pensado?
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Psicopedagogos recién recibidos
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Profesionales iniciando su práctica clínica
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Psicopedagogos que buscan orientación en sus primeros casos
                  </li>
                </ul>
              </div>
            </div>

            {/* ¿Qué incluye? */}
            <div className="md:col-span-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  ¿Qué incluye?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Acompañamiento personalizado en tus primeros casos",
                    "Espacio seguro para plantear dudas e inquietudes",
                    "Orientación en el proceso diagnóstico",
                    "Guía en la planificación de intervenciones",
                    "Apoyo en el manejo de situaciones clínicas complejas",
                    "Seguimiento continuo de tu desarrollo profesional",
                  ].map((item, index) => (
                    <div key={index} className="bg-white/50 p-4 rounded-lg">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Supervisiones;
