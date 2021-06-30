(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isEqualDiff empty or len = 1', function () {
      var arr1 = [];
      var arr2 = [1];
      var arr3 = [1, 1, 1];

      expect(nx.isEqualDiff(arr1)).toBe(false);
      expect(nx.isEqualDiff(arr2)).toBe(false);
      expect(nx.isEqualDiff(arr3, 0)).toBe(true);
    });

    test('nx.isEqualDiff len > 1', function () {
      var arr1 = [1, 2, 3];
      var arr2 = [1, 3, 4];
      var arr3 = [1, 3, 5, 7, 9];
      var arr4 = [5, 3, 1];

      expect(nx.isEqualDiff(arr1, 1)).toBe(true);
      expect(nx.isEqualDiff(arr2)).toBe(false);
      expect(nx.isEqualDiff(arr3, 2)).toBe(true);
      expect(nx.isEqualDiff(arr4, -2)).toBe(true);
    });
  });
})();
