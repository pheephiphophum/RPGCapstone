import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileIcon from '../assets/download20260905131048.png'
import Background from '../assets/stars.gif'
import '../styles/spaceShip.css'
import Inventory from './InventoryPopup'
import VisibilityToggle from '../hooks/ToggleVisibility'
import Modal from '../hooks/Modals'
import MapHappy from '../assets/Map-happy.png'
import MapEvil from '../assets/Map-evil.png'
import MapDistressed from '../assets/Map-distressed.png'
import Map from './Map'
import SelectScene from '../hooks/SceneSelector'
import ImTheMap from '../assets/Im-the-map.mp3'
import ImTheMAAAAp from '../assets/Im-the-MAAAAp.mp3'



function SpaceShip(){
    const [isOpen, setIsOpen] = useState(false)

    const [mapImage, setMapImage] = useState(MapHappy)

    const [currentScene, setCurrentScene] = useState('medbay')

    const [mapSound, setMapSound] = useState(ImTheMAAAAp)

    const mappy = new Audio(mapSound)

    let mapHover = false

    function mapClick(){
        mappy.play()
        setIsOpen(!isOpen)
        decideMapImage(true, !isOpen)
        mapSound == ImTheMAAAAp ? setMapSound(ImTheMap) : setMapSound(ImTheMAAAAp)
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
                <SelectScene scene={currentScene} setScene={setCurrentScene}/>
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

export default SpaceShip