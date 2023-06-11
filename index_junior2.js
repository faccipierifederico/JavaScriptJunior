// EJERCICIO 1

// Hacer un sistema para un boliche que sólo deje pasar a los mayores de edad a partir de las 2 am y hasta las 7 de la mañana.
// Además, que la primer persona que ingrese al boliche, pase gratis. El resto, tiene que pagar.

// let free = false;

// const client = (time) => {
//     let age = prompt ("How old are you?");
//     if (age > 18) {
//         if (free == false && time >= 2 && time < 7) {
//             alert(`You can access free, because you are the first person to enter`)
//             free = true;

//         } else if (time >= 2 && time < 7) {
//             alert(`It's ${time} o'clock and you can access, but you have to pay`)

//         } else {
//             alert(`It's ${time} o'clock. You are not allowed to acces.`)
//         }
//     } else {
//         alert(`You are a minor. You are not allowed to enter.`)
//     }
// }


// client(3);
// client(5);
// client(1);
// client(11);
// client(23);
// client(4);
// client(7);
// client(17);
// client(21);

// EJERCICIO 2

// Crear un sistema que permita registrar alumnos presentes (P) y ausentes (A) en una clase.
// Pasados los 30 días de cursada, mostrar cuántos presentes tuvo y cuántos ausentes.
// Se pueden tener un máximo de 10% de ausencias, sino, se reprueba.

let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]} <br>
    Presentes: <b> ${alumnosTotales[alumno][1]} </b> <br>
    Ausentes: <b> ${30 - alumnosTotales[alumno][1]} </b>`;

    if (30 - alumnosTotales[alumno][1] > 3) {
        resultado+= `<b> Reprobado por inasistencia </b> <br> <br>`;
    } else {
        resultado+= `<br><br>`;
    }
    document.write(resultado);
}