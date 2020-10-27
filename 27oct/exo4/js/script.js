/* 
Déclarations
*/
    var myForm = document.querySelector("form");
    var userName = document.querySelector("#userName");
    var vowels = [ "a", "e", "i", "o", "u", "y" ];

    console.log( myForm );
    console.log( userName );
//

/* 
Ecouter l'événement submit du formulaire
*/
    myForm.addEventListener( "submit", function(event){
        // Bloquer le comportement par defaut de lévénement submit
        event.preventDefault();

        var vowelsNumber = 0;
        var consonantsNumber = 0;

        // Récupérer la valeur de l'input
        var nameValue = userName.value;

        // Faire une boucle pour récupérer chaque lettre de la valeur
        for( var letter of nameValue ){
            // Vérifier la lettre
            if( vowels.indexOf(letter.toLowerCase()) == -1 ){
                console.log(letter, "consonne");
                consonantsNumber++;
            }
            else{
                console.log(letter, "voyelle");
                vowelsNumber++;
            };
        };

        console.log("Nombre de voyelles", vowelsNumber);
        console.log("Nombre de consonnes", consonantsNumber);
    });
//