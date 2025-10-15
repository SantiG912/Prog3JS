export function renderUsers(users, userList, statusElement){
    userList.innerHTML = "";
    const count = users.length;
    if(count){
        users?.forEach((user) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${user.name}</strong>
                <small>${user.email} - ${user.address.city}</small>
            `;
            userList.appendChild(li);
        });
        statusElement.textContent = `Mostrando ${users.length} usuarios`;
    }else{
        statusElement.textContent = "No hay usuarios";
    }
}