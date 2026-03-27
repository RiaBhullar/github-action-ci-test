// The operation should return the sum of 2 numbers

// addition

const { addition, checkPalindrome } = require('./addition')

test('2 + 4 = 6', () => {
    expect(addition(2,4)).toBe(6)
})

test('3 + 7 = 10', () => {
    expect(addition(2,4)).toBe(6)
})

test('3 + 3 = 6', () => {
    expect(addition(2,4)).toBe(6)
})

test.skip('23 + 60 = 83', () => {
    expect(addition(23,60)).toBe(83)
})

test.each([[3, 4, 7], [5, -10, -5], [0, 2, 2]])(
    'a + b = c', (a, b, expected) => {
        expect(addition(a,b)).toBe(expected)
    }
)

// palindrome tests

test('hello = false', () => {
    expect(checkPalindrome('hello')).toBe(false)
})

test('racecar = true', () => {
    expect(checkPalindrome('racecar')).toBe(true)
})

// You can do test.skip to have a test avoided in a pull request/test