/**
 * largestPairSum - Returns sum of highest and lowest values in numberay:
 * @param {numberay} numbers - the numberay of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let first, second;
        if (numbers[0] > numbers[1])
        {
            first = numbers[0];
            second = numbers[1];
        }
        else
        {
            first = numbers[1];
            second = numbers[0];
        }
       
        // Traverse remaining numbersay and
        // find first and second largest
        // elements in overall numbersay
        for (let i = 2; i < numbers.length; i ++)
        {
            /* If current element is greater
               than first then update both
               first and second */
            if (numbers[i] > first)
            {
                second = first;
                first = numbers[i];
            }
       
            /* If numbers[i] is in between first
               and second then update second */
            else if (numbers[i] > second &&
                     numbers[i] != first)
                second = numbers[i];
        }
        return (first + second);
}
