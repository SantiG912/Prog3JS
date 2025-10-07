/* const verificarConexion = new Promise((resolve, reject)=>{
    
    const conexion = Math.random() > 0.5;
    
    setTimeout(()=>{
        if(conexion){
            resolve("Conexión exitosa ✅");
        }else{
            reject("Sin conexión ❌");
        }
    }, 2000);
        
});

verificarConexion
.then(resultado => console.log(resultado))
.catch(error => console.error(error)); */

/* const getUserName = new Promise((res, rej) => {

    const userData = {nombre: "juan", edad: 30};
    const {nombre} = userData;

    if(userData){
        res(nombre);
    }else{
        rej("User not found");
    }

});

getUserName
.then((userName) => console.log("Usuario: ", userName))
.catch((errorMsg) => console.error(errorMsg)); */

/* function serverCon(miliSegundos){
    return new Promise((res) => setTimeout(res, miliSegundos))
}

async function iniciarServer(){
    console.log("Iniciando...");
    await serverCon(2000);
    console.log("Conexión exitosa");    
}

iniciarServer(); */

const productos = {nombre: "monitor", precio: 3000};

function getProduct(){
    return new Promise(res => {
        setTimeout(() => res(productos), 2000);
    });
}

async function showProducts(){
    console.log("cargando...");
    const product = await getProduct();
    console.log(product);
}

showProducts();