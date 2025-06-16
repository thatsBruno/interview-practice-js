const courseSchedule = require('./courseSchedule');

describe('courseSchedule', () => {
    test('basic test', () => {
        // TODO: add tests
        expect(courseSchedule()).toBeDefined();
    });

    test('returns true for no prerequisites', () => {
        expect(courseSchedule(2,[])).toBe(true);
    });
});
