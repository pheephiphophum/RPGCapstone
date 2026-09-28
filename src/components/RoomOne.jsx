import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '../assets/download20260905131048.png'
import Background from '../assets/stars.gif'
import '../styles/roomOne.css'
import { useEffect, useState } from 'react'
import Inventory from './InventoryPopup'
import VisibilityToggle from '../hooks/ToggleVisibility'
import Modal from '../hooks/Modals'
import MapHappy from '../assets/Map-happy.png'
import MapEvil from '../assets/Map-evil.png'
import MapDistressed from '../assets/Map-distressed.png'
import Map from './Map'



function Camp(){
    const [isOpen, setIsOpen] = useState(false)

    const [mapImage, setMapImage] = useState(MapHappy)
    let mapHover = false

    function mapClick(){
        setIsOpen(!isOpen)
        decideMapImage(true, !isOpen)
    }

    function decideMapImage(hover, open){
        mapHover = hover
        if(mapHover && !open){
            setMapImage(MapEvil)
        }else if(mapHover  && open){
            setMapImage(MapDistressed)
        }else {
            setMapImage(MapHappy)
        }
    }

    return(
        <>
            <Link to='/stars'>
                <img src={Background} className="bgImg"/>
            </Link>
            <div className='interactBox'>
                <Modal open={isOpen}>
                    <Map />
                </Modal>
                <p>HELLOOOO HELLOOO HELLLOOOOO</p>
            </div>
            <div className='buttonBox'>
                <Inventory/>
                
                <img onClick={mapClick} onMouseOver={() => decideMapImage(true, isOpen)} onMouseLeave={() => decideMapImage(false, isOpen)} src={mapImage} className='mapButton'/>
            </div>

        </>
    )
}

export default Camp