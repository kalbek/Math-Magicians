import calculate from "../logic/calculate";
import operate from "../logic/operate";

describe("calculate", () => {
  it("should handle AC button", () => {
    const result = calculate({ total: "5", next: "10", operation: "+" }, "AC");
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  it("should handle AC button", () => {
    const result = calculate({ total: "5", next: "10", operation: "+" }, "AC");
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it("should handle operation buttons", () => {
    let result = calculate({ next: "5" }, "+");
    expect(result).toEqual({ total: "5", next: null, operation: "+" });

    result = calculate({ total: "5", next: "10", operation: "+" }, "-");
    expect(result).toEqual({ total: "15", next: null, operation: "-" });

    result = calculate({ total: "5", next: "10", operation: "-" }, "x");
    expect(result).toEqual({ total: "-5", next: null, operation: "x" });

    result = calculate({ total: "5", next: "10", operation: "x" }, "÷");
    expect(result).toEqual({ total: "50", next: null, operation: "÷" });

    result = calculate({ total: "5", next: "10", operation: "÷" }, "%");
    expect(result).toEqual({ total: "0.5", next: null, operation: "%" });
  });

  it("should handle = button", () => {
    let result = calculate({ total: "5", next: "10", operation: "+" }, "=");
    expect(result).toEqual({ total: "15", next: null, operation: null });

    result = calculate({ total: "5", next: "10", operation: "-" }, "=");
    expect(result).toEqual({ total: "-5", next: null, operation: null });
  });
});
