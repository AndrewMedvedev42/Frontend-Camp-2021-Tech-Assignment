/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const fieldsToOmit = fields
    //create a list from object to filter out fields to delete
    const filterOutFieldsToOmit = Object.entries(obj).filter(
        ([key, val])=>!fieldsToOmit.includes(key)
     )
     //create object from list that was filtered
    const getObjectFromList = Object.fromEntries(filterOutFieldsToOmit);
    return getObjectFromList
};
