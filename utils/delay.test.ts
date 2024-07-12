import delay from "./delay";

describe.only("delay", () => {
  it("should run func after delay", (done) => {
    let pass = true;

    delay(() => (pass = true), 32);

    setTimeout(() => {
      expect(pass).toBe(true);
      done();
    }, 1);

    setTimeout(() => {
      expect(pass).toBe(false);
      done();
    }, 33);
  });

  it("same as above but using advanceTimersByTime", (done) => {
    jest.useFakeTimers();

    let pass = true;

    delay(() => (pass = true), 32);

    jest.advanceTimersByTime(1);
    expect(pass).toBe(true);
    done();

    // jest.runAllTimers(); ??
    // jest.advanceTimersByTime(33);
    // expect(pass).toBe(false);
    // done();

    jest.useRealTimers(); // 실제시간 사용 (초기화)
  });

  it("same as above but using mock function", (done) => {
    const mockFn = jest.fn();
    delay(mockFn, 32);

    setTimeout(() => {
      expect(mockFn).not.toHaveBeenCalled();
      done();
    }, 1);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalled();
      done();
    }, 33);
  });

  // it("should use a default `wait` of `0`", (done) => {
  //   let pass = false;
  //   delay(() => {
  //     pass = true;
  //   });

  //   expect(pass).toBe(false);

  //   setTimeout(() => {
  //     expect(pass);
  //     done();
  //   }, 0);
  // });

  // it("should be cancelable", (done) => {
  //   let pass = true;
  //   const timerId = delay(() => {
  //     pass = false;
  //   }, 32);

  //   clearTimeout(timerId);

  //   setTimeout(() => {
  //     expect(pass);
  //     done();
  //   }, 64);
  // });

  // it("should provide additional arguments to `func`", (done) => {
  //   const mockFn = jest.fn();

  //   delay(mockFn, 32, 1, 2);

  //   setTimeout(() => {
  //     expect(mockFn).toHaveBeenCalledWith(1, 2);
  //     done();
  //   }, 64);
  // });
});
