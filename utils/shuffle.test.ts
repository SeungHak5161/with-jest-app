import shuffle from "./shuffle";

describe("shuffle", () => {
  it("should be return shuffled(not original) array", () => {
    const array = [1, 2, 3, 4];
    expect(shuffle(array)).not.toBe(array);
  });

  // it("should shuffle any type of array", () => {
  //   const array = [1, "a", { text: "hello" }, [1, 2, 3]];
  //   expect(shuffle(array)).not.toBe(array);
  // });

  // it("should return empty array when input is empty", () => {
  //   expect(shuffle([])).toEqual([]);
  // });

  it("should contain same elements after shuffled", () => {
    const array = [1, 2, 3, 4];
    expect(shuffle(array).sort()).toEqual(array.sort());
  });
});
