let cantidad = prompt("¿Cuantos alumnos son?");
let alumnos = [];

for (i = 0; i < cantidad; i++) {
  alumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const registro = (nombre, p) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnos[p][1]++;
  }
};

for (i = 0; i < 30; i++) {
  for (o in alumnos) {
    registro(alumnos[o][0], o);
  }
}

for (alumno in alumnos) {
  let resultado = `${alumnos[alumno][0]}: <br>
  ______________Presentes: <b> ${alumnos[alumno][1]}</b> <br>
  ______________Ausentes: <b> ${30 - alumnos[alumno][1]} </b> <br>`;
  if (30 - alumnos[alumno][1] > 18) {
    resultado += "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
  } else {
    resultado += "<br><br<";
  }
  document.write(resultado);
}
