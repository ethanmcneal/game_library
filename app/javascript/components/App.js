import React, {useState} from 'react'
import Games from './Games'
import GameForm from './GameForm'
import axios from 'axios'

const App = () => {
    const[games, setGames] = useState([])

    const postGame = async (gameObj) => {
        try {
            let response = await axios.post('/games', {...gameObj, likes: 0})

            setGames([response.data, ...games])
        } catch(err) {
            console.log(err)
        }
    }


    const getGames = async () =>{
        try {
            let response = await axios.get('/games')
            setGames(response.data)
        } catch(err) {
        console.log(err)
        }
    }

    // const likeButton = async (obj, id) => {
    //     try {
    //         let response = await axios.put(`/games/${id}`, obj)
    //         let likeGame = games.map(g => g.id !== id ? g : response.data)
    //         setGames(likeGame)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    const deleteGame = async (id) =>{
        console.log('delete clicked on game with id:', id)
        try {
            await axios.delete(`/games/${id}`)
            let filterGames = games.filter(game => game.id !== id)
            setGames(filterGames)
        } catch(error) {
            console.log(error)

        }
    }

    const updateGame = async (obj, id) => {
        try {
            let response = await axios.put(`/games/${id}`, obj)
            let updateGames = games.map(game => game.id !== id ? game : response.data)
            setGames(updateGames)
        } catch(error) {
            console.log('u suck')
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Game Library</h1>
            <GameForm postGame={postGame}/>
            <button onClick={getGames}>Show Games</button>
            <Games games={games} deleteGame={deleteGame} updateGame={updateGame} />
        </div>
    )
}


export default App