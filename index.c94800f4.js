const e=document.getElementById("app");(async()=>{try{let t=(await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")).json(),a=t?.map(e=>`
            <article class="Card">
                <img src="${e.images[0]}">
                <h2>${e.title}</h2> <small>Precio $ ${e.price}</small>
            </article>
            `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=a,e.appendChild(c)}catch(e){console.log(e)}})();
//# sourceMappingURL=index.c94800f4.js.map
