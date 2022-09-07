//single show page 
import {getAlbSing, deleteAlbSing} from '../services/alb.api'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function AlbSing() {
    const nav = useNavigate()
    const {id} = useParams()
    const [alb, setAlb] = useState({})
    useEffect(() => {getAlbSing(id)
    .then(res => setAlb(res.data))
} , [])

//delte 
const deleteTheAlbSing = () => {
    deleteAlbSing(id) //service in todos-app
    nav('/') //take us back to home page
}
    return (
        <div>
            <h1> Show </h1>
            <h3> {alb.albWord} </h3>
            Understood: <input type='checkbox' checked={alb.understood} />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheAlbSing}>Delete</button>
        </div>
    )
}

export default AlbSing 