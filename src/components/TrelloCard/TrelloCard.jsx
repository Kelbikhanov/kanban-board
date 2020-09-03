import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import style from './TrelloCard.scss'

const TrelloCard = ({text}) => {
    return (
        <Card className="container-card">
            <CardContent>
            <Typography
         gutterBottom>
          {text}
        </Typography>
            </CardContent>
    </Card>
    )
}

export default TrelloCard;