import { getAlbSing, editAlbSing} from '../services/alb.api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const nav = useNavigate()
    
    useEffect(() => {
        getAlbSing(id) // get the word that matches this id
        .then(res => setData(res.data)) //updating the statw
    },[]) //[] prevent a continious loop

    const editTheAlbSing = (e) => {
        e.preventDefault()
        const updatedAlbSing = {albWord: e.target.albWord.value, complete: e.target.understood.checked}
        editAlbSing(id, updatedAlbSing)
        nav(`/${id}`)
    }
    return (
        <div> 
            <form onSubmit={editTheAlbSing}>
                <input type='text' name='albWord' defaultValue={data.albWord} />
                Complete: <input type='checkbox' name='understood'
                defaultChecked={data.understood} />
                <input type='submit' />
            </form>

        </div>
    )
}

export default Edit