import { describe, expect, it, vi } from "vitest";

import { flatMapIterable } from "../src/index.js";

describe("flatMapIterable", () => {
  it("lazily maps and flattens with source indexes", () => {
    const transform = vi.fn<(value: string, index: number) => Iterable<string>>(
      (value, index) => [value, String(index)],
    );
    const result = flatMapIterable(["a", "b"], transform);

    expect(transform).not.toHaveBeenCalled();
    expect([...result]).toEqual(["a", "0", "b", "1"]);
    expect(transform).toHaveBeenNthCalledWith(2, "b", 1);
  });

  it("supports empty inner and outer iterables", () => {
    expect([...flatMapIterable([1, 2], () => [])]).toEqual([]);
    expect([...flatMapIterable([], String)]).toEqual([]);
  });
});
