/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let letterList = Array.from(string)

    let counter = 1
    if(size === undefined) return string
    if(string === "" || size === 0) return ""
    const newList = letterList.filter((letter, index)=>{
        if(index > 0 && letterList[index - 1] === letter){
            counter = counter + 1
        } else {
            counter = 1
        }
        if(counter <= size){
            return true
        }else {
            return false
        }
    })
    return newList.join('')
}
