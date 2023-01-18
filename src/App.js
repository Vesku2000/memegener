import './App.css';
import Header from './components/Header';
import trollFace from './img/'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header>
          <img src="./src/img/trollFace.png" alt="trollFace"></img>
          <h2>Hi</h2>
        </Header>
      </header>
    </div>
  );
}

export default App;
