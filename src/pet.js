const maxFitness = 10;
const maxHunger = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
   
};

Pet.prototype = {
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
    this.fitness += 4;
    if (this.fitness >= maxFitness) this.fitness = maxFitness;
}
};


module.exports = Pet,
maxFitness,
maxHunger;

