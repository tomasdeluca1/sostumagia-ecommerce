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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center md:text-left">
              Contacto
            </h3>
            <div className="flex flex-col space-y-6">
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
                    {link.icon ? (
                      <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    ) : (
                      <span className="font-medium text-sm">{link.prefix}</span>
                    )}
                  </div>
                  <a
                    href={link.href}
                    className="text-lg hover:text-white transition-colors duration-300"
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
              className="transform hover:scale-105 transition-all duration-300"
              href="https://huev.site"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <img
                  src="../../huevsite.png"
                  alt="Huev Site"
                  className="mr-6 w-12 h-12 animate-spin rounded-full"
                />
                <p className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                  Build your website with Huev
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
