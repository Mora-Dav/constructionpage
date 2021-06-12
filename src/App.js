import wave from './waveGeneration1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wave} className="App-logo" alt="logo" />
        <p>
          Estamos construyendo nuestro sitio, mientras tanto podés enterarte de las novedades en las redes.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/entremareas.surf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          entremareas.surf
          <ig/>
        </a>
      </header>
    </div>
  );
}

export default App;
