import { Link, useNavigate } from 'react-router-dom'

function Navbar(){


    const navigate = useNavigate()

    return(
        <div>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/roomone'>
                <button>Start</button>
            </Link>
            <button onClick={() => useNavigate(-1)}>Back</button>
        </div>
    )
}

export default Navbar