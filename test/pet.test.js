
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
  });

 describe('As pet ages hunger increase by 5 and fitness is reduced by 3', () => {
  it('Pet hunger increases', () => {
    const pet = new Pet('Iorek'); 
      pet.growUp();
      pet.increasesHunger ();
      expect(pet.hunger).toBe(5);
      });
  it('Pet fitness decreases', () => {
    const pet = new Pet('Iorek');
      pet.growUp();
      pet.decreaseFitness();
      expect(pet.fitness).toBe(7);
  });
});