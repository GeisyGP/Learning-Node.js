//Exemplo usando COMPOSIÇÃO

class Leitor{
    Ler(caminho){
        return "Conteúdo de arquivo!";
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Contéudo escrito");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo " + nome + " criado");
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo " + nome);
    }
}

class ManipuladorDeArquivos{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador(nome);
        this.destruidor = new Destruidor(nome);
    }
}

class GerenciadorDeUsuario{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

let manipulador = new ManipuladorDeArquivos("meuarquivo.txt");
manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar("meuarquivo.txt");

let usuarios = new GerenciadorDeUsuario();
usuarios.SalvarListaDeUsuarios(["João", "Maria", "Ana"]); 