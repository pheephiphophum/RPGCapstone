import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Background from '../assets/GUI/stars.gif'
import Inventory from './InventoryPopup'
import VisibilityToggle from '../hooks/ToggleVisibility'
import Modal from '../hooks/Modals'
import MapHappy from '../assets/GUI/Map-happy.png'
import MapEvil from '../assets/GUI/Map-evil.png'
import MapDistressed from '../assets/GUI/Map-distressed.png'
import Map from './Map'
import SelectScene from '../hooks/SceneSelector'
import ImTheMap from '../assets/SFX/Im-the-map.mp3'
import ImTheMAAAAp from '../assets/SFX/Im-the-MAAAAp.mp3'
import TransitionSfx from '../assets/SFX/door-sfx.mp3'
import MedBayMap from '../assets/roomMaps/medbayMap.png'
import '../styles/spaceShip.css'


function SpaceShip(){
    const [isOpen, setIsOpen] = useState(false)
    const [mapImage, setMapImage] = useState(MapHappy)
    const [currentScene, setCurrentScene] = useState('medbay')
    const [mapSound, setMapSound] = useState(ImTheMAAAAp)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    
    const interactBoxRef = useRef(null)

    const mappy = new Audio(mapSound)
    
    let mapHover = false
    const TransitionSound = new Audio(TransitionSfx)
    
    useEffect(() => {   
        TransitionSound.play()
    }, [currentScene])
    
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

    const trackMouseMove = (event) => {
        if (!interactBoxRef.current) return

        const rect = interactBoxRef.current.getBoundingClientRect()

        setCoords({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        })
    }

    return(
        <>
            <Link to='/stars'>
                <img src={Background} className="bgImg"/>
            </Link>
            <div 
            className='interactBox'
            ref={interactBoxRef}
            onPointerMove={trackMouseMove}
            style={{
                cursor: 'crosshair'
            }}
            >
                <SelectScene  scene={currentScene} setScene={setCurrentScene}/>
                <img src={MedBayMap} className='medBayImg'/>

                <Modal open={isOpen}>
                    <Map />
                </Modal>
            </div>
            <div className='buttonBox'>
                <Inventory/>
                
                <img onClick={mapClick} onMouseOver={() => decideMapImage(true, isOpen)} onMouseLeave={() => decideMapImage(false, isOpen)} src={mapImage} className='mapButton'/>
            </div>
        </>
    )
}

export default SpaceShip