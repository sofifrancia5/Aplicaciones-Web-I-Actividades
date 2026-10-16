const edad = 20;
if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}

const numero = 7;
if (numero % 2 === 0) {
  console.log("es numero par");
} else {
  console.log("es numero impar");
}

const nota = 8;
if (nota < 4) {
  console.log("desaprobado");
} else if (nota <= 7) {
  console.log("aprobado");
} else {
  console.log("excelente");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("numero par");
  } else {
    console.log("numero impar");
  }
}

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`el número ${i} es par`);
  } else {
    console.log(`el número ${i} es impar`);
  }
}