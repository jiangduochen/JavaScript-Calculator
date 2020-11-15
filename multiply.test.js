const multiply = require('./multiply')

test('properly multiplies two numbers', () => {
    expect(multiply(3,2)).toBe(6)
})