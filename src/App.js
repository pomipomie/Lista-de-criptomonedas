import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Lista de Criptomonedas
        </h1>
        <h2>
          En base a los datos de la API <a href='https://www.coingecko.com/es/api' target='_blank' rel="noreferrer">Coingecko</a>
        </h2>
      </header>
      <Main></Main>
      <footer>
        <p>App creada por <a href='mailto:mxbadano@gmail.com'>Xio</a> con React.js. El ícono de la lista pertenece a <a href="https://www.flaticon.com/free-icons/money" title="money icons">Muhazdinata @ Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
