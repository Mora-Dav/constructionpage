import wave from './waveGeneration1.svg';
import './App.css';
import Icono from './Icono.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wave} className="App-logo" alt="logo" />
        <p>
          Nuestro sitio está en construcción, mientras tanto podés enterarte de las novedades en nuestras redes.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/entremareas.surf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          entremareas.surf
          {/*<Icono/>*/}
        </a>
      </header>
    </div>
  );
}

export default App;
