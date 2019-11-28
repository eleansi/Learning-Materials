import React from "react";
import Card from './Card';
import './cards.scss';

const Cards = ({ cards }) => (
    <div>
        <div className={`CardsWrapper tc`}>
            {cards.map((card, index) => (
                <Card 
                    key={Date.now() + index}
                    id={card.id} 
                    userName={card.userName} 
                    name={card.name} 
                    email={card.email}
                /> 
            ))}
        </div>
    </div>
);

export default Cards;
