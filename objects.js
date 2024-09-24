//objects

const movie = {
    actor: "vinodhini",
    music: "hari",
    director: "riyaan",
    producer: "abi"
};

console.log(Object.keys (movie));

//[ 'actor', 'music', 'director', 'producer' ]


const cinema = {
    actor: "vinodhini",
    music: "hari",
    director: "riyaan",
    producer: "abi" 
};

console.log(Object.values (cinema));

//[ 'vinodhini', 'hari', 'riyaan', 'abi' ]


const channel ={
    actor: "vinodhini",
    music: "hari",
    director: "riyaan",
    producer: "abi" 
};

console.log(channel.hasOwnProperty("producer"));

console.log(Object.values(channel));


for (let job in channel){
    console.log(`${job},it's ${channel[job]}`);

}

/*actor,it's vinodhini
music,it's hari
director,it's riyaan
producer,it's abi */






