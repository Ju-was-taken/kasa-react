import { Link } from 'react-router-dom';

function Error() {
    return(
        <main className="error">
            <h2>404</h2>
            <h3>Oups! La page que vous avez demandée n'existe pas.</h3>
            <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error;