import './App.css';
import AgregarProducto from './components/AgregarProducto'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Menu />
          <AgregarProducto/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
