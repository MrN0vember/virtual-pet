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