const maxFitness = 10;
const maxHunger = 10;
const minHunger = 0;
const needsWalk = (this.fitness <= 3);
const needsFood = (this.hunger >= 5);


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
},
feed() {
    this.hunger -= 3;
    if (this.hunger <= 0 ) this.hunger = minHunger;
},
checkUp() {
   
    if (needsFood && needsWalk) {
        return "I am hungry and I need a Walk!";

    } else if (needsFood && !needsWalk) {
        return "I am hungry!";

    } else if (needsWalk && !needsFood) {
        return "I need a walk!";
}
else
    return "I feel great!";
}

};


module.exports = Pet,
maxFitness,
maxHunger,
minHunger,
needsWalk,
needsFood;

