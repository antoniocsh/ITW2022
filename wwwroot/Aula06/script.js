function calcula() {
    var op = document.getElementById("op");
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var res = document.getElementById("res");
    var x = parseFloat(op1.value);
    var y = parseFloat(op2.value);
    var operacao = op.options[op.selectedIndex].value;
    switch (operacao) {
        case "1":
            res.value = x + y;
            break;
        case "2":
            res.value = x - y;
            break;
        case "3":
            res.value = x * y;
            break;
        case "4":
            if (y != 0) {
                res.value = x / y;
                break;
            }
            else {
                res.value = "NAO PODES DIVIDIR POR ZERO LMAO BURRO DE MERDA INUTIL N SABES MATEMATICA BASICA NOJENTO CABRAO";
                break;
            }
        default:
            res.value = "ERRO!!!!";
    }
}
