if (!Object.hasOwn(Array.prototype, 'toSorted')) {

  Array.prototype.toSorted = function <T>(compareFn?: (a: T, b: T) => number): T[] {
    if (Array.isArray(this)) {
      return [...this as T[]].sort(compareFn);
    }

    throw new TypeError('Object is not an array');
  };
}
