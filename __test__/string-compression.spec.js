const compression = require('../lib/string-compression');

describe('compression', () => {
  describe('when input string contain a number', () => {
    it('should return an error', () => {
      expect(() => compression('a4dd6')).toThrow();
    });
  });

  describe('when input string is empty', () => {
    it('should return an error', () => {
      expect(() => compression('')).toThrow();
    });
  });

  describe('when input is not a type of string', () => {
    it('should return an error', () => {
      expect(() => compression(345)).toThrow();
    });
  });
  describe('when aaabbbccc is input string', () => {
    it('should return value a3b3c3', () => {
      const results = compression('aaabbbccc')
      expect(results).toEqual('a3b3c3');
    });
  });
})