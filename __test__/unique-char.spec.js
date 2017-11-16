const uniqueChar = require('../lib/unique-char');

describe('Unique Characters', () => {
  describe('when input string is empty', () => {
    it('should return an error', () => {
      expect(() => uniqueChar('')).toThrow();
    });
  });

  describe('when input is not a type of string', () => {
    it('should return an error', () => {
      expect(() => uniqueChar(345)).toThrow();
    });
  });
})