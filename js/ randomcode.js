function generateCodes(){
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTIVWXYZabcdefghijklmnopqrstuvwxyz01234567890@#$';

    for(i=1; i<=8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code
}
var codeText = document.getElementById("codes")
codeText.textContent = generateCodes();

document.getElementsByName('randomcode').addEventListener('input', function() {
    const submitButton = document.getElementById('submitButton');
    console.log(submitButton);
    if (this.value === codeText.textContent) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});