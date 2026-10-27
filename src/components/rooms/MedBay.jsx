import '../../styles/roomStyles.css'
import MedBayMap from '../../assets/roomMaps/medbayMap.png'

function MedBay({setScene}){



    return(
        <>
            <div onClick={() => setScene('hallway4')} className='mapBox'>
                <img src={MedBayMap} className='medBayImg'/>
            </div>
        </>
    )
}

export default MedBay