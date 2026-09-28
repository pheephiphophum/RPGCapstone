import '../styles/map.css'
import { createPortal } from 'react-dom'

function Map({ children }){
    return createPortal(
        children,                      
        document.getElementById('map-modal-root')   
    )
}

export default Map


