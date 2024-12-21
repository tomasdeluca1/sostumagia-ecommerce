import "./Home.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#fed5d5] overflow-hidden pb-8 sm:pb-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 my-8 sm:my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-[#cd5c5c]">
                ¡Bienvenido a sos tu magia!
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
                Cursos para reencontrarte con tu esencia.
              </p>
              <div className="mt-6 sm:mt-8">
                <blockquote className="p-4 sm:p-6 bg-white/50 rounded-lg shadow-md border-l-4 border-[#cd5c5c]">
                  <p className="text-base sm:text-lg text-gray-700 italic">
                    "Psicopedagoga, profesora y apasionada en enseñar y guiar a
                    los demás en el camino hacia ellos mismos."
                  </p>
                  <footer className="mt-2 text-[#cd5c5c] font-semibold">
                    — Agus Deluca
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl mt-8 lg:mt-0">
              <img
                src="./../../img/tu-magia.webp"
                alt="Agus Deluca - Psicopedagoga"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Circles */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#cd5c5c] text-center mb-8 sm:mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <Link to="/cursos" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  Cursos
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-center max-w-xs">
                Descubre nuestros cursos diseñados para tu desarrollo personal
              </p>
            </div>
          </Link>

          <Link to="/supervisiones" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  Supervisiones
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-center max-w-xs">
                Recibe guía y apoyo profesional en tu práctica
              </p>
            </div>
          </Link>

          <Link to="/tratamiento-psicopedagogico" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-xl sm:text-2xl font-bold text-center">
                  Tratamiento
                  <br />
                  Psicopedagógico
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-center max-w-xs">
                Atención personalizada para tu desarrollo educativo
              </p>
            </div>
          </Link>
        </div>
      </div>

      <ItemListContainer />
    </div>
  );
};

export default Home;
