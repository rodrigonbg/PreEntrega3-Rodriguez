/* Lista de productos */
const productos=[ 
    {id:1, nombre:"Maceta", descripcion:"", img:"Imagenes/Productos/Ofertas/MacetasNegras.jpg", precio:1000, onSale:true, descuento:50, stock:10, alt:"Macetas negras", cantiadadEnCarrito:0},
    {id:2, nombre:"Maceta", descripcion:"", img:"Imagenes/Productos/Ofertas/MacetasBlancas.jpg", precio:1000, onSale:true, descuento:30, stock:10, alt:"Macetas blancas", cantiadadEnCarrito:0},
    {id:3, nombre:"Mesita", descripcion:"", img:"Imagenes/Productos/Ofertas/Mesita.jpg", precio:1699, onSale:true, descuento:29, stock:15, alt:"Mesita de madera", cantiadadEnCarrito:0},
    {id:4, nombre:"Biblioteca", descripcion:"", img:"Imagenes/Productos/Ofertas/Estantería.png", precio:1999, onSale:true, descuento:29, stock:10, alt:"biblioteca", cantiadadEnCarrito:0},
    {id:5, nombre:"Estantería", descripcion:"", img:"Imagenes/Productos/Ofertas/estanteria2.png", precio:1899, onSale:true, descuento:29, stock:10, alt:"Estantería", cantiadadEnCarrito:0},
    {id:6, nombre:"Sofa un cuerpo", descripcion:"", img:"Imagenes/Productos/Ofertas/Sofa.png", precio:6500, onSale:true, descuento:20, stock:10, alt:"Sofa de un cuerpo", cantiadadEnCarrito:0},
    {id:8, nombre:"Boxes decoración", descripcion:"", img:"Imagenes/Productos/Ofertas/Boxes.jpg", precio:2599, onSale:true, descuento:15, stock:10, alt:"Boxes de decoración", cantiadadEnCarrito:0},
    {id:7, nombre:"Lampara de pie", descripcion:"", img:"Imagenes/Productos/Ofertas/LamparaDePie.png", precio:1000, onSale:true, descuento:5, stock:10, alt:"Lampara de pie", cantiadadEnCarrito:0},
    {id:9, nombre:"Armario", descripcion:"", img:"Imagenes/Productos/Destacados/Armario.png", precio:8990, onSale:false, descuento:0, stock:10, alt:"Armario de madera", cantiadadEnCarrito:0},
    {id:10, nombre:"Butaca", descripcion:"", img:"Imagenes/Productos/Destacados/Butaca.png", precio:1000, onSale:false, descuento:0, stock:10, alt:"Butaca de madera", cantiadadEnCarrito:0},
    {id:11, nombre:"Monstera", descripcion:"", img:"Imagenes/Productos/Destacados/Monstera.png", precio:1299, onSale:false, descuento:0, stock:10, alt:"Planta monstera", cantiadadEnCarrito:0},
    {id:12, nombre:"Estantería", descripcion:"", img:"Imagenes/Productos/Destacados/Estanteria.png", precio:1999, onSale:false, descuento:0, stock:10, alt:"Estantería de madera", cantiadadEnCarrito:0},
    {id:13, nombre:"Mesita", descripcion:"", img:"Imagenes/Productos/Destacados/Mesita.png", precio:2599, onSale:false, descuento:0, stock:10, alt:"Mesita", cantiadadEnCarrito:0},
    {id:14, nombre:"Planta", descripcion:"", img:"Imagenes/Productos/Destacados/Planta.png", precio:999, onSale:false, descuento:0, stock:10, alt:"Planta"},
    {id:15, nombre:"Estantería", descripcion:"", img:"Imagenes/Productos/Destacados/Rack-estanteria.png", precio:2599, onSale:false, descuento:0, stock:10, alt:"Estantería", cantiadadEnCarrito:0},
    {id:16, nombre:"Mesa de madera", descripcion:"", img:"Imagenes/Productos/Destacados/Mesa.png", precio:15999, onSale:false, descuento:0, stock:10, alt:"Mesa de madera", cantiadadEnCarrito:0},
    {id:17, nombre:"Cajonera", descripcion:"", img:"Imagenes/Productos/Destacados/Cajonera.png", precio:3699, onSale:false, descuento:0, stock:10, alt:"Cajonera", cantiadadEnCarrito:0}
];

