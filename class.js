const myPizza ={
    size: "medium",
    crust: "original",
    bake: function() {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.bake();       //Baking a medium original crust pizza.


//----------//

class pizza {
    constructor(){
        this.size = "medium";
        this.crust = "original";
     }
     bake() {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    
     }
}

const anotherPizza = new pizza();
console.log(anotherPizza.size)        //medium








