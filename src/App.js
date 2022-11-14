import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
