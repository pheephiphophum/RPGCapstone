import '../styles/map.css'
import spaceshipMap from '../assets/GUI/spaceshipMap3.png'


function Map({ children }){
    return (
        <div className='mapHolder'>
            <img src={spaceshipMap} className='mainMap'/>
        </div>
    )
}

export default Map


