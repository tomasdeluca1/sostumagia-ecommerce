import "./Home.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <div className="welcomeMessage">
        <div className="fotoAgus">
          <img
            src="./../../img/fotoAgustinillis.jpg"
            className="agusJpg"
            alt=""
          />
        </div>
        <div className="greetingDesktop">
          <div className="greetingBox">
            <div>
              <div className="greetingTitle">
                <h2>¡Bienvenido a sos tu magia!</h2>
              </div>
              <div className="greetingTxt">
                <h3>Espacio para reencontrarte con tu esencia.</h3>
              </div>
            </div>

            <div className="greetingSubtitle">
              <p>
                <strong>Agus Deluca</strong>. Psicopedagoga y apasionada por la
                educación y el aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Home;
