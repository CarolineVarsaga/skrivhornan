import Selfportrait from '../../assets/images/selfportrait.jpg';
import Divider from '../shared/Divider';

const Article = () => {
  return (
    <article className='presentation-article'>
        <img className="photo" src={Selfportrait} alt="profilbild av Torbjörn Vårsaga" width="489" height="521" />
        <div className='article-text-container'>
          <h1>Kommunikatör</h1>
          <Divider />
          <p className='presentation-paragraph'>
              Ord som träffar rakt i hjärtat på dig kan falla 
              platt inför den målgrupp du vill nå. När du 
              behöver en erfaren brobyggare står jag redo 
              att hjälpa dig.
          </p>
          <button className='contact-button'>Kontakta mig</button>
        </div>
    </article>
  );
};

export default Article;