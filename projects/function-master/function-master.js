
function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
}

function keysToString(object) {
    var arr = [];
    for (var key in object){
        arr.push(key)
    }
    return arr.join(" ");
}



function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr.join(" ");
}