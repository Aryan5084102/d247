import React from 'react'

const GameCard = ({ imageSrc, title }) => {
    return (
        <div className="group relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
    )
}

export default GameCard