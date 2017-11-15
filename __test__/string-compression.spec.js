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
  describe('when aaabbbcccddff is input string', () => {
    it('should return value a3b3c3d2f2', () => {
      const results = compression('aaabbbcccddff')
      expect(results).toEqual('a3b3c3d2f2');
    });
  });
  describe('when aaabbbccc is input string', () => {
    it('should return value a3b3c3', () => {
      const results = compression('aaabbbccc')
      expect(results).toEqual('a3b3c3');
    });
  });
  describe('when ghjff is input string', () => {
    it('should return value g1h1j1f2', () => {
      const results = compression('ghjff')
      expect(results).toEqual('g1h1j1f2');
    });
  });
  describe('when ghjffg is input string', () => {
    it('should return value g1h1j1f2g1', () => {
      const results = compression('ghjffg')
      expect(results).toEqual('g1h1j1f2g1');
    });
  });
})