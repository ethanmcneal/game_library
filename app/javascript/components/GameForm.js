import React, {useState} from 'react'

const GameForm = (props) =>{
    const {postGame, updateGame, id, title:initTitle, genre:initGenre} = props
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState(initTitle ? initTitle : '')
    const [genre, setGenre] = useState(initGenre ? initGenre : '')
    const [showEditForm, setShowEditForm] = useState(true)
    // TODO fix the edit form
    // I am having a hard time making it so when I click edit the edited game appears back in the list instead of having to hit the show games again,

    const Form = () => {
        const handleSubmit = (event) => {
            event.preventDefault()
            if(id){
            updateGame({title, genre}, id)
            setShowEditForm(false) 
            }
            else {
            postGame({title, genre})}

            setTitle('')
            setGenre('')            
        }

        
        return (
            <form onSubmit={handleSubmit}>
                <p>Game Title</p>
                <input value={title} onChange={(event) => setTitle(event.target.value)} />
                <p>Game Genre</p>
                <input value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button>{id ? `edit` : 'add'}</button>
            </form>
        )}
    
    return (
        <div>
            
            {id ? showEditForm && Form() : <button type='button' onClick={() =>setShowForm(!showForm)}>{!showForm ? `New Game Form` : 'Hide Form'}</button>}
            {/* THis is a very long line and probably should be split into a few lines but idk the best syntax to do that when working in a div */}
            {showForm && Form()}
        </div>
    )
}

export default GameForm