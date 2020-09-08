import React from 'react'
import style from './TrelloList.scss'
import TrelloCard from '../TrelloCard/TrelloCard'
import TrelloActionButton from '../TrelloActoionButton/TrelloActionButton'

const TrelloList = ({ title, cards, listID}) => {
    return (
        <div className="container">
            <h4>{title}</h4>
            {cards.map(card => (<TrelloCard
             key={card.id}
             text={card.text} />
))}
<TrelloActionButton listID={listID}/>
        </div>
    );
};

export default TrelloList;