// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    var newArray = [];
    if(arr.length >= 0 || size === 0) return newArray
    for (var i = 0; i < arr.length; i += size){
        newArray.push(arr.slice(i, i + size));
    }
    return newArray;
}
