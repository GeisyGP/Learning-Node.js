class Banda{
    constructor(){
        this.name = "";
        this.albums = [];
        this.mlisteners = 0;
        this.about = "";
    }
    Play(){
        console.log("Reproduzindo...");
    }
    Follow(){
        console.log("Seguindo");
    }
    Share(){
        console.log("Compartilhando...");
    }
}

let theLumineers = new Banda();

theLumineers.name = "The Lumineers";
theLumineers.mlisteners = 17325750;

console.log("Nome da banda: " + theLumineers.name);
console.log("Ouvintes mensais: " + theLumineers.mlisteners);
theLumineers.Play();

/*class Produto{
    constructor(){
        this.preco = 0;
        this.modelo = "";
        this.marca = "";
    }
    Comprar(){
        console.log("Comprando $")
    }
    CalcularFrete(){
        console.log("Calculando +")
    }
    AddCarrinho(){
        console.log("Adicionando...")
    }
}
-------------
class Comida{
    constructor(){
        this.price = 0;
        this.name = "";
        this.ingredients = [];
        this.serves = 0;
        this.waitingTime = 0;
    }
    Choose(){
        console.log("Prato selecionado!");
    }
    RemoveIngredients(){
        console.log("Removendo ingrediente selecionado!");
    }
}
------------
class Carro{
    constructor(){
        this.cor = "";
        this.marca = "";
        this.modelo = "";  
        this.ano = 0;      
        this.kmLitro = 0;
        this.combustivel = "";
        this.precoHora = 0;
        this.tempo = 0;
    }
    VerificarDisponivel(){
        console.log("Verificando disponibilidade!");
        console.log("Estará disponível em * horas.");
    }
    CalcularTotal(){
        let total = this.precoHora * this.tempo;
        console.log("Total a pagar: R$" + total);
    }
}

*/