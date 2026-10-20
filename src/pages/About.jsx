import Collapse from "../components/Collapse";
import Banner from '../components/Banner'



function About() {
    return(
        <div className="about">
    


            <Banner  />

<div className="about-collapse">
        <Collapse content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes" title="Fiabilité"/>
  <Collapse content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme" title="Respect"/>
  <Collapse content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." title="Service"/>
  <Collapse content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de verifier que les standards sont bien respecté. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." title="Sécurité"/>
</div>
        </div>
    )
}



export default About;