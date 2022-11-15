import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footerCopyrightBox">
      <div className="footer">
        <div className="footer-box-a">
          <h3>Contacto</h3>

          <div className="flex-data-footer">
            <div className="icons-footer">
              <div className="footer-icon">
                <a href="https://api.whatsapp.com/send?phone=5491154187697">
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                </a>
              </div>
              <div className="footer-icon">
                <a href="mailto:contacto@argentinacampers.com.ar">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </a>
              </div>

              <div className="footer-icon">
                <a
                  href="https://www.instagram.com/argentinacampers_/"
                  style={{ fontWeight: "600" }}
                >
                  IG
                </a>
              </div>
              {/* <div className="footer-icon">
                <a href="https://open.spotify.com/playlist/7bYegQzq797SsfCUZW1b8E?si=746e689a844b4ecc">
                  <font-awesome-icon icon="fa-brands fa-spotify" />
                </a>
              </div> */}
            </div>
            <div className="footer-webs">
              <div className="footer-webs">
                <a href="https://api.whatsapp.com/send?phone=5491133855500">
                  +54 9 11 3385-5500
                </a>
              </div>
              <div className="footer-webs">
                <a href="mailto:agusdeluca@gmail.com">agusdeluca@gmail.com</a>
              </div>
              <div className="footer-webs">
                <a href="https://www.instagram.com/sos.tumagia/?hl=es-la">
                  @sos.tumagia
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-box-b">
          <h3>Nuestros valores</h3>
          <p className="footer-txt">
            Cada rincón de Argentina vale la pena. Amamos nuestra tierra, su
            cultura y sus diversos paisajes. Siempre dispuesto a darte una mano
            y acompañarte en la aventura.
          </p>
          <p className="footer-txt fecha-footer">10 marzo 2021</p>
        </div> */}
        {/* <div className="footer-box-c">
          <h3>Obtener ofertas</h3>
          <div>
            <form method="POST" className="button-inside-input">
              <input
                type="text"
                placeholder="E-mail"
                className="mail-clientes"
                name="clientEmail"
                v-model="clientEmail"
              />
              <input
                type="submit"
                name="clientEmailButton"
                href="/"
                value="Ok"
              />
            </form>
          </div>
        </div> */}
      </div>
      <p className="copyright">
        Created by
        <a href="https://huevsite.vercel.app/"> Huevsite™</a>
      </p>
    </div>
  );
};

export default Footer;
