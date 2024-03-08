var operacao = "";
var res = document.getElementById("res");
var op1 = "";
var op2 = "";
var controlo = 1;
var start = true;

function addnumber() {
    var x = Event.target.value;

    if (controlo == 1) {
        op1 = op1 + x;
    }
    else {
        op2 = op2 + x;
    }

    if (start == true) {
        res.innerText = '';
        start = false;
    }

    res.innerText += x;
}

function addOperation() {
    var x = event.target.value;

    if (operacao == '' && op1 != '') {
        controlo = 2
        operacao = x
    }
    else {
        erro()
    }
}


function calcula() {
    var num1 = parseInt(op1)
    var num2 = parseInt(op2)
    if (controlo == 2 && op2 != '') {
        switch (operacao) {
            case '+':
                operacao = '';
                op1 = num1 + num2;
                op2 = ''
                controlo = 1
                res.innerText = op1
                break
            case '-':
                operacao = '';
                op1 = num1 - num2;
                op2 = ''
                controlo = 1
                res.innerText = op1
                break
            case '*':
                operacao = '';
                op1 = num1 * num2;
                op2 = ''
                controlo = 1
                res.innerText = op1
                break
            case '/':
                if (num2 == 0) {
                    erro()
                }
                else {
                    operacao = '';
                    op1 = num1 / num2;
                    op2 = ''
                    controlo = 1
                    res.innerText = op1
                }
                break
            default:
                erro();
        }
    }

}

function apagar() {
    res.innerText = "0";
    op1 = ""
    op2 = ""
    controlo = 1;
    start = true
}

function erro() {
    start = true
    controlo = 1
    operação = ''
    op1 = ''
    op2 = ''
    res.innerText = 'Error'
}