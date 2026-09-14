import { useState } from 'react'
import { createEditCoconuts } from '../services/apiCoconuts'
import '../styles/roomOne.css'
import '../styles/statBox.css'




function Stats(  ){


const data = useState([{
    name: "Survivor",
    health: 10,
    attack: 5,
    defense: 2,
    level: 1
}])



    return(
        <>
            <div>
                <button onClick={() => createEditCoconuts(data)}>Edit</button>
            </div>
        </>
    )
}

export default Stats