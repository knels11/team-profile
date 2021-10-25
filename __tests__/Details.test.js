const Details = require('../.lib/Details');

jest.mock('../.lib/Details');

test('creates a details object of employee', () => {
    const details = new Details('junior', 'frontend');

    expect(details.level).toBe('junior');
    expect(details.area).toBe('frontend');
    expect(details.experience).toEqual(expect.any(Number));
});