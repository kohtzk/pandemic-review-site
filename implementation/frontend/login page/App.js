import logo from './logo.svg';
import './App.css';
import Header from'./Header.js';
import Content from './Content.js';
import Navbar from './Navbar.js';


function App() {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="App">
          <Header />
          <Content />
      </div>
    </div>
  );
}

export default App;
