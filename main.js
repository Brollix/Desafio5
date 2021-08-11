/* Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
- Crear al menos un objeto para controlar el funcionamiento de tu simulador.
- Incorporarle sus propiedades y su constructor.
- Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
- Utilizar sus mètodos. */

alert(
	'Bueno, mira, vos entraste en este sitio web porque queres que te roben tu informacion. Yo con esta informacion voy a hacer lo que se me de la gana. Ingresala igual, es para un Trabajo Practico.'
);

class Persona {
	constructor(nombre, apellido, edad, dni) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.dni = dni;
	}

	registro() {
		this.nombre = prompt('Ingresa tu Nombre: ');

		this.apellido = prompt('Ingresa tu Apellido: ');

		this.edad = parseInt(prompt('Ingresa tu Edad: '));
		while (isNaN(this.edad) || this.edad <= 0) {
			this.edad = parseInt(prompt('Ingresa tu Edad: '));
		}

		this.dni = parseInt(prompt('Ingresa tu DNI: '));
		while (isNaN(this.dni) || this.dni <= 0) {
			this.dni = parseInt(prompt('Ingresa tu DNI: '));
		}

		console.log(this);
	}

	digoUnaEstupidez() {
		alert(
			`Hola, me llamo ${this.nombre}, y no me baño hace ${this.edad} años, mi mama ya me lo dijo ${this.dni} veces.`
		);
	}
}

const personaNueva = new Persona(
	this.nombre,
	this.apellido,
	this.edad,
	this.dni
);

personaNueva.registro();

alert('Ups, hubo un error, los de sistemas borraron unos datos.');

personaNueva['nombre'] = prompt('Ingresa tu Nombre nuevamente:');
personaNueva['edad'] = prompt('Ingresa tu Edad nuevamente:');
personaNueva.digoUnaEstupidez();

/* let info = [];

for (const propiedad in personaNueva) {
    info.push(personaNueva[propiedad]);
}

document.createElement('info').innerHTML = info; */
