const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});

console.log("3. Arreglo con forEach:", frutas);

const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasOriginales.map((fruta) => fruta.toUpperCase());

console.log("4. Arreglo original:", frutasOriginales);
console.log("4. Nuevo arreglo con map:", frutasMayusculas);

const frutasConNa = frutasMayusculas.filter((fruta) => {
  if (fruta.toLowerCase().includes("na")) {
    return true;
  } else {
    return false;
  }
});

console.log("5. Frutas que tiens 'na':", frutasConNa);
