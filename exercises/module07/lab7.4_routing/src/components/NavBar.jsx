import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return(
        <nav className="NavBar">
            <ul className='menu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/rates'>Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}