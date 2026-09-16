import '../styles/map.css'
import { createPortal } from 'react-dom'

function Map({ children }){
    return createPortal(
        children,                      // what to render
        document.getElementById('map-modal-root')   // where to put it
    )
}

export default Map


