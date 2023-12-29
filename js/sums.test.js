import { count_months, net_pnl, average_change, greatest_increase, greatest_decrease } from './sums.js';

describe('financial tests', () => {
  test('count the months', () => {
    expect(count_months()).toBe(86);
  });

  test('find net pnl', () => {
    expect(net_pnl()).toBe(38382578);
  });

  test('find average change', () => {
    expect(average_change()).toEqual(-2315.12);
  });

  test('find greatest increase', () => {
    expect(greatest_increase()).toEqual("Feb-2012 ($1926159)");
  });

  test('find greatest decrease', () => {
    expect(greatest_decrease()).toEqual("Sep-2013 ($-2196167)");
  });
});