import bannerImg from '../assets/Banner.png'


function Banner() {
    return(
        <div className="banner">
            <div className='banner__overlay'></div>
            <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
            <img className='banner__img' src={bannerImg} alt="Banner" />
        </div>
    )
}


export default Banner