type CardComponentData = {
    image: string; 
    title: string; 
};

type CardComponentProps = {
    data: CardComponentData[];
};

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  return (
    <div className="portfolio-cardcomponent-container">
        {data.map((item, index) => (
            <div key={index} className="portfolio-cardcomponent">
                <div className="portfolio-cardcomponent-image-container">
                    <img src={item.image} alt={item.title} className="portfolio-cardcomponent-image" />
                </div>
                <h3 className="portfolio-cardcomponent-heading">{item.title}</h3>
            </div>
        ))}
    </div>
  );
};

export default CardComponent;

