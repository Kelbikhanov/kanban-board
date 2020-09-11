import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import {Draggable} from 'react-beautiful-dnd'

import style from './TrelloCard.scss'

const TrelloCard = ({text, id, index}) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card className="container-card">
                <CardContent>
                <Typography gutterBottom>{text}</Typography>
                </CardContent>
        </Card>
        </div>
            )}
    </Draggable>
    );
};

export default TrelloCard;