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
            let deuErro = true;

            if(!deuErro)
                resolve({ time: 4, to: "fulano@gmail.com" });
            else
                reject("Fila cheia");
        }, 4000);
    });
}

async function principal(){
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Oi, seja bem vindo!", email);
        console.log("Email enviado com sucesso!");
    } catch(err){
        console.log(err);
    }
}

principal();