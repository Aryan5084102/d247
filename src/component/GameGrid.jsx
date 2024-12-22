import React from 'react'
import GameCard from './GameCard'

const GameGrid = ({ games }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {games.map((game, index) => (
                <GameCard key={index} imageSrc={game.imageSrc} title={game.title} />
            ))}
        </div>
    )
}
export default GameGrid