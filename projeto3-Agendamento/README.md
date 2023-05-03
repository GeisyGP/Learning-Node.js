# Sistema de Agendamento com MongoDB

Esse projeto é um sistema de agendamento de consultas com frontend simples.

## Biblioteca FullCalender

Assim como diversas outras aplicações que possuem sistema de agendamento, é usado o FullCalender.
Em [fullcalendar.io](https://fullcalendar.io/docs/initialize-globals) é baixado o arquivo zip, que contém o css e o script. Esses arquivos foram importados na pasta public.

O calendário aparece na página principal, na rota "/", nele aparecem os eventos ainda não finalizados. Para acessar todos os eventos, incluindo os finalizados, existe a rota "/list". Nela também tem uma barra de pessquisa para buscar as consultas pelo cpf ou email.

Na rota "/cadastro" pode cadastrar novas consultas, que imediatamente aparecem no calendário da página inicial. Ao clicar em um desses eventos na rota "/", acessa automaticamente a rota "event/:id", em que aparece os detalhes sobre ele e tem a opção de finalizá-lo. Ao finalizar um evento ele não aparece mais no calendário.

A aplicação conta com apenas um model, o appoitment, que guarda todos os registros dela. É usado também, o padrão de projeto Fabric, que são objetos mais complexos. 

Quando falta 1 hora ou menos para o evento, a aplicação tem um sistema de enviar automáticamente uma notificação por email para lembrar o cliente. Nessa aplicação foi usado o mailtrap para simular o envio de emails.
```
let trasporter = mailer.createTransport({
    host:"sandbox.smtp.mailtrap.io",
    port: 25,
    secure: false,
    auth: {
        user: "", //gerado pelo mailtrap
        pass: ""
    }
});
```
No caso de envios para emails reais, pesquisando algo como "_Dados de conexão SMTP do gmail_", é possível encontrar os dados: host, porta e caso o servidor (gmail, umbler...) usar criptografia SSL, _secure_ tem que ser _true_. Os campos de _auth_ são o seu próprio login e senha.