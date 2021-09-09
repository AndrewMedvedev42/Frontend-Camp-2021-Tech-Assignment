/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {

    var num = numbers.split(" ")

  var sorted = num.slice(" ").sort(function (a, b) {
    return a - b;
  });

  var smallest = sorted[0],
    largest = sorted[sorted.length - 1];

  return `${smallest} ${largest}`
}
