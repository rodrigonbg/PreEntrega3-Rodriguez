/* Nodos */
const itemsOnSale = document.querySelector("index#itemsOnSale")
const itemsDestacados = document.querySelector("index#itemsDestacados")



function irAlCarrito(){
    if (location.href.includes("index")){
        location.href='Pages/Carrito.html'
    }else{
        location.href='Carrito.html'
    }

}

/* Plantilla literal para items en liquidación */
function tarjetaItemOnSale(producto){
    return
        `<div class="main__onSale col-lg-2 col-md-3 col-sm-4 col-6 ">
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
                    <div class=""><!-- COTON DEL CARRRITO -->
                        <button class="btn btn-white shadow-sm rounded-pill bg-white cart-btn"><i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir</button>
                    </div>
                </div>
                <div class="main__onSale__item__info"> <!-- INFO DEL PRODUCTO -->
                    <div class="item__name">
                        <p>${producto.nombre}</p>
                    </div>
                <div class="item__price">
                    <span id="precioOnSale">$${producto.precio * 0,producto.descuento}</span>
                    <span id="precioOriginal">$${producto.precio}</span>
                </div>
                </div>    
            </div>     
        </div>`
}

/* Plantilla literal para items destacados */
function tarjetaItemDestacado(producto){
    return
    `<div class="main__newArrivals__item">
        <img src=${producto.img} alt=${producto.alt}>
        <p class="main__newArrivals__item__info">${producto.nombre}: </p>
        <p class="main__newArrivals__item__price">$${producto.precio}</p>
     </div>`
}

function crearItems(productos){
    array.forEach(producto => {
        if(producto.onSale){
            /* Creo la tarjeta de sale con la funcion y la agrego al nodo */
        }else{
            /* Creo al tarjeta destacado con la funcion y la agrego alnodo */
        }
    });
}