import React from 'react'
import style from './TrelloList.scss'
import TrelloCard from '../TrelloCard/TrelloCard'

const TrelloList = ({title}) => {
    return (
        <div>
            <h4>{title}</h4>
            <TrelloCard/>
        </div>
    
    )
}

export default TrelloList;