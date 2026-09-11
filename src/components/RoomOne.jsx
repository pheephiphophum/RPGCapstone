import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '../assets/download20260905131048.png'
import Background from '../assets/zombies-hands.png'
import '../styles/roomOne.css'
import { useEffect, useState } from 'react'
import Inventory from '../components/Inventory'
import VisibilityToggle from '../hooks/ToggleVisibility'



function Camp(){
    const { visibility, toggleVisibility } = VisibilityToggle()

    return(
        <>
            <img src={Background} className="bgImg"/>
            <div className='gameContainer'>
                <div className='subContainer'>
                    <div className='interactBox'>
                        <Inventory style={visibility}/>

                    </div>

                    <div className='statBox'>

                    </div>

                </div>
                <div className='buttonBox'>
                    <button onClick={toggleVisibility}>Inventory</button>
                    <button>Search</button>
                    <button>Loot</button>
                    <button>Map</button>
                    <button>Fight</button>
                </div>
            </div>
            
        </>
    )
}

export default Camp