class Electrodomestico {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = 100;
        this.capacidad = capacidad;
        console.log("Esta es la superclase")
    }
}

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad);
        this.carga = carga;
        console.log(`La carga de este objeto es ${carga}`)
    }

    precioFinal(){
        var precioFinal = 0;
        precioFinal = this.consumoEnergetico * this.carga;
        console.log(`El precio final es ${precioFinal}`)
    }
}

const lavadora = new Lavadora(350,"negro",30, 25)
console.log(lavadora)
lavadora.precioFinal();

class Bebida {
    constructor(cantidad){
    this.cantidad = cantidad;
    }
}

class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super (cantidad)
        this.azucar = azucar;
    }
    //Getter and setters
    getCantidad(){
        console.log(`La cantidad de este refresco es ${this.cantidad}`);
    }
    setCantidad(cantidadNueva){
        this.cantidad = cantidadNueva;
    }

    getAzucar(){
        console.log(`La cantidad de azucar en este refresco es ${this.azucar}`);
    }   
    setAzucar(azucarNueva){
        this.azucar = azucarNueva;
    }

}

class Cerveza extends Bebida{
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad)
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    //Getter and setters
    getCantidad(){
        console.log(`La cantidad de esta cerveza es ${this.cantidad}`);
    }
    setCantidad(cantidadNuevaC){
        this.cantidad = cantidadNuevaC;
    }

    getPorcentaje(){
        console.log(`La cantidad de alcohol en esta cerveza es ${this.porcentajeAlcohol}`);
    }   
    setPorcentaje(porcentNuevo){
        this.porcentajeAlcohol = porcentNuevo;
    }
}

const coca = new Refresco(500,500)
console.log(coca);
coca.getAzucar();
coca.setAzucar(550);
coca.getAzucar();
coca.getCantidad();
coca.setCantidad(1000);
coca.getCantidad();

const Victoria = new Cerveza(500,12)
console.log(Victoria);
Victoria.getPorcentaje()
Victoria.setPorcentaje(14)
Victoria.getPorcentaje()
Victoria.getCantidad()
Victoria.setCantidad(1000)
Victoria.getCantidad()

class Maestro {
    constructor(nombre,materia, alumnos){
        this.nombre = nombre;
        this.materia = materia;
        this.alumnos = alumnos;
    }

    promedio(alumnos){
        var promedio = 0
        promedio = (alumnos[0]+alumnos[1]+alumnos[2]) / 3
        console.log(`El promedio grupal del profesor ${this.nombre} es ${promedio}`)
    }
}

class MaestroFisica extends Maestro{
    constructor(nombre, materia, alumnos, antiguedad){
        super(nombre,materia, alumnos);
        this.antiguedad = antiguedad;
    }
}

class MaestroMusica extends Maestro{
    constructor(nombre, materia, alumnos, edad){
        super(nombre,materia, alumnos);
        this.edad = edad;
    }
}

var alumnosNombre1 = ["Pedro", "Juan", "Susana"] 
var alumnosNombre2 = ["Franco", "La Chapis", "Jess"]
var alumnos1 = [7,8,9];
var alumnos2 = [6,5,4];

const MasterMusica = new MaestroMusica("Juan", "Musica1", alumnosNombre1, 35)
console.log(MasterMusica)
MasterMusica.promedio(alumnos1)

const MasterFisica = new MaestroFisica("Jaime", "FisicaCuantica", alumnosNombre2, "37 años")
console.log(MasterFisica)
MasterFisica.promedio(alumnos2)