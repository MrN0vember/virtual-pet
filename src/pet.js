const maxFitness = 10;
const maxHunger = 10;
const minHunger = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
   
};

Pet.prototype = {
get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
},

    growUp() {
    this.age++;
},

increasesHunger() {
    this.hunger += 5;
},

decreaseFitness() {
    this.fitness -= 3;
},

walk() {
if (!this.isAlive) {
    throw ("Your pet has earned their place in Valhalla!")
    };

    this.fitness += 4;
    if (this.fitness >= maxFitness) this.fitness = maxFitness;
},
feed() {
    if (!this.isAlive) {
    throw ("Your pet has earned their place in Valhalla!")
    };
    this.hunger -= 3;
    if (this.hunger <= 0 ) this.hunger = minHunger;
    
},

checkUp() {

    //const needsWalk = (this.fitness <= 3);
    //const needsFood = (this.hunger >= 5);
    
    if (this.hunger >= 5 && this.fitness <= 3) {
        return "I am hungry and I need a Walk!";

    } else if (this.hunger >= 5) {
        return "I am hungry!";

    } else if (this.fitness <= 3) {
        return "I need a walk!";
} 
else
    return "I feel great!";

    if (!this.isAlive) {
        throw ("Your pet has earned their place in Valhalla!")
}
}
};


module.exports = {Pet, maxFitness, maxHunger, minHunger};





