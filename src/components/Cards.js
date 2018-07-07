import React from 'react'
import Card from './Card';


const Cards = ({ robots }) => {
    const cardsArray = robots.map((robot) => {
        return (
            <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username}/>
        )
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default Cards