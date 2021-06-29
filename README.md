# next-is-equal-diff
> Check a list is equal difference.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-is-equal-diff
```

## usage
```js
import '@jswork/next-is-equal-diff';

nx.isEqualDiff([1,2,3]);        // true
nx.isEqualDiff([1,3,5], 2);     // true
nx.isEqualDiff([5, 3, 1], -2);  // true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-equal-diff/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-is-equal-diff
[version-url]: https://npmjs.org/package/@jswork/next-is-equal-diff

[license-image]: https://img.shields.io/npm/l/@jswork/next-is-equal-diff
[license-url]: https://github.com/afeiship/next-is-equal-diff/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-is-equal-diff
[size-url]: https://github.com/afeiship/next-is-equal-diff/blob/master/dist/next-is-equal-diff.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-is-equal-diff
[download-url]: https://www.npmjs.com/package/@jswork/next-is-equal-diff
