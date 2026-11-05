import Banner from '../components/Banner'; 
import Gallery from '../components/Gallery'
import BannerHome from '../assets/Banner.png';

function Home() {
    return (
        <div>
            <Banner image={BannerHome} text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    )
}

export default Home;