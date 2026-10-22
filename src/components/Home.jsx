import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/GUI/stars.gif'
import "../styles/Home.css"

function Home(){

    return(
        <>
            <div className='homeScreen'>
                <div className='blackBox'>
                    <h1>Can you escape ?</h1>
                    <h2>Or will you be.. probed</h2>
                    <p>A space-themed point and click puzzle RPG escape room</p>
                    <Link to='/spaceship'>
                        <button className='button'>START</button>
                    </Link>
                </div>
                <Link to='/stars'>
                    <img src={Background} className="bgImg"/>
                </Link>
                
                
            </div>
            
        </>
    )
}

export default Home