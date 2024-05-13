import CardComponent from "./CardComponent";
import cardImage from "../../assets/images/selfportrait.jpg"

const PortfolioLanding: React.FC = () => {

    const cardComponentData = [
        {
            image: cardImage, 
            title: 'Titel 1'
        },
        {
            image: '', 
            title: 'Titel 2'
        },
        {
            image: '', 
            title: 'Titel 3'
        },
        {
            image: '', 
            title: 'Titel 4'
        },
        {
            image: '', 
            title: 'Titel 5'
        },
        {
            image: '', 
            title: 'Titel 6'
        },
        {
            image: '', 
            title: 'Titel 7'
        },
    ]

  return (
    <section className="portfolio-landing">
        <div className="portfolio-landing-background">
            <h2 className="portfolio-landing-heading">Portfolio</h2>
            <CardComponent data={cardComponentData} />
        </div>
        
    </section>
  );
};

export default PortfolioLanding;