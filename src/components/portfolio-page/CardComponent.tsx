//import React, { useState } from 'react';

/* type CardComponentData = {
    image: string; 
    title: string; 
    description: string; 
}; */

/* type CardComponentProps = {
    data: CardComponentData[];
    onClick: () => void;
}; */

/* const CardComponent: React.FC<CardComponentProps> = ({ data, onClick }) => {
  return (
    <div className="portfolio-cardcomponent-container" onClick={onClick}>
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
}; */
interface CardData {
    image: string;
    title: string;
    description: string;
}

interface CardComponentProps {
    data: CardData;
    onClick: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ data, onClick }) => {
    return (
      <div className="portfolio-cardcomponent-container" onClick={onClick}>
          <div className="portfolio-cardcomponent">
              <div className="portfolio-cardcomponent-image-container">
                  <img src={data.image} alt={data.title} className="portfolio-cardcomponent-image" />
              </div>
              <h3 className="portfolio-cardcomponent-heading">{data.title}</h3>
          </div>
      </div>
    );
  };

export default CardComponent;

