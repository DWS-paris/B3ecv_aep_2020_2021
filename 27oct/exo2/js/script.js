/* 
Déclarations
*/
    // Créer une variable pour le bouton
    var myBtn = document.querySelector("#myBtn");

    // Créer une variable pour le body
    var myBody = document.querySelector("body");

    console.log( myBtn );
    console.log( myBody );
//

/* 
Ecouter l'événement clic sur le bouton
*/
    myBtn.addEventListener( "click", function(){ 
        // Changer le style background-color du body
        myBody.style.background = "red";
    });
//