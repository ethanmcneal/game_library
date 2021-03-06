import React, {useState} from "react"
import GameForm from './GameForm'

const Game = (props) =>{
    const {updateGame, deleteGame, title, genre, likes, id} = props
    const [showEditForm, setShowEditForm] = useState(false)
    const renderGame = () => {
    return (
        <div>
        <h3>{title}</h3>
        <h4>genre: {genre}</h4>
        <h4>likes: {likes}</h4>
        <button onClick={() => setShowEditForm(true)}>Edit</button>
        <button onClick={() => deleteGame(id)}>Delete{id}</button>
        
        </div>
    )
    }
    return (
        <div>
            {!showEditForm && renderGame()}
            {showEditForm && <GameForm updateGame={updateGame} id={id}/>}
        </div>
    )
}
export default Game