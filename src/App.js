import wave from './waveGeneration1.svg';
import './App.css';
import Icono from './Icono.js';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ENTRE MAREAS</h1>
        <img src={wave} className="App-logo" alt="logo" />
        <p>
          <Header/>
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/entremareas.surf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icono/>
          entremareas.surf
        </a>
      </header>
    </div>
  );
}

export default App;
