import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '../assets/download20260905131048.png'
import Background from '../assets/stars.gif'
import '../styles/roomOne.css'
import { useEffect, useState } from 'react'
import Inventory from './InventoryPopup'
import VisibilityToggle from '../hooks/ToggleVisibility'
import Modal from '../hooks/Modals'



function Camp(){
    const [isOpen, toggleModal] = useState(false)

    return(
        <>
            <Link to='/stars'>
                <img src={Background} className="bgImg"/>
            </Link>
            <div className='interactBox'>
                <p>HELLOOOO HELLOOO HELLLOOOOO</p>
            </div>
            <div className='buttonBox'>
                <button onClick={() => toggleModal(!isOpen)}>Inventory</button>
                    <Modal open={isOpen} >
                        <Inventory/>
                    </Modal>
                <button>Search</button>
                <button>Loot</button>
                <button>Map</button>
                <button>Fight</button>
            </div>

        </>
    )
}

export default Camp