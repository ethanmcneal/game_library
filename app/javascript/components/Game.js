import React, {useState} from "react"
import GameForm from './GameForm'

const Game = (props) =>{
    const { updateGame, deleteGame, title, genre, likes, id} = props
    const [showEditForm, setShowEditForm] = useState(false)
    // const [showLikes, setShowLikes] = useState(likes)
    
    const renderGame = () => {
    return (
        <div className='game-container'>
        <h3>{title}</h3>
        <h4>genre: {genre}</h4>
        {/* <button onClick={likes + 1}>Like! {likes}</button> */}
        <p>Likes: {likes}</p>
        <button onClick={() => setShowEditForm(true)}>Edit</button>
        <button onClick={() => deleteGame(id)}>Delete{id}</button>
        
        </div>
    )
    // tried making a functional like button but ran out of time
    }
    return (
        <div>
            {!showEditForm && renderGame()}
            {showEditForm && <GameForm updateGame={updateGame} id={id} title={title} genre={genre}/>}
        </div>
    )
}
export default Game