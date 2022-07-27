const Contenedor = require('./contenedor.js')

const main = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Guitarra",  
    })

    contenedor.save({
        title: "Bajo",
    })

    contenedor.save({
        title: "Batería",
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

main();