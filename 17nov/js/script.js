/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', function(){

        console.log('Le DOM (document HTML) est chargé');

        // Créer des variables contenant les balises #home, #portfolio, #contacts et #image
        var home = document.querySelector('#home');
        var portfolio = document.querySelector('#portfolio');
        var contacts = document.querySelector('#contacts');
        var image = document.querySelector('#image');

        // console.log(home, portfolio, contacts, image);

        // Créer une variable contenant toutes les balises <a> de la <nav> sous la forme d'un tableau
        var navLinks = document.querySelectorAll('nav a');

        // console.log(navLinks);

        // Créer une variable contenant toutes les balises <a> de #portfolio sous la forme d'un tableau
        var portfolioLinks = document.querySelectorAll('#portfolio a');

        // console.log(portfolioLinks);

        // Faire une boucle sur le tableau navLinks
        for (var i = 0; i < navLinks.length; i++) {
            // Capter le clic sur chaque balise <a> de la <nav>
            navLinks[i].addEventListener('click', function( event ){
                // Bloquer le comportement par default de la balise <a>
                event.preventDefault();

                // La variable this correspond à navLinks[i]
                // console.log(this.getAttribute('data-link'));

                // Afficher la bonne section selon la valeur de l'attribut data-link
                if( this.getAttribute('data-link') === 'portfolio' ){
                    // Supprimer la class .hidden de portfolio
                    portfolio.classList.remove('hidden');

                    // Masquer les autres sections
                    home.classList.add('hidden');
                    contacts.classList.add('hidden');
                    image.classList.add('hidden');
                }
                else if( this.getAttribute('data-link') === 'contacts' ){
                    // Supprimer la class .hidden de contacts
                    contacts.classList.remove('hidden');

                    // Masquer les autres sections
                    home.classList.add('hidden');
                    portfolio.classList.add('hidden');
                    image.classList.add('hidden');
                }
                else{
                    // Supprimer la class .hidden de home
                    home.classList.remove('hidden');

                    // Masquer les autres sections
                    portfolio.classList.add('hidden');
                    contacts.classList.add('hidden');
                    image.classList.add('hidden');
                };
            })
        };

        // Faire une boucle sur le tableau portfolioLinks
        for (var i = 0; i < portfolioLinks.length; i++){
            // Capter le clic sur chaque balise <a> de #portfolio
            portfolioLinks[i].addEventListener('click', function( event ){
                // Bloquer le comportement par default de la balise <a>
                event.preventDefault();

                console.log(this)

                // Modifier le contenu HTML de image
                image.innerHTML = `
                    <h2>${this.getAttribute('data-title')}</h2>
                    <img src="${this.getAttribute('data-file')}" alt="${this.getAttribute('data-title')}">
                `;

                // Masquer portfolio et afficher image
                portfolio.classList.add('hidden');
                image.classList.remove('hidden');
            })
        };
    });
//