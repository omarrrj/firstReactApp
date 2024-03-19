
import './App.css';
import Navbar from './components/navBar.js';
import LandingPage from './components/landingPage.js';
import About from './components/aboutUs.js'

function App() {
  return (
    <div className="App">
      <div>
        <LandingPage />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <About/>
      </div>

      <h1>Hello this is my first website</h1>
    </div>
  );
}

export default App;
