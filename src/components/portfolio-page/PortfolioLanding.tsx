import React, { useState } from 'react';
import CardComponent from "./CardComponent";
import PopupComponent from "./PopUp";
import cardImage from "../../assets/images/selfportrait.jpg"

/* const PortfolioLanding: React.FC = () => {

    const cardComponentData = [
        {
            image: cardImage, 
            title: 'Titel 1',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 2',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 3',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 4',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 5',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 6',
            description: ''
        },
        {
            image: '', 
            title: 'Titel 7',
            description: ''
        },
    ]

  return (
    <section className="portfolio-landing">
        <div className="portfolio-landing-background">
            <h2 className="portfolio-landing-heading">Portfolio</h2>
            <CardComponent data={cardComponentData} onClick={} />
        </div>
        
    </section>
  );
};

export default PortfolioLanding; */


interface CardData {
    image: string;
    title: string;
    description: string;
}

const PortfolioLanding: React.FC = () => {
    const [popupData, setPopupData] = useState<CardData | null>(null);

    const cardComponentData: CardData[] = [
        {
            image: cardImage,
            title: 'Titel 1',
            description: 'Beskrivning 1'
        },
        {
            image: '',
            title: 'Titel 2',
            description: 'Beskrivning 2'
        },
        {
            image: '',
            title: 'Titel 3',
            description: 'Beskrivning 3'
        },
        {
            image: '',
            title: 'Titel 4',
            description: 'Beskrivning 4'
        },
        {
            image: '',
            title: 'Titel 5',
            description: 'Beskrivning 5'
        },
        {
            image: '',
            title: 'Titel 6',
            description: 'Beskrivning 6'
        },
        {
            image: '',
            title: 'Titel 7',
            description: 'Beskrivning 7'
        }
    ];

    const openPopup = (data: CardData) => {
        setPopupData(data);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    return (
        <section className="portfolio-landing">
            <div className="portfolio-landing-background">
                <h2 className="portfolio-landing-heading">Portfolio</h2>
                <div className="card-container">
                    {cardComponentData.map((data, index) => (
                        <CardComponent key={index} data={data} onClick={() => openPopup(data)} />
                    ))}
                </div>
            </div>
            {popupData && <PopupComponent data={popupData} onClose={closePopup} />}
        </section>
    );
};

export default PortfolioLanding;