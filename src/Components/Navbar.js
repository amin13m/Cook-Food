
import {Link} from 'react-router-dom'
import Search from './search'

import "./Navbar.css"
import { useTheme } from '../Hooks/useTheme'


export default function Navbar() {

    const {color , changeColor } = useTheme()

    return (
        <div className='navbar' style={{backgroundColor:color}}>
            <nav>
                
                <Link to="/" className='brand'><h1>Cook Food </h1></Link>
                <Search/>
                <Link to="/Create" className='cr'><h1> Create Recipe </h1></Link>
                
            </nav>
        </div>
    )
}
