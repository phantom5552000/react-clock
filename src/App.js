import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code><Clock/></code>
      </header>
    </div>
  );
}

export default App;
