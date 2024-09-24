//destructuring the objects


const movie = {
    actor: "vinodhini",
    music: "hari",
    director: "riyaan",
    producer: "abi"
};

const {music: myFavMusicDirector} = movie;
console.log(myFavMusicDirector)                             //hari


const cinema = {
    actor: "vinodhini",
    music: "hari",
    director: "riyaan",
    producer: "abi"
};

const {music: myFavMusicDi,director: myFavdi} = cinema;
console.log(myFavMusicDi,myFavdi)                           //hari riyaan




