class pizza {
    constructor(typePizza,sizePizza){
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = "original";
     }
     bake() {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    
     }
}

const anotherPizza = new pizza("margarita","small");
console.log(anotherPizza.size)   
anotherPizza.bake();       

/* small
   Baking a small original crust pizza */ 