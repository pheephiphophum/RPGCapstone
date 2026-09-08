import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/zombies-hands.png'
import "../styles/Home.css"

function Home(){

    return(
        <>
            <div className='homeScreen'>
                <h1>They're Coming...</h1>
                <h2>Can You Survive?</h2>
                <p>An apocolypse survival, puzzle RPG Roguelike</p>
                <img src={Background} className="bgImg"/>
                <Link to='/roomone'>
                    <button className='button'>START</button>
                </Link>
            </div>
            <div className='blackBox'>
                <p>don't mind me I'm just a box back here teehee nothing to see</p>
            </div>
        </>
    )
}

export default Home