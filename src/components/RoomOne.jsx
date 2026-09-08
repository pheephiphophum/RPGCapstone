import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '../assets/download20260905131048.png'
import Background from '../assets/zombies-hands.png'
import '../styles/roomOne.css'

function Camp(){

    return(
        <>
            <img src={Background} className="bgImg"/>
            <div className='gameBorder'>

            </div>
            <div className='interactBox'>

            </div>
            <div className='statBox'>

            </div>
            <div className='buttonBox'>
                <button>Inventory</button>
                <button>Search</button>
                <button>Loot</button>
                <button>Map</button>
                <button>Fight</button>
            </div>
        </>
    )
}

export default Camp