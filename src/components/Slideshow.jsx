import { useState } from 'react';
import flecheGauche from '../assets/slide-left.png'
import flecheDroite from '../assets/slide-right.png'

function Slideshow ({ pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const hasMultiplePictures = pictures.length > 1;




    const nextImage = () => {
        if (currentIndex >= pictures.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }


    const previousImage = () => {
        if (currentIndex <= 0 ) {
            setCurrentIndex(pictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    return (
        <div className='slideshow'>
            <img
                src={pictures[currentIndex]}
                alt="image du logement"
                className='slideshow__image'
                />


                {hasMultiplePictures && (
                    <>
                    
                    <button onClick={previousImage} className='slideshow__arrow slideshow__arrow__left'>

                        <img src={flecheGauche} alt='Previous' />

                    </button>
                    <button onClick={nextImage} className='slideshow__arrow slideshow__arrow__right'>

                        <img src={flecheDroite} alt='Next' />
                        
                    </button>

                    <span className='slideshow__counter'>
                        {currentIndex + 1} / {pictures.length}
                    </span>
                    </>
                )}
        </div>
    )
}


export default Slideshow