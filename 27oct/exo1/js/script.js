/* 
Utilisation de la console
*/
    console.log("Hello World");
//

/* 
Déclaration de variables
*/
    var myString = "Julien";
    var myNumber = 41;
    var myStringNumber = "41";
    var myFloat = 33.333;
    var myArray = [ "Noyer", 54, 21.78, myString, [ myStringNumber, myFloat ] ];

    var myTitle = document.querySelector("h1");

    console.log( myString, myNumber, myStringNumber, myFloat, myArray, myTitle );

    console.log(myTitle);
    console.log(myArray);
    console.log(myArray.length);
//

/* 
Ecouter un événement sur une balise HTML
*/
    myTitle.addEventListener("click", function(){
        alert("Click sur le titre");
    });
//