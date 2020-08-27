import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import style from './TrelloCard.scss'

const TrelloCard = ({title}) => {
    return (
        <Card>
        <Typography
         gutterBottom>
          Word of the Day
        </Typography>
    </Card>
    )
}

export default TrelloCard;