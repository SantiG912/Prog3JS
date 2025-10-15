import { getUser } from "./api/userApi";
import { renderUsers } from "./ui/render";

const elementList = document.getElementById("user-list");
const statusElement = document.getElementById("status");

async function init(){
  try{
    const users = await getUser();
    renderUsers(users, elementList, statusElement);
  }catch(error){
    statusElement.textContent = error;
    statusElement.style.color = "red";
  }
}

init();