import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';


const AppRouter = () => {
    return (
        <BrowserRouter>

        <Header />


        <main>
        <Routes>
            {/* <Route element={<Layout />}> */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="logement/:id" element={<Logement />} />

                <Route path="*" element={<Error />} />

                {/* </Route> */}

            
            
        </Routes>

        </main>


        <Footer />
        </BrowserRouter>
    )
}

export default AppRouter

