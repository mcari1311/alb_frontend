import {getAlb} from '../services/alb.api'
import {useState, useEffect} from 'react'
import Create from './Create'

export default function Alb() {
    const [alb, setAlb] = useState([])
    useEffect(() => {
        getAlb()
        .then(res => setAlb(res.data))
    }, [])
    console.log(alb)
    return(
    <div>
        <ul>
            {alb.map((alb) => {
                return (<li><a href={`/${alb._id}`}>{alb.albWord} {alb.engWord}</a>
    </li>
   
    )
    })}
    
    </ul>
    <Create />
    
    
    </div>
    )
}


//testing