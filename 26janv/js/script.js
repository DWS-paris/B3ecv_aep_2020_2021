/* 
Attendre le chargement des balises HTML (DOM)
*/
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Le DOM est chagé');

        /* 
        Gestion du burger menu
        - Capter le clic sur le bouton du burger menu
        - Une fois le clic capté, ajouter ou supprimer la classe "open" du menu pour l'afficher ou le masquer
        */

        // Créer deux variables : 1 pour le bouton du burger menu et 1 pour le menu
        const burgerButton = document.querySelector('#mainNav button');
        const burgerIcon = document.querySelector('#mainNav button i');
        const burgerMenu = document.querySelector('#mainNav ul');
        let burgerIsOpen = false;

        console.log(burgerButton, burgerMenu, burgerIcon);

        // Capter le clic sur le bouton du burger menu
        burgerButton.addEventListener('click', () => {
            console.log('click', burgerIsOpen);

            // Ajouter ou supprimer la classe "open" du menu pour l'afficher ou le masquer
            burgerMenu.classList.toggle('open');

            // Modifier l'icone du burger menu selon la valuer de burgIsOpen
            if( burgerIsOpen === false ){
                burgerIcon.classList.replace('fa-bars', 'fa-times');
            }
            else{
                burgerIcon.classList.replace('fa-times', 'fa-bars');
            };

            // Inverse la valeur de burgerIsOpen
            burgerIsOpen = !burgerIsOpen;
        });
    });
//