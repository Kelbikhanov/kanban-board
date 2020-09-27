import React from 'react'
import style from './TrelloList.scss'
import TrelloCard from '../TrelloCard/TrelloCard'
import TrelloActionButton from '../TrelloActoionButton/TrelloActionButton'
import { Droppable, Draggable} from 'react-beautiful-dnd'

const TrelloList = ({ title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className="container">
                <Droppable droppableId={String(listID)}>
            { provided =>(
               <div {...provided.droppableProps} ref={provided.innerRef}>
               <h4>{title}</h4>
               {cards.map((card, index) => (<TrelloCard
                index={index}
                key={card.id}
                text={card.text}
                id={card.id} />
   ))}
   {provided.placeholder}
   <TrelloActionButton listID={listID}/>
           </div> 
            )}
        </Droppable>
        </div> //list container
            )}
        </Draggable>
        
    );
};

export default TrelloList;