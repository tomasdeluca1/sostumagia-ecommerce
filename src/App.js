import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src="../../sos-tu-magia.png" className="App-logo" alt="logo" />
        <p>
          Sitio en proceso llevado a cabo por <strong>Huevsite</strong>.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/huevsite/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al perfil
        </a>
      </header>
    </div>
  );
}

export default App;