/* Lista de categorías */
const categorias = [
    {nombre:"Dormitorio", img:"../Imagenes/Categorías/dormitorio.png", alt:"Dormitorio"},
    {nombre:"Cocina", img:"../Imagenes/Categorías/cocina.jpg", alt:"Cocina"},
    {nombre:"Living", img:"../Imagenes/Categorías/living.jpg", alt:"Living"},
    {nombre:"Comedor", img:"../Imagenes/Categorías/comedor.png", alt:"Comedor"},
    {nombre:"Baño", img:"../Imagenes/Categorías/baño.jpg", alt:"Baño"},
    {nombre:"Oficina", img:"../Imagenes/Categorías/oficiana.png", alt:"Oficina"},
    {nombre:"Niños", img:"../Imagenes/Categorías/kids.jpg", alt:"Niños"},
    {nombre:"Textiles", img:"../Imagenes/Categorías/textiles.jpg", alt:"Textiles"},
    {nombre:"Iluminación", img:"../Imagenes/Categorías/iluminación.png", alt:"Iluminación"},
];

function acutalizarContadorCarrito(){
    let iconCarrito = document.querySelector('i#car span')
        if(carrito.length>0){
            iconCarrito.innerHTML = carrito.length
        }else{
            iconCarrito.innerHTML = ''
        }
}

/* Plantillas Literales */
function tarjetaItemOnSale(producto){/*items en liquidación */
    let boton = ""
    if (carrito.some((elemento)=> elemento.id === producto.id)){
        boton = '<i class="fa-solid fa-xmark"></i>Quitar'
    }else{
        boton = '<i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir'
    }
    let precioConDescuento = ((100-producto.descuento)*producto.precio)/100
    return   `<div class="main__itemContainer col-lg-2 col-md-3 col-sm-4 col-6 ">
                 <div class="main__item "><!-- PRODUCTOS -->
                     <div class="item__innerBox"><!-- INTERIOR DE LA CAJA (ICONOS, IMG Y BOTON CARRITO) -->
                         <div class="icons"><!-- icons -->
                             <a class="text-decoration-none "><i class="fa-solid fa-heart"></i></a>
                             <a class="text-decoration-none "><i class="fa-solid fa-eye"></i></a>
                         </div>
                         <div class="saleTag"><!-- ETIQUETA DE DESCUENTO -->
                             <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${producto.descuento}%</span>
                         </div>
                         <img src=${producto.img} alt=${producto.alt}><!-- IMAGEN DEL PRODUCTO -->
                         <div class=""><!-- BOTON DEL CARRRITO -->
                             <button id="${producto.id}" class="btn btn-white shadow-sm rounded-pill bg-white cart-btn">${boton}</button>
                         </div>
                     </div>
                     <div class="item__info"> <!-- INFO DEL PRODUCTO -->
                         <div class="item__name">
                             <p>${producto.nombre}</p>
                         </div>
                     <div class="item__price onSale">
                         <span id="precioOnSale">$${precioConDescuento.toFixed(2)}</span>
                         <span id="precioOriginal">$${producto.precio}</span>
                     </div>
                     </div>    
                 </div>     
             </div>`
}

