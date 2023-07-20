
/* NODOS */
const itemsOnSale = document.querySelector("#itemsOnSale")
const itemsDestacados = document.querySelector("#itemsDestacados")
const iconCarrito = document.querySelectorAll("#car.fa-solid.fa-cart-shopping")

function actualizarLocalStorageCarrito(){
    localStorage.removeItem("carrito") /* limpio el carrito en local storage */
    let carritoJSON = JSON.stringify(carrito) /* creo el carrito a JSON */
    localStorage.setItem("carrito", carritoJSON) /* vuelvo a guardarlo en local storage */
}

function agregarACarrito(id){
    let item = productos.find((producto) => {
        return producto.id === id
    })
    carrito.push(item)
    actualizarLocalStorageCarrito()
}

function quitarDeCarrito(id){
    let item = productos.find((producto) => {
        return producto.id === id
    })
    let index=carrito.indexOf(item)
    carrito.splice(index, 1)
    actualizarLocalStorageCarrito()
}

function activarItemsBtnAdd(){
    const botonesDeCarritoAdd = document.querySelectorAll('.cart-btn')
    /* por cada botón, agrego el listener del click */
    botonesDeCarritoAdd.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            if(boton.innerText.includes("Añadir")){
                agregarACarrito(parseInt(boton.id))
                boton.innerHTML = '<i class="fa-solid fa-xmark"></i>Quitar'
                console.table(carrito)                
            }else{ 
                quitarDeCarrito(boton.id)
                console.table(carrito)
                boton.innerHTML = '<i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir'
            }
        })
    })
}





function crearItems(productos){
    productos.forEach(producto => {
        if(producto.onSale === true){
            /* Creo la tarjeta de sale con la funcion y la agrego al nodo */
            itemsOnSale.innerHTML += tarjetaItemOnSale(producto)
        }else{
            /* Creo al tarjeta destacado con la funcion y la agrego alnodo */
            itemsDestacados.innerHTML += tarjetaItemDestacado(producto)
        }
    });
    activarItemsBtnAdd()
}


/* Plantilla literal para items en liquidación */
function tarjetaItemOnSale(producto){

       return `<div class="main__onSale col-lg-2 col-md-3 col-sm-4 col-6 ">
            <div class="main__onSale__item"><!-- PRODUCTOS -->
                <div class="main__onSale__item__innerBox"><!-- INTERIOR DE LA CAJA (ICONOS, IMG Y BOTON CARRITO) -->
                    <div class="icons"><!-- icons -->
                        <!-- links a sin hrefs aun-->
                        <a class="text-decoration-none "><i class="fa-solid fa-heart"></i></a>
                        <a class="text-decoration-none "><i class="fa-solid fa-eye"></i></a>
                    </div>
                    <div class="saleTag"><!-- ETIQUETA DE DESCUENTO -->
                        <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${producto.descuento}%</span>
                    </div>
                    <img src=${producto.img} alt=${producto.alt}><!-- IMAGEN DEL PRODUCTO -->
                    <div class=""><!-- BOTON DEL CARRRITO -->
                        <button id="${producto.id}" class="btn btn-white shadow-sm rounded-pill bg-white cart-btn"><i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir</button>
                    </div>
                </div>
                <div class="main__onSale__item__info"> <!-- INFO DEL PRODUCTO -->
                    <div class="item__name">
                        <p>${producto.nombre}</p>
                    </div>
                <div class="item__price">
                    <span id="precioOnSale">$${((100-producto.descuento)*producto.precio)/100}</span>
                    <span id="precioOriginal">$${producto.precio}</span>
                </div>
                </div>    
            </div>     
        </div>`
}

/* Plantilla literal para items destacados */
function tarjetaItemDestacado(producto){
   
    return `<div class="main__newArrivals__item">
        <img src=${producto.img} alt=${producto.alt}>
        <p class="main__newArrivals__item__info">${producto.nombre}: </p>
        <p class="main__newArrivals__item__price">$${producto.precio}</p>
     </div>`
}








crearItems(productos);