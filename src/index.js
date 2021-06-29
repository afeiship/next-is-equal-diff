(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { context: global };

  nx.isEqualDiff = function (inArray, inValue) {
    var value = inValue || 1;
    var len_ = inArray.length - 1;
    if (len_ <= 0) return false;
    var result = true;
    for (var i = 0; i < len_; i++) {
      var current = inArray[i];
      var next = inArray[i + 1];
      result &&= next - current === value;
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isEqualDiff;
  }
})();
