import Background from '../assets/GUI/stars.gif'
import { Link } from 'react-router-dom'
import '../styles/stars.css'


function Stars(){
    return(
        <>
            <img src={Background} className="bgImg"/>
            <Link to='/spaceship'>
                <div className='returnStar'></div>
            </Link>
        </>
    )
}

export default Stars