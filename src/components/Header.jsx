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
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;