const e=document.getElementById("app");(async()=>{try{let t=(await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")).json().map(e=>`
            <article class="Card">
                <img src="${e.images[0]}">
                <h2>${e.title}</h2> <small>Precio $ ${e.price}</small>
            </article>
            `).join(""),a=document.createElement("section");a.classList.add("Items"),a.innerHTML=t,e.appendChild(a)}catch(e){console.log(e)}})();
//# sourceMappingURL=index.b1297444.js.map
