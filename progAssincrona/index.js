function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        //....lógica
        
        let deuErro = true;

        if(deuErro)
            callback("O envio do email falhou!");
        else 
            callback();
    }, 5000);
}


console.log("Enviando email...");
enviarEmail("Oi, seja bem vindo!", "fulano@gmail.com", (erro) => {
    if(erro === undefined)
        console.log("O seu email foi enviado");
    else
        console.log("Ocorreu um erro: "+ erro);
}); 