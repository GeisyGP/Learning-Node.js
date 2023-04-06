class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }
    Reproduzir(){
        console.log("Reproduzindo...");
    }
    Pausar(){
        console.log("Pausando ||");
    }
    Avançar(){
        console.log("Avançando >>");
    }
    Fechar(){
        console.log("Fechando X");
    }
    Ficha(){
        console.log("Título: " + this.titulo);
        console.log("Ano: " + this.ano);
        console.log("Genero: " + this.genero);
        console.log("Diretor: " + this.diretor);
        console.log("Duração: " + this.duracao);
    }
}

let vingadores = new Filme();
vingadores.Reproduzir();
vingadores.titulo = "Vingadores 2";
console.log("Título do filme: " + vingadores.titulo);

let homemAranha = new Filme("O Espetacular Homem-Aranha", 2012, "Ação", "Marc Webb", "2h16m");
homemAranha.Ficha();