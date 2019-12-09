import React from "react";
import Card from './Card';
import './cards.scss';

const Cards = ({ cards }) => {
    return (
        <div>
            <div className={`CardsWrapper`}>
                <div className="CardsCentrate">
                    <div className="CardsContent">
                    {cards.map((card, index) => (
                        <Card 
                            key={Date.now() + index}
                            created={card.userName} 
                            name={card.name} 
                            height={card.height}
                        /> 
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cards;
