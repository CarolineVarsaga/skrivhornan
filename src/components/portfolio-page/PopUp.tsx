
type CardData = {
    image: string;
    title: string;
    description: string;
};

interface PopupProps {
    data: CardData;
    onClose: () => void;
}

const PopupComponent: React.FC<PopupProps> = ({ data, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-container">
                <span className="popup-close-button" onClick={onClose}>X</span>
                <img src={data.image} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default PopupComponent;