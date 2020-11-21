const subtract = require('./subtract')

test('Properly subtract two numbers', () => {
    expect(subtract(3,2)).toBe(1)
})