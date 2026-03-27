const addition = (a, b) => a + b

const checkPalindrome = (input) => {
    const reverseInput = input.split('').reverse().join('')
    if (reverseInput === input) {
        // console.log(`${reverseInput} true`)
        return true
    } else {
        return false
    }
}

module.exports = { addition, checkPalindrome }