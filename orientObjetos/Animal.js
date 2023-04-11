//Exemplo usando HERANÇA

class Animal{
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }
    ChecarEstoque(){
        return 10;
    }
    OutroMetodo(){
        console.log("Metodo da classe mãe");
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco); //reaproveita os atributos da classe mãe
        this.raca = raca;
        this.peso = peso;
    }
    
    Latir(){
        console.log("Auau");
    }
    ChecarEstoque(){
        console.log("Na loja temos 20 cachorros");
    }
    OutroMetodo(){
        super.OutroMetodo(); //reaproveita método da classe mãe
        console.log("Nova funcionalidade");
    }
}

let dog = new Cachorro("Dogão", 2, 250, "Pinscher", 10);

dog.ChecarEstoque();
dog.Latir();
console.log(dog.idade);