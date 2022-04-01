// Função de execução
function EscrevaNome(){
    console.log("Meu nome é Isaias Souza");
}

EscrevaNome();

// Função de execução com retorno
function RetornaNome(nome){
    return nome;
}

var nome = "Irineu";
console.log("O nome de alguém pode ser " + RetornaNome(nome)  + ", mas estamos em dúvida, então você não sabe nem eu.");
