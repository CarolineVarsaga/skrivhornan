import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import { useContext } from 'react';
import Context from './components/context/Context';
import About from "./components/about-section/About";
import Portfolio from "./components/portfolio-section/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  const context = useContext(Context);
  if (!context) return;

  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
