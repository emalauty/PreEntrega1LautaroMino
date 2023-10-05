//let materias = ["lengua", "matematicas"]
//materias.push('ingles')

//class alumno{
//     constructor(nombre, edad){
//          this.nombre = nombre;
//          this.edad = edad;
//     }
//}
//const alumno1 = new alumno ("Lautaro", 17)
//const alumno2 = new alumno ("Emanuel", 16)
//const alumno3 = new alumno ("Sebastian", 18)

//onsole.log("El alumno es "+ alumno1.nombre + " y de "+ alumno1.edad + " años");

//console.log(("estas son las materias " + materias.join(" - ")))
//function alumnos(){
//     for (let alumnos = 1; alumnos < 4; alumnos++){
//          materias = prompt("Ingrese la materia")
//          nota = parseInt(prompt("Ahora ingrese la nota de este alumno"));
//          console.log(" se saco un "+nota+" en "+ materias);
//          if (nota >= 7 && nota <= 10){
//               console.log("Este estudiante ha aprobado "+ materias);
//          }
//         else if (nota < 7){
//               console.log("Este estudiante ha desaprobado "+ materias);
//          }
//          else if (nota > 10){
//               console.log("la nota maximo de nota es un "+ 10);
//         }
//     }
//}

//alumnos()


//console.log("El alumno es "+ alumno2.nombre + " y de "+ alumno2.edad + " años");

//function alumnos(){
//     for (let alumnos = 1; alumnos < 4; alumnos++){
//          materias = prompt("Ingrese la materia")
//          nota = parseInt(prompt("Ahora ingrese la nota de este alumno"));
//
//          console.log(" se saco un "+nota+" en "+ materias);
//          if (nota >= 7 && nota <= 10){
//               console.log("Este estudiante ha aprobado "+ materias);
//          }
//         else if (nota < 7){
//              console.log("Este estudiante ha desaprobado "+ materias);
//          }
//          else if (nota > 10){
//               console.log("la nota maximo de nota es un "+ 10);
//         }
//     }
//}
//alumnos()

//console.log("El alumno es "+ alumno3.nombre + " y de "+ alumno3.edad + " años");

//function alumnos(){
//    for (let alumnos = 1; alumnos < 4; alumnos++){
//          materias = prompt("Ingrese la materia")
//          nota = parseInt(prompt("Ahora ingrese la nota de este alumno"));

//          console.log(" se saco un "+nota+" en "+ materias);
//          if (nota >= 7 && nota <= 10){
//               console.log("Este estudiante ha aprobado "+ materias);
//          }
//         else if (nota < 7){
//               console.log("Este estudiante ha desaprobado "+ materias);
//          }
//          else if (nota > 10){
//               console.log("la nota maximo de nota es un "+ 10);
//         }
//     }
//}
//alumnos()


    const nombre = document.querySelector('#nombreProfe');
    const boton = document.querySelector('#botonPrincipal');
    
    boton.addEventListener('click',() => {
        if(nombre.value.length == 0){
            //este alert luego lo quitare y pondre uno de sweet alert.
            alert("Te falta el nombre.");
        }else{
            document.getElementById("texth1").innerHTML = "<h1 class'profe'>¡Bienvenido Profesor  </h1><style>.btn{display: none;}.name{display: none;}.contenedor1{justify-content: start;}.text1{margin: 10px;font-size:large;}.labelNombre{display:block;}.nameAlumno{display:block;}</style>" + nombre.value + " !";
        }
      }
    )
    const blanco = document.getElementById('blanco');
    const negro = document.getElementById('negro');

    document.getElementById("container1").className = localStorage.getItem("tema");

    negro.addEventListener('click', () => {
        document.getElementById("container1").className = 'negro';
        localStorage.setItem("tema", "negro")
    });
    blanco.addEventListener('click', () => {
        document.getElementById("container1").className = 'blanco';
        localStorage.setItem("tema", "blanco")
    });

    
