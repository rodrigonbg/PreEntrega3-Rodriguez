function recuperarCarrito(){
    let carrito = localStorage.getItem("carrito")
    if (carrito){
        return JSON.parse(carrito)
    }else{
        return []
    }

}

const carrito = recuperarCarrito()


