import React from 'react'
import style from './TrelloList.scss'
import TrelloCard from '../TrelloCard/TrelloCard'
import TrelloActionButton from '../TrelloActoionButton/TrelloActionButton'
import { Droppable} from 'react-beautiful-dnd'

const TrelloList = ({ title, cards, listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            { provided =>(
               <div {...provided.droppableProps} ref={provided.innerRef} className="container">
               <h4>{title}</h4>
               {cards.map((card, index) => (<TrelloCard
                index={index}
                key={card.id}
                text={card.text}
                id={card.id} />
   ))}
   <TrelloActionButton listID={listID}/>
   {provided.placeholder}
           </div> 
            )}
        </Droppable>
    );
};

export default TrelloList;