function tarjetaItemDestacado(producto){/* items destacados */
    let boton = ""
    if (carrito.some((elemento)=> elemento.id === producto.id)){
        boton = '<i class="fa-solid fa-xmark"></i>Quitar'
    }else{
        boton = '<i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir'
    }
    return   `<div class="main__itemContainer col-lg-2 col-md-3 col-sm-4 col-6 ">
                 <div class="main__item "><!-- PRODUCTOS -->
                     <div class="item__innerBox"><!-- INTERIOR DE LA CAJA (ICONOS, IMG Y BOTON CARRITO) -->
                         <div class="icons"><!-- icons -->
                             <a class="text-decoration-none "><i class="fa-solid fa-heart"></i></a>
                             <a class="text-decoration-none "><i class="fa-solid fa-eye"></i></a>
                         </div>
                         <img src=${producto.img} alt=${producto.alt}><!-- IMAGEN DEL PRODUCTO -->
                         <div class=""><!-- BOTON DEL CARRRITO -->
                             <button id="${producto.id}" class="btn btn-white shadow-sm rounded-pill bg-white cart-btn">${boton}</button>
                         </div>
                     </div>
                     <div class="item__info"> <!-- INFO DEL PRODUCTO -->
                         <div class="item__name">
                             <p>${producto.nombre}</p>
                         </div>
                     <div class="item__price">
                         <span id="precioOriginal">$${producto.precio}</span>
                     </div>
                     </div>    
                 </div>     
             </div>`
}

function retornarItemCarrito(prod){/* Lista de carrito */ 
    let saleTag
    let precioOriginalTachado
    let precioConDescuento = (((100-prod.descuento)*prod.precio)/100)*prod.cantiadadEnCarrito    
    if (prod.onSale===true){
        saleTag = `<span id="saleTag"><i class="fa-solid fa-arrow-down"></i>${prod.descuento}</span>`
        precioOriginalTachado = `<span id=precioOriginal>$${prod.precio}</span>`
    }else{
        saleTag=""
        precioOriginalTachado=""
    }
    return `\n<div class="prodCarrito">
                <div>
                    <img class="imgCarrito" src=../${prod.img} alt=${prod.alt}>
                    ${saleTag}
                </div>
                <p class="nombreProdCarrito">${prod.nombre}</p>
                <p class="precioProdCarrito">${precioOriginalTachado}$${((100-prod.descuento)*prod.precio)/100}</p>
                <div class="cantidadProdCarrito">
                    <button id="${prod.id}" class="btn decrementar" onclick="decrementarBtnCarrito(${prod.id})">-</button>
                    <span>${prod.cantiadadEnCarrito}</span>
                    <button id="${prod.id}" class="btn incrementar" onclick="incrementarBtnCarrito(${prod.id})">+</button>
                </div>
                <p class="subtotalProdCarrito">$${precioConDescuento.toFixed(2)}</p>
                <div><i id="${prod.id}" class="fa-solid fa-xmark fa-2x"></i></div>
            </div>\n`
}

/* Funciones para funcionalidades del carrito */
function irAlCarritoDesdePages(){
    location.href='Carrito.html'
}

function irAlCarritoDesdeIndex(){
    location.href='Pages/Carrito.html'
}

function agregarACarrito(id){
    let item = productos.find((producto) => {
        return producto.id === id
    })
    item.cantiadadEnCarrito = 1
    carrito.push(item)
    actualizarLocalStorageCarrito()
}

function quitarDeCarrito(id){
    let item = carrito.find((producto) => {
        return producto.id === parseInt(id)
    })
    if(item != -1){
        let index=carrito.indexOf(item)
        carrito.splice(index, 1)
        actualizarLocalStorageCarrito()
    }   
}

function actualizarLocalStorageCarrito(){
    localStorage.removeItem("carrito") /* limpio el carrito en local storage */
    let carritoJSON = JSON.stringify(carrito) /* creo el carrito a JSON */
    localStorage.setItem("carrito", carritoJSON) /* vuelvo a guardarlo en local storage */
}

function recuperarCarrito(){
    let carrito = localStorage.getItem("carrito")
    if (carrito){
        return JSON.parse(carrito)
    }else{
        return []
    }
}

function vaciarCArrito(){
    localStorage.clear()
    carrito = recuperarCarrito()
    cargarListaDeCarrito(carrito)
}

