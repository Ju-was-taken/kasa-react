


function Banner({ image , text }) {
    return(
        <div className="banner">
            <div className='banner__overlay'></div>
            { text && <h2 className="banner__title">{text}</h2>}
            <img className='banner__img' src={image} alt="Banner" />
        </div>
    )
}


export default Banner