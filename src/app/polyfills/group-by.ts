if (!Object.hasOwn(Object, 'groupBy')) {
  Object.groupBy = <K extends PropertyKey, T>(items: Iterable<T>, keySelector: (item: T, index: number) => K): Partial<Record<K, T[]>> => (
    Array.from(items).reduce((result, item, index) => {
      const key = keySelector(item, index);
      result[key] = result[key] ?? [];
      result[key]!.push(item);

      return result;
    }, {} as Partial<Record<K, T[]>>)
  );
}
