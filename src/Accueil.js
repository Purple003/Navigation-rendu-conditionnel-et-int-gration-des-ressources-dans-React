import ListeTaches from './ListeTaches'; // Import de l'étape 5
import Logo from './Logo'; // Import de l'étape 6
import LecteurAudio from './LecteurAudio'; // Import de l'étape 6

function Accueil() {
    return (
        <div>
            <h2>Page d’accueil</h2>

            {/* Ajout de l'étape 6 */}
            <Logo />
            <LecteurAudio />

            {/* Ajout de l'étape 5 */}
            <ListeTaches />
        </div>
    );
}

export default Accueil;