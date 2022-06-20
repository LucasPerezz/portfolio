import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './App.css';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <Footer />
    </>
  )
}

export default App;