function activarItemCarritoBtnQuitar(){
    const botonesDeCarritoQuitar = document.querySelectorAll('.fa-solid.fa-xmark.fa-2x')
    /* por cada botón, agrego el listener del click */
    botonesDeCarritoQuitar.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            quitarDeCarrito(boton.id)
            acutalizarContadorCarrito()
            console.table(carrito)
            cargarListaDeCarrito(carrito)    
        })
    })
}

function incrementarBtnCarrito(id){
    let index = carrito.findIndex((el)=> el.id === parseInt(id))
    if(carrito[index].cantiadadEnCarrito>=1 ){
        carrito[index].cantiadadEnCarrito+=1
        actualizarLocalStorageCarrito()
        cargarCuerpoDeListaCarrito(carrito)
        cargarPieDeListaCarrito(carrito)
        activarItemCarritoBtnQuitar()
    } 
}

function decrementarBtnCarrito(id){
    let index = carrito.findIndex((el)=> el.id === parseInt(id))
    if(carrito[index].cantiadadEnCarrito>1){
        carrito[index].cantiadadEnCarrito-=1
        actualizarLocalStorageCarrito()
        cargarCuerpoDeListaCarrito(carrito)
        cargarPieDeListaCarrito(carrito)
        activarItemCarritoBtnQuitar()
    } 
}

function cargarListaDeCarrito(carrito){
    cargarCuerpoDeListaCarrito(carrito)
    cargarPieDeListaCarrito(carrito)
    activarItemCarritoBtnQuitar()
}

function cargarCuerpoDeListaCarrito(carrito){
    let cuerpoListaCarrito = document.querySelector(".cuerpoLista")
    cuerpoListaCarrito.innerHTML =""
    if (carrito.length == 0){
        /* Si el carrito está vacío, agrego un mensaje */
        cuerpoListaCarrito.innerHTML='<p class="carritoVacio">El carrito Está vacío. Agrega algunos articulos.</p>'
    }else{/* Si el carrito tiene productos, retorno los items */
        carrito.forEach(prod => {
            cuerpoListaCarrito.innerHTML += retornarItemCarrito(prod)
        });
    }
}

function cargarPieDeListaCarrito(carrito){
    let pieListaCarrito = document.querySelector(".pieLista")
    let total = 0
    carrito.forEach((prod)=>{
        total += ((((100 - prod.descuento)*prod.precio)/100)*prod.cantiadadEnCarrito)
    })
    if(carrito.length>0){
        pieListaCarrito.innerHTML= `<button class="btnVaciarCarrito" onclick="vaciarCArrito()">Vaciar Carrito</button>\n<p class="importeTotal"> El importe total a abonar es de: <strong> $${total.toFixed(2)} </strong> </p>`
    }else{
        pieListaCarrito.innerHTML=""
    }

}

function acutalizarContadorCarrito(){
    let iconCarrito = document.querySelector('i#car span')
        if(carrito.length>0){
            iconCarrito.innerHTML = carrito.length
        }else{
            iconCarrito.innerHTML = ''
        }
}

/* Funciones para tarjeta de index */
function activarItemsBtnAdd(){
    const botonesDeCarritoAdd = document.querySelectorAll('.cart-btn')
    /* por cada botón, agrego el listener del click */
    botonesDeCarritoAdd.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            if(boton.innerText.includes("Añadir")){
                agregarACarrito(parseInt(boton.id))
                boton.innerHTML = '<i class="fa-solid fa-xmark"></i>Quitar'
                acutalizarContadorCarrito()
                console.table(carrito)                
            }else{ 
                quitarDeCarrito(boton.id)
                acutalizarContadorCarrito()
                console.table(carrito)
                boton.innerHTML = '<i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir'
            }
        })
    })
}

function crearItems(productos){
    const itemsOnSale = document.querySelector("#itemsOnSale")
    const itemsDestacados = document.querySelector("#itemsDestacados")
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

/* Ejecuciones */
let carrito = recuperarCarrito()
acutalizarContadorCarrito()
