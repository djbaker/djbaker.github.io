
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
        if (typeof object[key]  === 'string'){
        arr.push(object[key]);
        }
    }
    return arr.join(" ");
}

function arrayOrObject(argumentttt) {
    if (typeof argumentttt === "object") {
        if (Array.isArray(argumentttt)) {
            return "array"
        } else {
            return "object"
        }
    }
}

function capitalizeWord(word) {
    var arr = word.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

function capitalizeAllWords(string) {
    var arr = string.split(" ")
    var string = [];
    for (var i = 0; i < arr.length; i++) {
        string[i] = capitalizeWord(arr[i]);
    }
    return string.join(" ");
}

function welcomeMessage(object) {
    return "Welcome " + capitalizeWord(object.name) + "!";
}

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

function maybeNoises(object) {
    if (Array.isArray(object.noises) && typeof object.noises[0] === 'string') {
        return object.noises.join(" ");
    }else {
        return "there are no noises";
    }
}

function hasWord(string, word) {
    var arr = string.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false;
}

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

function isFriend(name, object) {
    for (var i = 0; object.friends.length; i++) {
        if (object.friends[i] === name ) {
            return true;
        }
    }return false;
}

/*
function nonFriends(name, list) {

for (var i = 0; list.length; i++) {
    if (list[i].name !== name) {
        if (list[i].friends) {
    }
}

*/

/*    for (var i = 0; list.length; i++) {
        for (var i2 = 0; list[i].friends.length; i2++) {
            if ()
        }
    }
*/
