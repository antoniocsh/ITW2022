//--- TODO
function recalculate() {
    //--- TODO: escrever o código em falta aqui...

}

function send() {
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado; 
    //--- Se a função retornar false, o formulário não será enviaddo.

}


var Precototal = 0;
var Quantidade = 0;
var Produtos = 0;
var Precototal = document.getElementById("total");
var Quantidade = document.getElementById("quantidades");
var Produtos = document.getElementById("produtos");

var Qtd1 = parseFloat(document.getElementById("qty1"));
var Qtd2 = parseFloat(document.getElementById("qty2"));
var Qtd3 = parseFloat(document.getElementById("qty3"));
var Qtd4 = parseFloat(document.getElementById("qty4"));
var Qtd5 = parseFloat(document.getElementById("qty5"));
var Qtd6 = parseFloat(document.getElementById("qty6"));

var Prc1 = parseFloat(document.getElementById("price1"));
var Prc2 = parseFloat(document.getElementById("price2"));
var Prc3 = parseFloat(document.getElementById("price3"));
var Prc4 = parseFloat(document.getElementById("price4"));
var Prc5 = parseFloat(document.getElementById("price5"));
var Prc6 = parseFloat(document.getElementById("price6"));

var Pdt1 = document.getElementById("product1");
var Pdt2 = document.getElementById("product2");
var Pdt3 = document.getElementById("product3");
var Pdt4 = document.getElementById("product4");
var Pdt5 = document.getElementById("product5");
var Pdt6 = document.getElementById("product6");

function validadeForm() {
    Precototal.value = Qtd1 * Prc1 + Qtd2 * Prc2 + Qtd3 * Prc3 + Qtd4 * Prc4 + Qtd5 * Prc5 + Qtd6 * Prc6;
    Quantidade.value = Qtd1 + Qtd2 + Qtd3 + Qtd4 + Qtd5 + Qtd6;
    if (Pdt1.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Pdt2.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Pdt3.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Pdt4.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Pdt5.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Pdt6.checked == True) {
        Produtos.value = Produtos + 1;
    }
    if (Quantidade >= 5) {
        Precototal.value = Precototal * 0.95;
    }
    if (Precototal > 100) {
        Precototal.value = Precototal * 0.95;
    }
    return Precototal, Quantidade, Produtos;

}