describe('Test calculator', () => {
  let inputLineHandler;

  beforeEach(() => {
    inputLineHandler = require('./inputLineHandler');
    jest.resetModules()
  });

  it('Test Case #1', () => {
    inputLineHandler('5')
    inputLineHandler('8')
    expect(inputLineHandler('+')).toEqual([13])
  });

  it('Test Case #2', () => {
    expect(inputLineHandler('5 5 5 8 + + -')).toEqual([-13])
    expect(inputLineHandler('13 +')).toEqual([0])
  });

  it('Test Case #3', () => {
    inputLineHandler('5')
    inputLineHandler('9')
    inputLineHandler('1')
    expect(inputLineHandler('-')).toEqual([5, 8])
    expect(inputLineHandler('/')).toEqual([0.625])
  });
});