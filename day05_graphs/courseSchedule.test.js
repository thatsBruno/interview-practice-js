const courseSchedule = require('./courseSchedule');

test('courseSchedule basic test', () => {
    // TODO: add tests
    expect(courseSchedule()).toBeDefined();
});

test('courseSchedule returns true for no prerequisites', () => {
    expect(courseSchedule(2,[])).toBe(true);
});
