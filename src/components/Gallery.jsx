import Card from './Card'
import logements from '../assets/logement.json'



function Gallery() {
    return(
        <section className="gallery">
            {logements.map((logement) => (
                <Card 
                    key={logement.id}   
                    id={logement.id}    // Cle unique par element
                    title={logement.title}  // On récupère le vrai titre
                    cover={logement.cover}  // On récupère la vraie image
                />
            ))}
        </section>
    )
}

export default Gallery;