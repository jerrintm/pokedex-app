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


for (let i = 0; i < pokemonList.length; i++) {   /* for loop to pull objects from the array. pokemonList.length will pull the length of the pokemonList array itself. */
    if (pokemonList[i].height > 9) {            /* checking height object from pokemonList array */
        document.write(pokemonList[i].name + "," + " " + "height:" + pokemonList[i].height + " - " + "Wow, that's big!" + "<br>");  /* writes output to the screen 'DOM', br adds a new line, details within double quotes are taken as a single string */
    }
    else

        document.write(pokemonList[i].name + "," + " " + "height:" + pokemonList[i].height);
    document.write("<br>");            /* this line can be ommitted by adding br to the above document.write line itself */
};




//alert('Hello world');               /* alert displays the text in a pop up */
//let favoriteFood = 'burger';
// document.write(favoriteFood);