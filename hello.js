async function functionClick() {
    document.getElementById("test-init").innerHTML = "";
    // document.body.style.backgroundColor = "blue";
    var userInput = document.getElementById("text1").value;
    var url = "https://calculatorendpoint.azurewebsites.net/api/CalcTrigger";
    colorChange();
    button = document.getElementById("equals");
    buttonColor = button.style.borderColor;
    if (buttonColor === 'rgb(0, 255, 0)') {
        const response = fetch(url,{
            method:"post",
            body:userInput,
            }).then(response => response.text())
            .then(response => {
                document.getElementById("text1").value = parseFloat(response.split('|')[0])
                maketree(response.split('|')[1])
                // console.log(response.split('|')[1])
            });
            document.getElementById("equals").style.borderColor='#FF0000';
    }
}
function colorChange() {
    var operatorsInARow = 0;
    var operators = '+-*/'
    var text1 = document.getElementById("text1").value.replace(/\s+/g, '');
    if (!text1) {
        document.getElementById("equals").style.borderColor='';
    }
    for(var i = 0; i < text1.length; i++) {
        var positionInEquation = text1.substring(i, i+1);
        if (operators.includes(positionInEquation) && operators.includes(text1.substring(i+1, i+2))) {
                document.getElementById("equals").style.borderColor='#FF0000';
                return;
        }
    }
    document.getElementById("equals").style.borderColor='#00FF00';
}
// function colorChange() {
//     var text1 = document.getElementById("text1").value;
//     if (text1 === '') {
//         document.getElementById("equals").style.borderColor='';
//         return;
//     }
//     if (text1.substring(text1.length - 1) === " ") {
//         document.getElementById("equals").style.borderColor='#FF0000';
//         return;
//     } else {
//         document.getElementById("equals").style.borderColor='#00FF00';
//     }
//     return false;
// }
function textFieldChanger(textToUse){
    let clicks = document.getElementById("var").getAttribute('data-value');
    if (clicks == 0) {
        document.getElementById("text1").value += textToUse;
        document.getElementById("equals").style.borderColor='#FF0000';
        document.getElementById("var").setAttribute('data-value', '2');
        return;
    }
    var text1 = document.getElementById("text1").value;
    if (textToUse === 'clear') {
        document.getElementById("text1").value = '';
        return;
    }
    if (textToUse === 'back') {
        if (text1.substring(text1.length - 1) === ' ') {
            document.getElementById("text1").value = text1.substring(0, text1.length - 3);
            colorChange();
            return;
        }
        document.getElementById("text1").value = text1.substring(0, text1.length - 1);
        colorChange();
        return;
    }
    document.getElementById("text1").value += textToUse;
    colorChange();
}
function maketree(newick) {
    var container = document.querySelector('#test-init');
    // console.log(container);
    new SVGTree(newick + ';', container, {
        'nodes': 'circle',
        'edges': 'straight',
        'size': 'keep',
        'leafDistance': 20,
        'depthDistance': 25,
        'collapse': true
        
    });
  };
  