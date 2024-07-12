describe("apis", () => {
  test("toBe vs toEqual", () => {
    expect(2 + 2).toBe(4);
    expect({ a: 1 }).toEqual({ a: 1 });
    // toBe는 얕은 비교를 하기 때문에 내용이 같아도 메모리 주소가 다르면 false를 반환한다. 객체를 비교할 때는 toEqual을 사용해야 한다.
    expect({ a: 1 }).toBe({ a: 1 });
  });

  test("toBe vs toBeCloseTo", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3);
    // 부동 소수점 연산값이 정확하지 않으므로 toBeCloseTo를 사용해야 한다.
    expect(0.2 + 0.1).toBe(0.3);
  });

  test("type check", () => {
    const greeting = "hello world";
    expect(greeting).toContain("hello");
    expect(greeting).not.toContain("hi");
  });

  test("Promise resolves", () => {
    return expect(Promise.resolve("value")).resolves.toBe("value");
  });

  test("Promise rejects with error", () => {
    return expect(Promise.reject(new Error("error"))).rejects.toThrow("error");
  });

  test("async/await with resolves", async () => {
    return await expect(Promise.resolve("value")).resolves.toBe("value");
  });
});