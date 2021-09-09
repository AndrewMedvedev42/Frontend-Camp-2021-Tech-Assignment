const isNumberEven = (number) => number % 2 === 0

export const sameParityFilter = (arr = []) => {
    if(arr.length <= 1) return []

    //check if the first item is array is even
    const isFirstEven = isNumberEven(arr[0])
    const filteredList = arr.filter((item)=> isFirstEven ? isNumberEven(item) : !isNumberEven(item))
    return filteredList
}
