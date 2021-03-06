import React from 'react'
import Game from './Game'




const Games = (props) => {
    const {games, deleteGame, updateGame, } = props
    const renderGames = () =>{
        return games.map( game => <Game updateGame={updateGame} deleteGame={deleteGame}key={game.id}{...game} />)
    }
return (
<div>
    <h2>Games</h2>
    {renderGames()}

</div>
)
}

export default Games