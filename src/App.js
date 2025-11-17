import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion'; // Ajout de l'Étape 4
import './App.css'; // Ajout de l'Étape 7

function App() {
    return (
        <div>
            {/* Ajout de l'Étape 7 */}
            <h1 className="titre">Mon Application React</h1>

            {/* Structure de l'Étape 3 */}
            <nav>
                <Link to="/">Accueil</Link> |{" "}
                <Link to="/apropos">À propos</Link>
            </nav>

            {/* Ajout de l'Étape 4 */}
            <Connexion />

            {/* Structure de l'Étape 3 */}
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Apropos />} />
            </Routes>
        </div>
    );
}

export default App;