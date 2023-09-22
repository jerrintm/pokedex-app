

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------XXXXXXXXX ------------------------------------------------------------------------------------------------- */

/*------------------ The below array declaration and definition has been moved to an IIFE - 'Immediately Invoke Function Expression', By wrapping all the global variables within an IIFE,  will help mask the array and ensures that they won’t conflict with any external code within an app, and accidently accessing a global variable  -------------*/
// let pokemonList = [];                 /* array declaration */
// pokemonList = [                       /* array definition */
//     {
//         name: 'Bulbasaur',                /* objects within an array */
//         height: 7,
//         types: ['poison', 'fire']         /* array as an object within array pokemonList */
//    },
//     {
//         name: 'Charmander',
//         height: 6,
//         types: ['fire', 'ice']
//     },
//     {
//         name: 'Fearow',
//         height: 10,
//         types: ['bug', 'grass']
//     }
// 
//  ];


let pokemonRepository = (function () {                           /* variable 'pokemonRepository' is the IIFE  */

    //    let pokemonList = []; // empty array

    let pokemonList = [];                 /* array declaration */
    pokemonList = [                       /* array definition */
        {
            name: 'Bulbasaur',                /* objects within an array */
            height: 7,
            types: ['poison', 'fire']         /* array as an object within array pokemonList */
        },
        {
            name: 'Charmander',
            height: 6,
            types: ['fire', 'ice']
        },
        {
            name: 'Fearow',
            height: 10,
            types: ['bug', 'grass']
        }

    ];


    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());

/* -------------------The above array pokemonList has been masked using IIFE variable as seen above using the IIFE variable 'pokemonRepository'  --------------------- */



/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------XXXXXXXXX ------------------------------------------------------------------------------------------------- */





/*   .....................................  The below for loop code was replaced with the foreach() which does the same job ..................................       */

//for (let i = 0; i < pokemonList.length; i++) {   /* for loop to pull objects from the array. pokemonList.length will pull the length of the pokemonList array itself. */
//if (pokemonList[i].height > 9) {            /* checking height object from pokemonList array */
//    document.write(pokemonList[i].name + "," + " " + "height:" + pokemonList[i].height + " - " + "Wow, that's big!" + "<br>");  /* writes output to the screen 'DOM', br adds a new line, details within double quotes are taken as a single string */
//}
//else

//    document.write(pokemonList[i].name + "," + " " + "height:" + pokemonList[i].height);
//document.write("<br>");            /* this line can be ommitted by adding br to the above document.write line itself */
//};


/*  .......................................  The below foreach() replaces the above forloop code serving the same outcome  ....................................      */




/* -------------------------Below code change was added to use the IIFE vafriable pokemonRepository to call the array 'pokemonList' using foreach()---------------------------        */

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height >= 9) {
        document.write(pokemon.name + " " + "(Height:" + " " + pokemon.height + ") - Wow! that is a big pokemon! " + "<br>");
    } else if (pokemon.height) {
        document.write(pokemon.name + " " + "(Height:" + " " + pokemon.height + "<br>")
    }
});



//pokemonList.forEach(function (item, index) {         /* the foreach() is used to iterate through each element in the array, it returns the array element and array index. Here since there is are array of objects, 'item' will return each element, the 'index' value is used to reference each object within the array. The function is used within foreach to send pull the array values from the pokemonList array  */
//    if (pokemonList[index].height > 9) {            /* checking height object from pokemonList array */
//        document.write(pokemonList[index].name + "," + " " + "height:" + pokemonList[index].height + " - " + "Wow, that's big!" + "<br>");  /* writes output to the screen 'DOM', br adds a new line, details within double quotes are taken as a single string */
//    }
//    else

//        document.write(pokemonList[index].name + "," + " " + "height:" + pokemonList[index].height);
//    document.write("<br>");            /* this line can be ommitted by adding br to the above document.write line itself */


// })

/* -------------------------Above  code change was added to use the IIFE vafriable pokemonRepository to call the array 'pokemonList' , replacing just the array calling foreach()---------------------------        */




/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- XXXXXXXXXXXXX------------------------------------------------------------------------------------------------- */








//alert('Hello world');               /* alert displays the text in a pop up */
//let favoriteFood = 'burger';
// document.write(favoriteFood);