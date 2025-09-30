const productos = [
    {nombre: "laptop", precio: 1200, descripcion: "alta compu", foto: "https://th.bing.com/th/id/R.50b84c2dfe463ca70f5c2c66802eb3f7?rik=uXWNeUkO52DjoA&riu=http%3a%2f%2fs3.amazonaws.com%2fimagenes-sellers-mercado-ripley%2f2019%2f09%2f05153814%2f81ppRMm5L6L._SL1500_.jpg&ehk=nSUbhwZxIN%2fYLglRtY%2fiihgCgsfEGiJSUwO5k4D75gE%3d&risl=&pid=ImgRaw&r=0",},
    {nombre: "telefono", precio: 1200, descripcion: "alta telefono", foto: "https://t1.niora.net/media/samsung_galaxy_j2_prime__87a7.jpg",},
    {nombre: "auriculares", precio: 1200, descripcion: "altos auris", foto: "https://rgmmoviles.com/wp-content/uploads/2020/11/auriculares-samsung-100-originales-35-mm-manos-libres-mic-d_nq_np_817259-mla31037219539_062019-f1-6d71367df145a7568715931388832077-640-0-600x584.jpg",},
];

const containerEl = document.getElementById("container");

for (const {nombre, precio, descripcion, foto} of productos) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card">
            <img src="${foto}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p><strong>$${precio}</strong></p>
        </div>
    `;
    contenedorEl.appendChild(card);
}
