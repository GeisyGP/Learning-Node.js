# Orientação a Objetos em JavaScript

A orientação a objetos possui 5 pilares:
1. Herança
2. Polimorfismo 
3. Encapisulamento
4. Abstração
5. Composição

Os dois últimos são considerados os mais importantes. 

## Classes

O conceito de classificação é agrupar coisas semelhantes. Toda classe possui atributos e métodos:
- Atributos (informações): título, gênero, produtora, preço.
- Métodos (ações): abrir, carregar, fechar, atualizar, executar.

O recomendado é criar um arquivo para cada classe e por convenção o nome deve iniciar com letra maiúscula. 

### Abstração

No geral, abstração é simplificação, como artes abstratas, que não precisam ser realistas para serem entendidas. Ou seja, são aspectos essenciais de um contexto qualquer. 

Na programação são os atributos e métodos essenciais para uma aplicação. Em diferentes situações a abstração é diferente para o mesmo elemento. Por exemplo: animais em um sistema de petshop e em um sistema de granja.

### Criando uma classe

Os atributos da classe devem ser definidos dentro do _constructor_:
```
class Filme{
    constructor(){
        this.atributo1 = "";
        this.atributo2 = 0;
    }
    // métodos   
}
```
Atributos são como variáveis, só que pertencem a uma classe. Nesse momento as variáveis são só criadas, a atribuição é feita posteriormente quando se está instanciando. 

Já os métodos são como funções normais e são declaradas logo abaixo do _constructor_:
```
class Filme{
    constructor(){
        //...
    }
    Reproduzir(){
        //...
    }
    Pausar(){
        //...
    }
}
```

## Objetos

Os objetos são algo feito da classe, como por exemplo: uma classe "Carro" pode formar objetos "Uno" e "Gol". Exemplo: `let uno = new Carro();`. Dessa forma está criando uma cópia da classe e armazenando na variável "uno". Isso é instanciar.

Quando instanciar um objeto pode receber todos os atributos e métodos: `uno.Reservar();`.

Há duas formas de atribuir variáveis. A primeira:
```
let vingadores = new Filme();
vingadores.titulo = "Vingadores 2";
```

E a segunda usa o construtor, que é uma função responsável por criar uma cópia do objeto na memória. Nele _this_ referencia o atributo. Passando variáveis como parâmetro de constructor, podemos fazer: `let homemAranha = new Filme("O Espetacular Homem-Aranha", 2012, "Ação", "Marc Webb", "2h16m");` 

Para não ter que ficar criando _console.log_ toda hora, podemos criar um método que faça isso. Mas para acessar no método um atributo da própria classe temos que usar _this_:
```
console.log("Título: " + this.titulo);
```
This esta dizendo "deste objeto". Pode ser usado também para usar um método dentro de outro: `this.Reproduzir();`. 

Quando criamos uma nova instância, estamos criando uma cópia de toda a classe, então _this_ é como se nas cópias substituísse o nome dado a classe. This representa o objeto.

## Métodos Estáticos

Para acessar métodos de uma classe, sem ter que criar um objeto, adicionar _static_ a ele:
```
class Calculadora{
    static Somar (a, b){
        console.log(a + b);
    }
    static Sub(a, b){
        console.log(a - b);
    }
}
```
Assim, pode acessar eles com `Calculadora.Somar(2, 3);`

## Composição

Composição é reaproveitar código. Basicamente é construir uma classe com outras classes. 

Quando se tem muitas classes pequenas, são chamadas de componentes. Duas ou mais classes diferentes podem usar os mesmos componentes. O uso de composição facilita na hora de realizar alterações em códigos que são usados em mais de uma classe. No arquivo _ManipuladorDeArquivos.js_ tem um exemplo de uso de composição.

## Herança

O intuito principal é reutilizar código, assim como composição, mas de uma maneira mais "fraca".

Situação exemplo: quando instanciar, o objeto precisa de mais atribuições do que a classe tem. Então é usado _extends_: `class Computador extends Produtos{}`. Em que Produtos é a classe mãe e Computador o filho. 

Para reaproveitar atributos e lógicas de métodos, pode ser usado _super_ como: `super(nome, idade, preco);`

>Não é recomendado criar classes "avós", em que classe filho herda de outra classe filho