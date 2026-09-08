import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Fart from '../assets/zombies-hands.png'
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
                
                <img src={Fart} className="bgImg"/>
                
            </div>
            
        </>
    )
}

export default Home