import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- 1. Changer l'import
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// 2. Créer la "racine" de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Utiliser root.render pour afficher l'application
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);