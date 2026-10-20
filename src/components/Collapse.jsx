import flecheHaut from '../assets/flecheHaut.png'
import flecheBas from '../assets/flecheBas.png'


import { useState } from 'react';

function Collapse( {title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='collapse'>

        <div className='collapse__header' onClick={() => setIsOpen(!isOpen)}>
            <h3>{title}</h3>
            <img src={ isOpen ? flecheBas : flecheHaut} alt="arrow" />
        </div>

        {isOpen && ( 
        <div className='collapse__content'>
            <p>{content}</p>
        </div>)}

        </div>
    )
}




export default Collapse;