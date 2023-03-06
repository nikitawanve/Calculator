// Add event listener on keyup
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (name >= 0 || name <= 9) {
        document.getElementById("display").value += name;
    }
    switch (name) {
        case '+':
        document.getElementById("display").value += name;
        break;
        case '-':
        document.getElementById("display").value += name;
        break;
        case '*':
        document.getElementById("display").value += name;
        break;
        case '/':
        document.getElementById("display").value += name;
        break;
        case '=':
        document.getElementById("display").value = eval(document.getElementById("display").value);
        break;
        case '.':
        document.getElementById("display").value += name;
        break;
        case '%':
        document.getElementById("display").value += name;
        break;
        case 'Enter':
        document.getElementById("display").value = eval(document.getElementById("display").value);
        break;
        case 'Backspace':
        document.getElementById("display").value = display.value.toString().slice(0, -1);   
        break;  
    }
}, false);