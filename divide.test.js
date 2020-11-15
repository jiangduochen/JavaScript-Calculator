const divide = require('./divide')

test('properly divide two numbers', () => {
    expect(divide(3,2)).toBe(1.5)
})