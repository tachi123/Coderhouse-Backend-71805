//agarro el boton
let buttonEliminar = document.getElementById("botonEliminar");

buttonEliminar.addEventListener('click', 

    await fetch('/delete-product'), {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
        body: idProduct
    }

)