/* 
Attendre le chargement du DOM
*/  
    document.addEventListener('DOMContentLoaded', () => {
        // Déclarations
        let selector = document.querySelector('select');
        let bodyTag = document.querySelector('body');
        let articles = document.querySelectorAll('article');

        // Créer une fonction pour masquer toutes les couleurs
        const hideColors = () => {
            // Supprimer toutes les classes du body
            bodyTag.classList.remove('green', 'yellow', 'red', 'blue');

            // Supprimer la classe display de tous les articles
            for( let article of articles ){ article.classList.remove('display') }
        }

        // Capter le changement de valeur du selector
        selector.addEventListener('change', event => {
            // Masquer toutes couleurs
            hideColors();

            // Ajouter la classe dans le body
            bodyTag.classList.add(event.target.value);

            // Sélectionner la bonne ID pour y ajouter la classe display
            document.querySelector("#" + event.target.value).classList.add('display');
        })
    });
//