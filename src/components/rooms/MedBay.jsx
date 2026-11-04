import '../../styles/roomStyles.css'
import MedBayMap from '../../assets/roomMaps/medbayMap.png'

function MedBay({setScene}){



    return(
        <>
            <div className='mapBox'>
                <img src={MedBayMap} className='medBayImg'/>
            </div>

            <div onClick={() => setScene('broomcloset')} className='doorClicky'>

            </div>
        </>
    )
}

export default MedBay