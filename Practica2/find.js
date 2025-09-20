
const personas = [

    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad:35},
    {nombre:"Maria", edad: 28}
]; 

const foundNombre = personas.find(nuevoNombre=>nuevoNombre.nombre ==='Luis' )
console.log(foundNombre);