
const maxFitness = 10;
const maxHunger = 10;
const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        const pet = new Pet('Iorek');
      expect(new Pet('Iorek')).toBeInstanceOf(Object);
    });
  });
  it('returns the name of my pet', () => {
    const pet = new Pet('Iorek');
      expect(pet.name).toBe("Iorek");
  });
  it('returns an initial age of 0', () => {
    const pet = new Pet('Iorek');
      expect(pet.age).toBe(0);
  });



describe('Hunger', () =>  {
     it('returns an inital hunger value of 0', () => {
        const pet = new Pet('Iorek');
         expect(pet.hunger).toEqual(0);
     });
  });
  
  describe('Fitness', () => {
      it('returns an initial fitness value of 10', () => {
        const pet = new Pet('Iorek');
         expect(pet.fitness).toEqual(10);
      });
  });
  
  describe('growUp', () => {
      it('increases age by 1', () => {
          const pet = new Pet('Iorek');
          pet.growUp();
          expect(pet.age).toEqual(1);
      });

      it('Increases hunger by 5 when pet ages', () => {
        const pet = new Pet('Iorek'); 
          pet.growUp();
          pet.increasesHunger ();
          expect(pet.hunger).toBe(5);
          });
      it('decrease fitness by 3 when pet ages', () => {
        const pet = new Pet('Iorek');
          pet.growUp();
          pet.decreaseFitness();
          expect(pet.fitness).toBe(7);
      });
  });



describe('walk', () => {
   it('when walk is called pet fitness is maxFitness', () => {
    const pet = new Pet('Iorek');
    pet.fitness = 6;
    pet.walk();
    expect(pet.fitness).toEqual(maxFitness);
  });
  it('when walk is called pet fitness increases by 4', () => {
  const pet = new Pet('Iorek');
  pet.fitness = 4;
  pet.walk();
  expect(pet.fitness).toEqual(8);
  });
  
});