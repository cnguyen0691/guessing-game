let guessNumber = function(number){
    let min = 1
    let max = 5
    let random = Math.floor(Math.random() * (max -min + 1)) + min

    return number === random
}
console.log(guessNumber(1))





