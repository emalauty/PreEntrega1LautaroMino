//function alumnos(){
 //    for (let alumnos = 1; alumnos < 11; alumnos++){
 //         estudiantes = prompt("Buenas maestro, ingrese el nombre del alumno.");
 //         nota = parseInt(prompt("Ahora ingrese las notas de cada alumno para ver si aprobo o desaprobo."));
//
//          console.log(estudiantes+" se saco un "+nota);
//          if (nota >= 7 && nota <= 10){
//               console.log("Este estudiante ha aprobado");
//          }
//         else if (nota < 7){
//               console.log("Este estudiante ha desaprobado");
//          }
//          else if (nota > 10){
//               console.log("la nota maximo de nota es un "+ 10);
//          }
//     }
//}
//alumnos()
// CALCULADORA


//const resta = (a, b) => a - b;

//const divison = (a, b) => a / b;

//const multiplicacion = (a, b) => a * b;

//const iva = (a) => a * 0.21;

//console.log(resta(5, 2));


let materias = ["lengua", "matematicas", "ingles", "quimica", "informatica"]
materias.push('gimnasia')


console.log(("estas son las matertias " + materias.join(" - ")))
function alumnos(){
     for (let alumnos = 1; alumnos < 4; alumnos++){
          estudiantes = prompt("Buenas maestro, ingrese el nombre del alumno.");
          materias = prompt("Ahora ingrese la materia")
          nota = parseInt(prompt("Ahora ingrese las notas de cada alumno para ver si aprobo o desaprobo."));

          console.log(estudiantes+" se saco un "+nota+" en "+ materias);
          if (nota >= 7 && nota <= 10){
               console.log("Este estudiante ha aprobado "+ materias);
          }
         else if (nota < 7){
               console.log("Este estudiante ha desaprobado "+ materias);
          }
          else if (nota > 10){
               console.log("la nota maximo de nota es un "+ 10);
         }
     }
}
alumnos()