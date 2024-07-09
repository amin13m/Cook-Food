
import {Link} from 'react-router-dom'
import Search from './search'

import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'><h1> food </h1></Link>
                <Search/>
                <Link to="/Create" className='cr'><h1> Create Recipe </h1></Link>
                
            </nav>
        </div>
    )
}
