import { useParams, Navigate } from 'react-router-dom';
import logements from '../assets/logement.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import starEmpty from '../assets/starEmpty.png';
import starFull from '../assets/starFull.png';

function Logement() {
    const { id } = useParams();

    const logementActuel = logements.find((logement) => logement.id === id);

    if (!logementActuel) {
        return <Navigate to='/Error' />
    }

    const etoiles = [1, 2, 3, 4, 5]
    const [firstName, lastName] = logementActuel.host.name.split(' ');

    return (
        <div className="logement-page">
            <Slideshow pictures={logementActuel.pictures} />

            
            <div className="logement-header">
                
                
                <div className="logement-header__left">
                    <div>
                        <h1>{logementActuel.title}</h1>
                        <p>{logementActuel.location}</p>
                    </div>

                    <div className='logement-tag'>
                        {logementActuel.tags.map((tag) => (
                            <div className='tag' key={tag}>{tag}</div>
                        ))}
                    </div>
                </div>

                
                <div className="logement-header__right">
                    <div className='logement-host'>
                       <p>
                       {firstName}
                            <br />
                     {lastName}
                          </p>
                        <img src={logementActuel.host.picture} alt="" />
                    </div>

<div className='logement-rating'>
    {etoiles.map((star) => (
        <img 
            key={star} 
            src={star <= logementActuel.rating ? starFull : starEmpty} 
            alt={star <= logementActuel.rating ? "Étoile pleine" : "Étoile vide"}
            className="star-icon"
        />
    ))}
</div>
                </div>

            </div>
           

            <div className='logement-collapse'>
                <Collapse content={logementActuel.description} title="Description"/>
                <Collapse content={logementActuel.equipments.map((equipement) =>
                <p key={equipement}>{equipement}</p> )} title="Equipement"/>
            </div>
        </div>
    );
}

export default Logement;