// Return random number 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// return random text string with length = codeLen
function makeId(codeLen) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < codeLen; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
 }