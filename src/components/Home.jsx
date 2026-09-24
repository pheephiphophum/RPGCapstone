import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/stars.gif'
import "../styles/Home.css"

function Home(){

    return(
        <>
            <div className='homeScreen'>
                <div className='blackBox'>
                    <h1>They're Coming...</h1>
                    <h2>Can You Survive?</h2>
                    <p>An apocolypse survival, puzzle RPG Roguelike</p>
                    <Link to='/roomone'>
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