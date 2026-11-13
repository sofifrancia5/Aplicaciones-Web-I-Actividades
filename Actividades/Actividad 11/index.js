function saludar() {
  console.log("¡Hola, soy Sofi!");
}

function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido a esta clase de prueba!`);
}

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

const compararNumeros = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};

const numeroComparado = 5;
for (let i = 0; i <= 10; i++) {
  compararNumeros(i, numeroComparado);
}

const operacion = (numero1, numero2, callback) => {
  callback(numero1, numero2);
};

const suma = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  console.log(`El resultado de la suma es ${resultado}`);
};

const resta = (numero1, numero2) => {
  const resultado = numero1 - numero2;
  console.log(`El resultado de la resta es ${resultado}`);
};

operacion(10, 4, suma);
operacion(10, 4, resta);
