import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout'
import Logement from './pages/Logement';
import Error from './pages/Error';


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="logement/:id" element={<Logement />} />

                <Route path="*" element={<Error />} />

                </Route>

            
            
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

