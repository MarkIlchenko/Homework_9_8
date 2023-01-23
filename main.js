// Homework 8
const sumPositive = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
};
const result = sumPositive([1, 2, 3, -4, -5, -6]);

console.log(result);