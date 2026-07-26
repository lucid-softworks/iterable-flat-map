export type IterableFlatMapper<TValue, TOutput> = (
  value: TValue,
  index: number,
) => Iterable<TOutput>;

/** Lazily maps each source value to an iterable and yields its values. */
export function* flatMapIterable<TValue, TOutput>(
  values: Iterable<TValue>,
  transform: IterableFlatMapper<TValue, TOutput>,
): Generator<TOutput, void, undefined> {
  let index = 0;
  for (const value of values) {
    yield* transform(value, index);
    index += 1;
  }
}
