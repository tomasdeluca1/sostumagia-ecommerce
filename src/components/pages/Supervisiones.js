import React from "react";

function Supervisiones() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-[#fed5d5]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Supervisiones Individuales
        </h1>

        <section className="bg-white/60 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-gray-600 mb-4">
            Supervisiones individuales para psicopedagogos que se encuentran
            comenzando en la clínica. Un encuentro uno a uno para consultar tus
            dudas en un espacio seguro y personalizado para vos.
          </p>
        </section>

        <section className="bg-white/60 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ¿Para quién está pensado?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Psicopedagogos recién recibidos</li>
            <li>Profesionales iniciando su práctica clínica</li>
            <li>Psicopedagogos que buscan orientación en sus primeros casos</li>
            <li>
              Profesionales que necesitan acompañamiento en su desarrollo
              inicial
            </li>
          </ul>
        </section>

        <section className="bg-white/60 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ¿Qué incluye?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Acompañamiento personalizado en tus primeros casos</li>
            <li>Espacio seguro para plantear dudas e inquietudes</li>
            <li>Orientación en el proceso diagnóstico</li>
            <li>Guía en la planificación de intervenciones</li>
            <li>Apoyo en el manejo de situaciones clínicas complejas</li>
          </ul>
        </section>

        <section className="bg-white/60 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Modalidades de Encuentro Virtual
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">
                Encuentros online personalizados que se adaptan a tu
                disponibilidad horaria, permitiéndote conectarte desde donde
                estés.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Supervisiones;
