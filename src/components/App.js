import '../App.css';
import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom';
import '@tailwindplus/elements';

import Accueil from './Accueil';
import About from './About';
import Btssio from './Btssio';
import Epreuvee5 from './Epreuvee5';
import Epreuvee6 from './Epreuvee6';
import Veille from './Veille';
import Contact from './Contact';
import VantaBackground from "./VantaBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <VantaBackground />

            <div style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Navbar />

                <main style={{
                    flex: 1,
                    width: '100%',
                    marginBottom: '0'
                }}>
                    <div style={{ minHeight: '95vh', paddingBottom: '10rem' }}>
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/btssio" element={<Btssio />} />
                            <Route path="/epreuveE5" element={<Epreuvee5 />} />
                            <Route path="/epreuveE6" element={<Epreuvee6 />} />
                            <Route path="/veille" element={<Veille />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;