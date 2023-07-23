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

/* PLANTILLAS LITERALES */
function tarjetaItemOnSale(producto){/*items en liquidación */

    let boton = ""
    if (carrito.some((elemento)=> elemento.id === producto.id)){/* creo la variable botón segun corresponda por cada prod. (si está o no en el carrito) */
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
}/* boton del carrito con id del producto */

function tarjetaItemDestacado(producto){/* items destacados */
    let boton = ""
    if (carrito.some((elemento)=> elemento.id === producto.id)){/* creo la variable botón segun corresponda por cada prod. (si está o no en el carrito) */
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
}/* boton del carrito con id del producto */

function retornarItemCarrito(prod){/* Lista de carrito */ 
    let saleTag
    let precioOriginalTachado
    let precioConDescuento = (((100-prod.descuento)*prod.precio)/100)*prod.cantiadadEnCarrito    
    if (prod.onSale===true){/* creo el item dependiendo de si el producto está en loquidación o no */
        saleTag = `<span id="saleTag"><i class="fa-solid fa-arrow-down"></i>${prod.descuento}%</span>`
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
                    <div id="${prod.id}" class="btn decrementar" onclick="decrementarBtnCarrito(${prod.id})">-</div>
                    <span>${prod.cantiadadEnCarrito}</span>
                    <div id="${prod.id}" class="btn incrementar" onclick="incrementarBtnCarrito(${prod.id})">+</div>
                </div>
                <p class="subtotalProdCarrito">$${precioConDescuento.toFixed(2)}</p>
                <div><i id="${prod.id}" class="fa-solid fa-xmark fa-2x"></i></div>
            </div>\n`
}/* botones incrementar, decrementar y quitar del carrito con id del producto */

/* FUNCINES PARA FUNCIONALIDADES DEL CARRITO */
function irAlCarritoDesdePages(){
    location.href='Carrito.html'
}

function irAlCarritoDesdeIndex(){
    location.href='Pages/Carrito.html'
}

function agregarACarrito(id){
    let item = productos.find((producto) => { /* guardo el item a agregar, dependiendo el id ingresado, en una variable*/
        return producto.id === id
    })
    item.cantiadadEnCarrito = 1 /* aumento la cantidad del item */
    carrito.push(item) /* agrego el item al carrito  */
    actualizarLocalStorageCarrito() 
}

function quitarDeCarrito(id){
    let item = carrito.find((producto) => {/* guardo el item a agregar, dependiendo el id ingresado, en una variable*/
        return producto.id === parseInt(id)
    })
    if(item != -1){ /* si el item está en el carrito, obtengo su index en el carrito */
        let index=carrito.indexOf(item)
        carrito.splice(index, 1) /* elimino el item del array carrito */
        actualizarLocalStorageCarrito()
    }   
}

function actualizarLocalStorageCarrito(){
    localStorage.removeItem("carrito") /* limpio el carrito en local storage */
    let carritoJSON = JSON.stringify(carrito) /* creo el carrito a JSON */
    localStorage.setItem("carrito", carritoJSON) /* vuelvo a guardarlo en local storage */
}

function recuperarCarrito(){
    let carrito = localStorage.getItem("carrito") /* obtengo el carrito de localStorage */
    if (carrito){ 
        return JSON.parse(carrito) /* si carrito está en el localStorage, retorno el objeto con JSON.parse */
    }else{
        return [] /* si carrito no está en el localStorage es porq está vacio. retorno un array vacío */
    }
}

function vaciarCArrito(){
    localStorage.removeItem("carrito") /* limpio el carrito en local storage, queda vacío*/
    carrito = recuperarCarrito() /* retorna un array vacío */
    cargarListaDeCarrito(carrito) /* recargo items en ventana carrito */
}

function activarItemCarritoBtnQuitar(){ /* funcion para darle funcionalidad a los iconos X de quitar en lista de items del carrito */
    const botonesDeCarritoQuitar = document.querySelectorAll('.fa-solid.fa-xmark.fa-2x') /* nodos de icons X en lista de carrito */
    botonesDeCarritoQuitar.forEach((boton)=>{
        boton.addEventListener("click", ()=>{ /* por cada botón, agrego el listener del click */
            quitarDeCarrito(boton.id) /* quito el item */
            acutalizarContadorCarrito() /* actualizo el contador del header */
            console.table(carrito) /* veo en la canosola el table (para ir viendo el funcionamiento) */
            cargarListaDeCarrito(carrito) /* recaro la lista de items */
        })
    })
}

function incrementarBtnCarrito(id){ /* funcionalidad a botón de incremento en item-carrito (+) */
    let index = carrito.findIndex((el)=> el.id === parseInt(id)) /* cuardo el index en carrito del item a incrementar */
    if(carrito[index].cantiadadEnCarrito>=1 ){ /* si la cantidad es mayor o igual a 1, incremento */
        carrito[index].cantiadadEnCarrito+=1
        actualizarLocalStorageCarrito() /* actualizo local storage */
        cargarListaDeCarrito(carrito) /* recargo la lista de items */
    } 
}

function decrementarBtnCarrito(id){ /* funcionalidad a botón de Decremento en item-carrito (-) */
    let index = carrito.findIndex((el)=> el.id === parseInt(id)) /* cuardo el index en carrito del item a decrementar */
    if(carrito[index].cantiadadEnCarrito>1){/* si la cantidad es mayor o igual a 1, Decremento */
        carrito[index].cantiadadEnCarrito-=1
        actualizarLocalStorageCarrito() /* actualizo local storage */
        cargarListaDeCarrito(carrito) /* recargo la lista de items */
    } 
}

function cargarListaDeCarrito(carrito){
    cargarCuerpoDeListaCarrito(carrito)/* cargo la lista de items */
    cargarPieDeListaCarrito(carrito) /* cargo el precio total */
    activarItemCarritoBtnQuitar() /* activo los botones de quitar item nuevamente. */
}

function cargarCuerpoDeListaCarrito(carrito){
    let cuerpoListaCarrito = document.querySelector(".cuerpoLista") /* nodo de cuerpo de la lista */
    cuerpoListaCarrito.innerHTML ="" /* vacío el nodo */
    if (carrito.length == 0){ /* Si el carrito está vacío, agrego un mensaje */
        cuerpoListaCarrito.innerHTML='<p class="carritoVacio">El carrito Está vacío. Agrega algunos articulos.</p>'
    }else{/* Si el carrito tiene productos, retorno los items */
        carrito.forEach(prod => {cuerpoListaCarrito.innerHTML += retornarItemCarrito(prod)});
    }
}

function cargarPieDeListaCarrito(carrito){
    let pieListaCarrito = document.querySelector(".pieLista") /* nodo de pie de lista */
    if(carrito.length>0){ /* si el carrito tiene items, muestro el total y un botón de vaciar */
        let total = 0 /* inicializo el total en 0 */
        carrito.forEach((prod)=>{ total += ((((100 - prod.descuento)*prod.precio)/100)*prod.cantiadadEnCarrito)}) /* acumulo el precio en el total (FullPrice y OnSale) */
        pieListaCarrito.innerHTML= `<button class="btnVaciarCarrito" onclick="vaciarCArrito()">Vaciar Carrito</button>\n<p class="importeTotal"> El importe total a abonar es de: <strong> $${total.toFixed(2)} </strong> </p>`
    }else{/* si el carrito no tiene items, no muestro nada */
        pieListaCarrito.innerHTML=""
    }

}

function acutalizarContadorCarrito(){/* selecciono el nodo del icono car, y le agrego la longitud del carrtio*/
    let iconCarrito = document.querySelector('i#car span')
        if(carrito.length>0){
            iconCarrito.innerHTML = carrito.length
        }else{
            iconCarrito.innerHTML = ''
        }
}

/* FUNCIONES PARA TARJETAS DE INDEX */
function activarItemsBtnAdd(){ /* activar los botones de "agregar" y "Quitar" de las tarjetas de productos */
    const botonesDeCarritoAdd = document.querySelectorAll('.cart-btn') /* nodo de los botones */
    botonesDeCarritoAdd.forEach((boton)=>{ /* por cada botón, agrego el listener del click */
        boton.addEventListener("click", ()=>{
            if(boton.innerText.includes("Añadir")){ /* si está en "Añadir", al clickear se cambia a Quitar */
                agregarACarrito(parseInt(boton.id))
                boton.innerHTML = '<i class="fa-solid fa-xmark"></i>Quitar'
                acutalizarContadorCarrito()
                console.table(carrito)                
            }else{  /* si está en "Quitar", al clickear se cambia a Añadir */
                quitarDeCarrito(boton.id)
                acutalizarContadorCarrito()
                console.table(carrito)
                boton.innerHTML = '<i id="articles" class="fa-solid fa-cart-shopping"></i>Añadir'
            }
        })
    })
}

function crearItems(productos){ /* funcion que crea los items en index */
    const itemsOnSale = document.querySelector("#itemsOnSale") /* Nodo de container de OnSale */
    const itemsDestacados = document.querySelector("#itemsDestacados") /* Nodo de container de Destacados */
    productos.forEach(producto => {
        if(producto.onSale === true){ /* Creo la tarjeta de sale con la funcion y la agrego al nodo */
            itemsOnSale.innerHTML += tarjetaItemOnSale(producto)
        }else{/* Creo al tarjeta destacado con la funcion y la agrego alnodo */
            itemsDestacados.innerHTML += tarjetaItemDestacado(producto)
        }
    });
    activarItemsBtnAdd() /* Luego de creados las tarjetas, activo los botones */
}

/* EJECUCIONES */
let carrito = recuperarCarrito()
acutalizarContadorCarrito()
