import Header from "./components/header/Header";
import { useContext } from 'react';
import Context from './components/context/Context';
import Footer from "./components/footer/Footer";
import PortfolioLanding from "./components/portfolio-page/PortfolioLanding";

function PortfolioPage() {
  const context = useContext(Context);
  if (!context) return;

  return (
    <>
      <Header />
      <PortfolioLanding />
      <Footer />
    </>
  )
}

export default PortfolioPage; 
