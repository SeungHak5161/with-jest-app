import { chunk } from "./chunks";

describe("chunk", () => {
  const array = [1, 2, 3, 4, 5];

  it("should return chunked arrays", () => {
    const actual = chunk(array, 2);
    expect(actual).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should coerce size to an integer", () => {
    const actual = chunk(array, array.length / 4);
    expect(actual).toEqual([[1], [2], [3], [4], [5]]);
  });
});
