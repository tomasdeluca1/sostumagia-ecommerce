import "./Home.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#fed5d5] overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4 my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-[#cd5c5c] sm:text-5xl md:text-6xl">
                ¡Bienvenido a sos tu magia!
              </h1>
              <p className="mt-4 text-lg text-gray-600 sm:text-xl">
                Cursos para reencontrarte con tu esencia.
              </p>
              <div className="mt-8">
                <p className="text-lg text-gray-700">
                  <strong>Agus Deluca</strong>
                  <br />
                  Psicopedagoga, profesora y apasionada en enseñar y guiar a los
                  demás en el camino hacia ellos mismos.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
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
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-[#cd5c5c] text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Link to="/cursos" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold">Cursos</span>
              </div>
              <p className="text-gray-600 text-center max-w-xs">
                Descubre nuestros cursos diseñados para tu desarrollo personal
              </p>
            </div>
          </Link>

          <Link to="/supervisiones" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold">
                  Supervisiones
                </span>
              </div>
              <p className="text-gray-600 text-center max-w-xs">
                Recibe guía y apoyo profesional en tu práctica
              </p>
            </div>
          </Link>

          <Link to="/tratamiento-psicopedagogico" className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#cd5c5c] to-[#e88888] shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white text-2xl font-bold text-center">
                  Tratamiento
                  <br />
                  Psicopedagógico
                </span>
              </div>
              <p className="text-gray-600 text-center max-w-xs">
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
