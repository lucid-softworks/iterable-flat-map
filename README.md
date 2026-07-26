# @lucid-softworks/iterable-flat-map

Lazily transform each value into an iterable and flatten one level.

```ts
import { flatMapIterable } from "@lucid-softworks/iterable-flat-map";

const words = flatMapIterable(lines, (line) => line.split(" "));
```
