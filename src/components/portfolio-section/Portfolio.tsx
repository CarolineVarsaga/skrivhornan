import Card from "./Card"
import cardImage from "../../assets/images/selfportrait.jpg"
const Portfolio: React.FC = () => {

    const cardData = [
        {
            image: cardImage, 
            title: 'Titel1',
            description: 'En kort text om projektet. Bla bla bla, max två rader kanske. Här ryms det kanske ganska mycket. Ryms det ännu mer? '
        },
        {
            image: '', 
            title: 'Titel2',
            description: 'En kort text om projektet. Bla bla bla, max två rader kanske. '
        },
        {
            image: '', 
            title: 'Titel3',
            description: 'En kort text om projektet. Bla bla bla, max två rader kanske. '
        },
    ]

  return (
    <section className="portfolio-section">
        <div className="portfolio-background">
            <h2 className="portfolio-heading">Portfolio</h2>
            <Card data={cardData} />
            <button className="portfolio-button">Fler uppdrag</button>
        </div>
        
    </section>
  );
};

export default Portfolio;