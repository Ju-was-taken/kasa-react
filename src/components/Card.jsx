import { Link } from 'react-router-dom';

function Card({ id, title, cover}) {
    return (
    <Link to={`/logement/${id}`}>
        <article className="card">
            <img src={cover} alt={title} className="card__img" />
            <h3 className="card__title">{title}</h3>
        </article>
        </Link>
    )
}

export default Card;