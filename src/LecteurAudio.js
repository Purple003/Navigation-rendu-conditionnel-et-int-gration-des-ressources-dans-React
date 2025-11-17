import son from './audio.mp3'; // Assurez-vous d'avoir ce fichier

function LecteurAudio() {
    return <audio controls src={son}></audio>;
}

export default LecteurAudio;