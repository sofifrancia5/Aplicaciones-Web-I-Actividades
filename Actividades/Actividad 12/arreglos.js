function cargarNumeros() {
  const numeros = [];

  for (let i = 0; i < 5; i++) {
    const valor = Number(prompt(`Ingrese el número ${i + 1} de 5:`));
    numeros.push(valor);
  }

  console.log("Arreglo de números:", numeros);
  return numeros;
}

function cargarImpares() {
  const numeros = []; 

  for (let i = 0; i < 5; i++) {
    const valor = Number(prompt(`Ingrese el número ${i + 1} de 5:`));

    if (Number.isInteger(valor) && valor % 2 !== 0) {
      numeros.push(valor);
    }
  }

  console.log("Arreglo de números impares:", numeros);
  return numeros;
}


