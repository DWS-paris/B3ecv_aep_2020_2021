/* 
Attendre le chargement du DOM
*/  
    document.addEventListener('DOMContentLoaded', () => {
        // Déclarations
        let selector = document.querySelector('select');
        let bodyTag = document.querySelector('body');
        let articles = document.querySelectorAll('article');

        /* 
        Gestion du local storage "color"
        - Créer une variable "localColor" qui récupére la valeur du local storage "color"
        - Si la valeur de "localColor" est égale à null, ne rien faire
        - Si la valeur de "localColor" est différente de null, afficher la bonne couleur
            - Utiliser la valeur de "localColor" pour la classe du body
            - Utiliser la valeur de "localColor" pour sélectionner la bonne ID sur l'article pour y ajouter la classes "display"
        */

        let localColor = localStorage.getItem('color');

        if( localColor !== null ){
            console.log(localColor)
            bodyTag.classList.add(localColor);
            document.querySelector("#" + localColor).classList.add('display');
        }

        // Créer une fonction pour masquer toutes les couleurs
        const hideColors = () => {
            // Supprimer toutes les classes du body
            bodyTag.classList.remove('green', 'yellow', 'red', 'blue');

            // Supprimer la classe display de tous les articles
            for( let article of articles ){ article.classList.remove('display') }

            // Supprimer le local storage
            localStorage.clear();
        }

        // Capter le changement de valeur du selector
        selector.addEventListener('change', event => {
            // Masquer toutes couleurs
            hideColors();

            // Ajouter la classe dans le body
            bodyTag.classList.add(event.target.value);

            // Sélectionner la bonne ID pour y ajouter la classe display
            document.querySelector("#" + event.target.value).classList.add('display');

            // Ajouter la valeur de event.target.value dans le local storage "color" (localStorage.setItem()
            localStorage.setItem('color', event.target.value);
        })
    });
//