function generateCodes(){
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTIVWXYZabcdefghijklmnopqrstuvwxyz01234567890@#$';

    for(i=1; i<=8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code
}

document.getElementById("codes").innerHTML = generateCodes();

function disableButtion (){
    document.getElementById("submit").disable = true;
}

disableButtion();