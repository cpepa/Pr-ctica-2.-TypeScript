import { persona } from "./persona.js";
import { direccion } from "./direccion.js";
import { telefono } from "./telefono.js";
import { email } from "./email.js";
let direccion1 = new direccion('Numancia', 1, 2, 'A', 28039, 'MAD', 'MAD');
let direccion2 = new direccion('Ferrocarril', 25, 4, 'B', 28045, 'MAD', 'MAD');
let direccion3 = new direccion('Alcala', 125, 4, 'C', 28009, 'MAD', 'MAD');
let direccion4 = new direccion('Encinas', 18, 1, 'D', 28016, 'MAD', 'MAD');
let direccion5 = new direccion('Marcelino Castillo', 57, 9, '4', 28047, 'MAD', 'MAD');
let direccion6 = new direccion('Cañaveral', 35, 1, 'B', 28029, 'MAD', 'MAD');
let email1 = new email('personal', 'AntonioFP@gmail.com');
let email2 = new email('trabajo', 'AntonioFPtrab@gmail.com');
let email3 = new email('personal', 'ElenaGF@gmail.com');
let email4 = new email('trabajo', 'ElenaGFtrab@gmail.com');
let email5 = new email('personal', 'LuciaHG@gmail.com');
let email6 = new email('trabajo', 'LuciaHGtrab@gmail.com');
let telefono1 = new telefono('fijo', 913256585);
let telefono2 = new telefono('movil', 635215415);
let telefono3 = new telefono('trabajo', 902156322);
let telefono4 = new telefono('fijo', 912357865);
let telefono5 = new telefono('movil', 639754451);
let telefono6 = new telefono('movil', 722154863);
let persona1 = new persona('Antonio', 'Fernandez Perez', 25, 53264512, new Date("1996-02-21"), 'azul', 'H', [direccion1, direccion2], [email1, email2], [telefono1, telefono2, telefono3], '');
let persona2 = new persona('Elena', 'Gomez Fernandez', 47, 51469823, new Date("1975-04-18"), 'verde', 'M', [direccion3, direccion4], [email3, email4], [telefono4, telefono5], '');
let persona3 = new persona('Lucia', 'Hernan Garcia', 32, 53124586, new Date("1989-02-21"), 'rojo', 'M', [direccion5, direccion6], [email5, email6], [telefono6], '');
let personas = new Array(persona1, persona2, persona3);
function Mostrardatos() {
    for (let i = 0; i < personas.length; i++) {
        console.log("Nombre: " + personas[i].nombre + "\n" + "Apellidos: " + personas[i].apellidos);
        console.log("Edad: " + personas[i].edad + "\n" + "DNI: " + personas[i].DNI + "\n" + "Fecha cumpleaños: " + personas[i].cumpleaños);
        console.log("Color favorito: " + personas[i].colorFavorito + "\n" + "Sexo: " + personas[i].sexo);
        for (let j = 0; j < personas[i].direcciones.length; j++) {
            console.log("Dirección " + (j + 1) + ": ");
            console.log(personas[i].direcciones[j]);
        }
        for (let k = 0; k < personas[i].mails.length; k++) {
            console.log("Email " + (k + 1) + ": ");
            console.log(personas[i].mails[k]);
        }
        for (let l = 0; l < personas[i].telefonos.length; l++) {
            console.log("Teléfono " + (l + 1) + ": ");
            console.log(personas[i].telefonos[l]);
        }
    }
}
Mostrardatos();
for (let a = 0; a < personas.length; a++) {
    if (personas[a].DNI == 51469823) {
        let otradireccion = new direccion('Genova', 27, 7, 'F', 28004, 'MAD', 'MAD');
        let otroemail = new email('familiar', 'familia@gmail.com');
        let otrotelefono = new telefono('trabajo', 901324578);
        var b = personas[a].direcciones.length;
        var c = personas[a].mails.length;
        var d = personas[a].telefonos.length;
        personas[a].direcciones[b] = otradireccion;
        personas[a].mails[c] = otroemail;
        personas[a].telefonos[d] = otrotelefono;
    }
}
Mostrardatos();
