import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should multiply two numbers', () => {
    const result = operate('4', '3', 'x');
    expect(result).toBe('12');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('should handle division by zero', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    const result = operate('5', '3', '%');
    expect(result).toBe('2');
  });

  it('should handle modulo with zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('1', '2', '^')).toThrowError(
      "Unknown operation '^'",
    );
  });
});
