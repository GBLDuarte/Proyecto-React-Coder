import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <main>
        <ItemListContainer url="https://http2.mlstatic.com/D_Q_NP_610133-MLA49075693918_022022-P.webp" greeting="Alto zapatitos" descripcion="Talle 51"/>
      </main>
    </body>
  );
}

export default App;
