//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar.js';
import LandingPage from './components/landingPage.js';

function App() {
  return (
    <div className="App">
       <div>
        <LandingPage/>
       </div>
      <div>
      <Navbar />
        </div> 
     <h1>Hello this is my first website</h1>
    </div>
  );
}

export default App;