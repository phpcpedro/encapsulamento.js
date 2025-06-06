console.log("=== ENCAPSULAMENTO ===");
class ContaBancaria {
// Propriedade privada (com #)
#saldo = 0;
constructor(titular) {this.titular = titular;}
// Método público para depositar
depositar(valor) {
if (valor > 0) {
this.#saldo += valor;
console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
}
else {console.log("Valor inválido para depósito!");}
}
// Método público para sacar
sacar(valor) {
if (valor > 0 && valor <= this.#saldo) {
this.#saldo -= valor;
console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
}
else {console.log("Saldo insuficiente ou valor inválido!");}
}

consultarSaldo() {return this.#saldo;}
}

const minhaConta = new ContaBancaria("João");
minhaConta.depositar(100);
minhaConta.sacar(30);
console.log(`Saldo: R$${minhaConta.consultarSaldo()}`);


//console.log(minhaConta.#saldo); // Erro! Propriedade privada