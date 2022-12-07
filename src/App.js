import './App.css';
import Peliculas from './componentes/peliculas';

function App() {
  return (
    <div className="App">
      <div id="paginacion">
          <button className="btn btn-outline-primary" id="btnAnterior">Anterior</button>
          <button className="btn btn-outline-primary" id="btnPosterior">Posterior</button>
        </div>
        <div className="contenedor" id="contenedor">
          <Peliculas/>
        </div>
        
    </div>
  );
}

export default App;
