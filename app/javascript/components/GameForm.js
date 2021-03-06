import React, {useState} from 'react'

const GameForm = (props) =>{
    const {postGame, updateGame, id} = props
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const Form = () => {
        const handleSubmit = (event) => {
            event.preventDefault()
            if(id){
            updateGame({title, genre}, id)
            setShowForm(false) 
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
                <button onClick={() => setShowForm(false)}>{id ? `edit` : 'add'}</button>
            </form>
        )}
    
    return (
        <div>
            
            {id ? Form() : <button type='button' onClick={() =>setShowForm(!showForm)}>{!showForm ? `New Game Form` : 'Hide Form'}</button>}
            {showForm && Form()}
        </div>
    )
}

export default GameForm