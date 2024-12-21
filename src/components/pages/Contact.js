import React from "react";
import { Helmet } from "react-helmet-async";
import { useSendEmail } from "../../Hooks/useSendEmail";

function Contact() {
  const { sendEmail, isSubmitting, isSubmitted, error } = useSendEmail();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    await sendEmail(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fed5d5] flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-md w-full text-center">
          <svg
            className="mx-auto h-12 w-12 text-[#cd5c5c]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            ¡Mensaje enviado!
          </h2>
          <p className="mt-2 text-gray-600">
            Me pondré en contacto contigo pronto.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contacto | Agustina Deluca</title>
        <meta
          name="description"
          content="Contacta con Agustina Deluca para consultas sobre tratamientos psicopedagógicos, supervisiones y más."
        />
      </Helmet>

      <main className="min-h-screen bg-[#fed5d5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <div className="p-6 sm:p-8 md:p-12">
              {/* Header Section */}
              <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                  Contacto
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Estoy aquí para ayudarte. Completa el formulario y me pondré
                  en contacto contigo pronto.
                </p>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-r-lg animate-shake">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#cd5c5c] transition-colors"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#cd5c5c] focus:ring-[#cd5c5c] transition-all duration-200 hover:border-gray-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#cd5c5c] transition-colors"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#cd5c5c] focus:ring-[#cd5c5c] transition-all duration-200 hover:border-gray-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#cd5c5c] transition-colors"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#cd5c5c] focus:ring-[#cd5c5c] transition-all duration-200 hover:border-gray-300"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="tratamiento">
                      Tratamiento Psicopedagógico
                    </option>
                    <option value="supervision">Supervisiones</option>
                    <option value="curso">Cursos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#cd5c5c] transition-colors"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#cd5c5c] focus:ring-[#cd5c5c] transition-all duration-200 hover:border-gray-300 resize-none"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 py-4 px-6 border-2 border-transparent rounded-lg text-base font-semibold text-white bg-[#cd5c5c] hover:bg-[#cd5c5c]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#cd5c5c] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
