/* 
Déclarations
*/
    var myArray = [ 2, 5, 18, 39, 45, 62, 124, 765, 82379, 24, 2837927 ];
    console.log( myArray );
    //console.log( myArray.length );
    //console.log( myArray[2] );
//

/* 
Exécuter une boucle for()
*/
    for( var i = 0; i < myArray.length; i++ ){
        // Afficher la valeur de l'index i du tableau
        //console.log( myArray[i] );
    };
//
/* 
Exécuter une boucle for... of
*/
    for( var item of myArray ){
        // Afficher la valeur de l'item
        console.log(item);

        // Effectuer une condition
        if( item % 2 == 0 ){
            console.log(item, "=> paire");
        }
        else{
            console.log(item, "=> impaire", item % 2);
        };
    };
//