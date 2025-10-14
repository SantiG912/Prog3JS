const API_USERS_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_USERS_URL)
.then((res) => res.json())
.then((users) => {
    const elemntsList = document.getElementById("users");
    
    users?.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        elemntsList.appendChild(li);
    });
})
.catch(error => console.error(error));
