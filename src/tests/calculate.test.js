import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '5', next: '10', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  //   test("1 plus 2 should return 3", () => {
  //     let obj = {
  //       total: null,
  //       next: 5,
  //       operation: '-',
  //     };
  //     obj = calculate(obj, 2);
  //     expect(obj.next).toEqual(-3);
  //   });
});
