const { it, expect } = require('@jest/globals');
const Pet = require('../src/pet');
const pet = new Pet('Iorek');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Iorek')).toBeInstanceOf(Object);
    });
  });
  it('returns the name of my pet', () => {
      expect(pet.name).toBe("Iorek");
  });
  it('returns an initial age of 0', () => {
      expect(pet.age).toBe(0);
  });
  describe('growUp', () => {
      it('increases age by 1', () => {
          const pet = new Pet('Iorek');
          pet.growUp();
          expect(pet.age).toEqual(1);
      });
  });