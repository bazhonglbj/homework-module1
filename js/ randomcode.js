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

document.getElementsByName('randomcode')[0].addEventListener('input', function() {
    var submitButton = document.getElementById('submitButton');
    console.log(submitButton);
    if (this.value.trim() === codeText.textContent.trim()) {
        submitButton.disabled = false;
        console.log(submitButton.disabled)
    } else {
        submitButton.disabled = true;
    }
});