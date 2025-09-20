
 const persona = {

    nombre: "Ivan isay",  
    edad: 37,
    direccion: {
        ciudad: "qro",
        pais: "MX"
    }
}; 


 const{ nombre,edad,direccion:{ciudad}} = persona;
 console.log( "Hola" + " me llamo " + nombre + " Tengo " + edad + " años " + " vivo en " + ciudad ); 

