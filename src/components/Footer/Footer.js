import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const contactLinks = [
    {
      icon: "fa-solid fa-phone",
      href: "https://api.whatsapp.com/send?phone=5491133855500",
      text: "+54 9 11 3385-5500",
    },
    {
      icon: "fa-solid fa-envelope",
      href: "mailto:agusdelucaa@gmail.com",
      text: "agusdelucaa@gmail.com",
    },
    {
      icon: null,
      prefix: "IG",
      href: "https://www.instagram.com/sos.tumagia/?hl=es-la",
      text: "@sos.tumagia",
    },
  ];

  return (
    <footer className="bg-[#cd5c5c] text-[#fed5d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 sm:space-y-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
              Contacto
            </h3>
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {link.icon ? (
                      <FontAwesomeIcon
                        icon={link.icon}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    ) : (
                      <span className="font-medium text-base sm:text-lg">
                        {link.prefix}
                      </span>
                    )}
                  </div>
                  <a
                    href={link.href}
                    className="text-lg sm:text-xl hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Huevsite */}
          <div className="flex flex-col items-center justify-center">
            <a
              className="transform hover:scale-105 transition-all duration-300 w-full max-w-md"
              href="https://huev.site"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all">
                <img
                  src="../../huevsite.png"
                  alt="Huev Site"
                  className="mr-6 w-12 h-12 sm:w-16 sm:h-16 animate-spin rounded-full"
                />
                <p className="text-xl sm:text-2xl font-bold text-yellow-400 group-hover:text-yellow-300">
                  Build your website with Huev
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm sm:text-base text-white/60">
            © {new Date().getFullYear()} Agustina Deluca. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
