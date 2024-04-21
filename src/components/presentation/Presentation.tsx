import PresentationBackground from '../../assets/svg/green-background.svg';
import PresentationBackgroundDesktop from '../../assets/svg/green-background-desktop.svg';
import Article from './Article';
import Context from '../../components/context/Context'; 
import { useContext } from 'react';

const Presentation = () => {
    const context = useContext(Context);
	if (!context) return; 

	const { isDesktop } = context; 

  return (
    <section className="presentation-section">
        <img className="presentation-background" src={isDesktop ?  PresentationBackgroundDesktop : PresentationBackground} alt="turkos bakgrundsfärg" width={isDesktop ?  "1440" : "744"} height="914"/>
        <Article />
    </section>    
  );
};

export default Presentation;