function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}


/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const newObject = {}
    //check if the passed object is empty
    if(isEmptyObject(obj)) return newObject
    fields.map((fieldName)=>{
        //check if passed object has specified field
        if(obj[fieldName]){
            newObject[fieldName] = obj[fieldName]
        }
    })
    return newObject
};
