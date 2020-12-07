import { describe } from "mocha";
import { expect } from "chai";
import { sum } from "../src/example";

describe("Sum function", () => {
  it("should return the sum of our two numbers", () => {
    const result = sum(1, 2);
    expect(result).to.equal(3);
  });
});
