function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(5);
        }, 3000);
    });
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("fulano@gmail.com");
        },2000);
    });
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false;

            if(!deuErro)
                resolve({ time: 4, to: "fulano@gmail.com" });
            else
                reject("Fila cheia");
        }, 4000);
    });
}

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Oi, seja bem vindo!", email).then(() =>{
            console.log("Email enviando para o usuário com id: "+ id);
        }).catch((err) => {
            console.log(err);
        });
    });
})