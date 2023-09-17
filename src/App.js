import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <div data-testid="user-name">VinothKanna</div> */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
