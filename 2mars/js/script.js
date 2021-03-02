/* 
Fonctions
*/
    const fetchRequest = url => {
        // Renvoyer une promesse
        return new Promise( ( resolve, reject ) => {
            // Capter un flux JSON (API)
            fetch(url)
            .then( response => {
                // Vérifier si la réponse est OK
                if( response.ok === false ){ 
                    // Rejeter l'erreur
                    return reject(response);
                }
                else{
                    // Renvoyer les données JSON de la réponse
                    return response.json();
                }
            })
            .then( data => {
                // Résoudre la donnée
                return resolve(data);
            })
            .catch( error => {
                // Rejeter l'erreur
                return reject(error);
            })
        })
    }

    const displayNavigation = ( tag, data ) => {
        // Faire une boucle sur la collection de données (tableau d'objets Javascript)
        for( let item of data ){
            // Générer les balises de la navigation
            document.querySelector(tag).innerHTML += `
                <li>
                    <a href="${item.content}">${item.name}</a>
                </li>
            `;
        }

        /* 
        Capter le click sur les liens de la nav
        */
            const navLinks = document.querySelectorAll('nav a');
            
            for( let item of navLinks ){
                item.addEventListener('click', event => {
                    // Bloquer le comportement par défaut de la balise A
                    event.preventDefault();

                    // Afficher dans le DOM les bonnes balises HTML
                    displayPage(item.getAttribute('href'));

                    // Masquer le burger menu
                    document.querySelector(tag).classList.remove('displayed');
                })
            }
        //

        // Charger le contenu de la home
        displayPage('home');
    }

    const displayPage = type => {
        // Réutiliser la fonction fetchRequest sur la bonne URL
        fetchRequest(`/data/${type}.json`)
        .then( jsonContent => {
            // Afficher le contenu de la page home dans la balise MAIN
            if( type === 'home' ){
                document.querySelector('main').innerHTML = `
                    <h1>${jsonContent.title}</h1>
                    <img src="${jsonContent.cover}" alt="${jsonContent.title}">
                    <p>${jsonContent.content}</p>
                `;
            }
            else if( type === 'contact' ){
                document.querySelector('main').innerHTML = `
                    <h1>${jsonContent.title}</h1>
                    <img src="${jsonContent.cover}" alt="${jsonContent.title}">
                    <p>${jsonContent.content}</p>
                    <p>Contactez moi : <a href="mailto:${jsonContent.data}">${jsonContent.data}</a></p>
                `;
            }
            else{
                document.querySelector('main').innerHTML = `
                    <h1>${jsonContent.title}</h1>
                    <img src="${jsonContent.cover}" alt="${jsonContent.title}">
                    <p>${jsonContent.content}</p>
                `;

                // Afficher le portfolio
                let portfolioList = '<ul>';
                for( let item of jsonContent.data ){
                    portfolioList += `
                        <li>
                            <h2>${item.name}</h2>
                            <p>${item.description}</p>
                            <a href="${item.url}" target="_blank">Voir le projet</a>
                        </li>
                    `
                };
                portfolioList += '</ul>';

                document.querySelector('main').innerHTML += portfolioList;
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    const menuInteraction = (tagBtn, tagNav) => {
        // Capter le click sur le bouton #burgerBtn
        document.querySelector(tagBtn).addEventListener('click', () => {
            document.querySelector(tagNav).classList.toggle('displayed')
        })
    }
//

/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        // Utiliser une fonction renvoyant une promesse
        fetchRequest('data/nav.json')
        .then( data => {
            // Générer la navigation
            displayNavigation('#mainNavigation', data);

            // Lancer le burger menu
            menuInteraction("#burgerBtn", '#mainNavigation');
        })
        .catch( error => {
            console.log(error)
        })
    });
//