const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  it("1234 returns 1,234", () => {
    expect(addCommas(1234)).toBe("1,234")
  });

  it("1000000 returns 1,000,000", () => {
    expect(addCommas(1000000)).toBe("1,000,000")
  });

  it("9876543210 returns 9,876,543,210", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210")
  });

  it("6 returns 6", () => {
    expect(addCommas(6)).toBe("6")
  });

  it("-10 returns -10", () => {
    expect(addCommas(-10)).toBe("-10")
  });

  it("-5678 returns -5,678", () => {
    expect(addCommas(-5678)).toBe("-5,678")
  });

  it("12345.678 returns 12,345.678", () => {
    expect(addCommas(12345.678)).toBe("12,345.678")
  });

  it("12345.678 returns 12,345.678", () => {
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65")
  });

});
