class Persona {
    constructor(nombre, apellido, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let IMC = 0;
        IMC = this.peso / Math.pow(this.altura, 2)
        console.log(`La masa corporal es ${IMC.toFixed(2)}`)

    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad")
        } else {
            console.log("No es mayor de edad")
        }
    }

    generarID() {
        let nombreID = "none"
        nombreID = this.nombre[0] + this.nombre[1] + this.nombre[2] + this.apellido[0]
            + this.apellido[1] + this.apellido[2] + this.edad + this.sexo;
        console.log(nombreID)
        return this.nombreID

        /*el ID se genera concatenando las primeras tres letras del nombre,
        la primeras tres letras del apellido, año de nacimiento y sexo.*/
    }
}

const personaEjemplo = new Persona("Pedro", "Gomez", 18, "hombre", 70, 1.80)
personaEjemplo.calcularIMC();
personaEjemplo.esMayorDeEdad();
personaEjemplo.generarID();
console.log(personaEjemplo)


class Password {
    constructor(longitud) {
        this.longitud = longitud;

    }

    generarPassword() {
        if (this.longitud <= 7) {
            console.log("La contraseña es muy corta")
        } else {
            this.contraseña = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZacegikmoqsuwy01234567890123456789";
            for (var i = 0; i < this.longitud; i++) {
                this.contraseña += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        }
    }

    getLongitud() {
        console.log(`La longitud de la contraseña será ${this.longitud}`)
    }

    getContraseña() {
        if (this.longitud < 8) {
            console.log("No se puede generar una contraseña tan corta")
        } else {
            console.log(`La contraseña es ${this.contraseña}`)
        }
    }
    setLongitud(nuevaLongitud) {
        this.longitud = nuevaLongitud;
        this.generarPassword()
    }
    
    seguridadContraseña() {
        console.log("Entra a seguridad contraseña")
        var character = ""
        var numeros = 0
        var mayusculas = 0 
        var minusculas = 0
            for (var i = 0 ; i < this.longitud; i++) {
            character = this.contraseña.charAt(i);

            if (!isNaN(character * 1)) {
                numeros += 1
            } else {
                if (character == character.toUpperCase()) {
                    mayusculas += 1
                }
                if (character == character.toLowerCase()) {
                    minusculas +=1
                }
            }
        }
        console.log(mayusculas,numeros,minusculas)
        if (mayusculas > 2 && numeros > 5 && minusculas > 1){
            console.log("La constraseña es fuerte")
        } else {
            console.log("La contraseña es debil")
        }
    }
    
}

const newPassword = new Password(7)
newPassword.getLongitud()
newPassword.getContraseña()
newPassword.setLongitud(10)
newPassword.getLongitud()
newPassword.getContraseña()
newPassword.seguridadContraseña()
newPassword.setLongitud(15)
newPassword.getLongitud()
newPassword.getContraseña()
newPassword.seguridadContraseña()




