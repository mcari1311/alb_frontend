import { useNavigate } from "react-router-dom"
import { createAlbSing } from '../services/alb.api'

function Create() {
    const nav = useNavigate()

    const createTheAlbSing = e => {
        const albSing = {albWord: e.target.albWord.value, understood:false}
        createAlbSing(albSing)
        nav('/')
    }



    return(
        <div>
            <h1> Create a new Word!</h1>
            <form onSubmit={createTheAlbSing}>
                <input type='text' name='albWord' id='dsc' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create