import "./Home.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <div className="welcomeMessage">
        <div className="fotoAgusHome">
          <div className="agusBackground"> .</div>
          {/* <img
            src="./../../img/fotoAgustinillis.jpg"
            className="agusJpg"
            alt=""
          /> */}
        </div>
        <div className="greetingDesktop">
          <div className="greetingBox">
            {/* <div> */}
            <div className="greetingTitle">
              <h3>¡Bienvenido a sos tu magia!</h3>
            </div>
            <div className="greetingTxt">
              <h4>Cursos para reencontrarte con tu esencia.</h4>
            </div>
            {/* </div> */}

            <div className="greetingSubtitle">
              <p>
                <strong>Agus Deluca</strong>
                <br />
                Psicopedagoga, profesora y apasionada en enseñar y guiar a los
                demás en el camino hacia ellos mismos.
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
