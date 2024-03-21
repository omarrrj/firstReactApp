
import './App.css';
import Navbar from './components/navBar.js';
import LandingPage from './components/landingPage.js';
import About from './components/aboutUs.js'
import Menu from './components/menu.js'
import Location from './components/location.js'
import Reviews from './components/reviews.js'
import Footer from './components/footer.js'
function App() {
  return (
    <div className="App">
      <div id="home">
        <LandingPage />
      </div>
      <div>
        <Navbar />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="menu">
        <Menu/>
      </div>
      <div id="location">
        <Location/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
