CREATE TABLE usuarios( 
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);  /*Criar tabela*/

INSERT INTO usuarios(nome, email, idade) VALUE(
    "Maria Silva",
    "email@teste.com",
    19
); /*Inserir dados na tabela*/

INSERT INTO usuarios(nome, email, idade) VALUE(
    "João Souza",
    "email2@teste.com",
    24
);

SELECT * FROM usuarios; /*Listar todos os dados da tabela*/

SELECT * FROM usuarios WHERE idade = 28; /*Listar apenas dados com idade = 8*/

SELECT * FROM usuarios WHERE idade >= 20;

DELETE FROM usuarios; /*TODA a tabela é excluida*/

DELETE FROM usuarios WHERE nome = "Ciclano de Tal"; /*excluir especificos*/

UPDATE usuarios SET nome = "Nome teste" WHERE nome = "Maria Silva"; /*Mudar dado*/