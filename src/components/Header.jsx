import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function Header() {
    return(
        <header className="header">
            <h1 className="header__logo">
                <img className="header__img" src={logo} alt="Kasa" />
            </h1>
            <nav className="header__nav">
                <ul>
                    <li>
                        <NavLink to="/" className="header__link">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="header__link">A propos</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;