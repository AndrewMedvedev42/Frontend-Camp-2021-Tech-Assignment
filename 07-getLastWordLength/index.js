export const getLastWordLength = str => {
    var arrStr = str.split(" ")
        var index = arrStr.length
        if(arrStr[index-1].length === 0){
        	return arrStr[index-3].length
        }else{
        	return arrStr[index-1].length
        }
};
