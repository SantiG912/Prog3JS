const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const API_USERS_URL = BASE_URL ??/*OPERADOR DE FUNCIÓN NULA*/ "https://jsonplaceholder.typicode.com/todos";

export async function getUser(){
    const res = await fetch(API_USERS_URL);
    if(!res.ok){
        if(res.status == 404){
            throw new Error("404 not found - Users");
        }
        //throw new Error(`Error HTTP: ${res.status}`);
    }
    const users = await res.json();
    return users;
}