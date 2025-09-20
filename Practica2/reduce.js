
const personas = [

    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad:35},
    {nombre:"Maria", edad: 28}
]; 

const sumaEdades= personas.reduce((acumulador, persona)=> acumulador + persona.edad, 0);
console.log(sumaEdades);

