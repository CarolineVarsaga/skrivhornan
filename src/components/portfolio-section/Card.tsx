type CardData = {
    image: string; 
    title: string; 
    description: string; 
};

type CardProps = {
    data: CardData[];
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="portfolio-card-container">
        {data.map((item, index) => (
            <div key={index} className="portfolio-card">
                <div className="portfolio-card-image-container">
                    <img src={item.image} alt={item.title} className="portfolio-card-image" />
                </div>
                <h3 className="portfolio-card-heading">{item.title}</h3>
                <p className="portfolio-card-description">{item.description}</p>
            </div>
        ))}
    </div>
  );
};

export default Card;

