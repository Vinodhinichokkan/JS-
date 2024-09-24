const myPizza ={
    size: "medium",
    crust: "original",
    bake: function() {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.bake();         //Baking a medium original crust pizza.