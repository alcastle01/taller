// Obtener elementos del DOM
const valorInput = document.getElementById("valorInput");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoElement = document.getElementById("resultado");
const valorInput1 = document.getElementById("valorInput1");
const calcularBtn1 = document.getElementById("calcularBtn1");
const resultadoElement1 = document.getElementById("resultado1");
const valorInput2 = document.getElementById("valorInput2");
// const calcularBtn2 = document.getElementById("calcularBtn2");
const resultadoElement2 = document.getElementById("resultado2");
const valorInput3 = document.getElementById("valorInput2");
const resultadoElement3 = document.getElementById("resultado3");

const valorInput4 = document.getElementById("valorInput4");
const calcularBtn4 = document.getElementById("calcularBtn4");
const resultadoElement4 = document.getElementById("result2");
// Agregar evento de clic al botón
calcularBtn.addEventListener("click", () => {
  // Obtener el valor ingresado en la caja de texto
  const valor = parseFloat(valorInput.value);

  let suma = 0;
  let i = 1;

  while (i <= valor) {
    suma += i;
    i++;
  }

  resultadoElement.textContent = `El cuadrado de ${suma}`;
});

calcularBtn1.addEventListener("click", () => {
  const valor = parseFloat(valorInput1.value);
  if (valor % 2 == 0) {
    resultadoElement1.textContent = `Buena mi chan si es par`;
  } else {
    resultadoElement1.textContent = `suerte! papá no es par`;
  }
});

// calcularBtn2.addEventListener("click", () => {
//   const edad = parseFloat(valorInput2.value);
//   const genero = parseText(valorInput3.value);

//   const premio = "";

//   // Verificar las condiciones y asignar el premio correspondiente
//   if (edad < 10) {
//     resultadoElement2.textContent = "un jugo chan";
//   } else if (edad >= 18) {
//     resultadoElement2.textContent = "una cerveza chan";

//     if (genero === "M") {
//       resultadoElement2.textContent = +"con pizza chan";
//     } else if (genero === "F") {
//       resultadoElement3.textContent = +"ademas con algo ms chan";
//     }
//   }
// });

function checkPrize() {
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  let prize = "";

  if (age < 10) {
    prize = "un jugo";
  } else if (age >= 18) {
    prize = "una cerveza";
  }

  if (gender === "female") {
    prize += " y una porción de pizza Hawaiana";
  } else if (gender === "male") {
    prize += " y una porción de pizza tres carnes";
  }

  const resultElement = document.getElementById("result");
  if (prize) {
    resultElement.textContent = `¡Felicidades chan! Usted ha ganado ${prize}`;
  } else {
    resultElement.textContent = "Lo sentimos, no cumple chan";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const productoSelect = document.getElementById("producto");
  const agregarButton = document.getElementById("agregar");
  const pagarButton = document.getElementById("pagar");
  const itemsList = document.getElementById("items");
  const totalAmount = document.getElementById("total-amount");

  let total = 0;
  const orden = [];

  agregarButton.addEventListener("click", function () {
    const selectedProduct = productoSelect.value;
    const productPrice = parseFloat(
      productoSelect.options[productoSelect.selectedIndex].textContent.match(
        /\d+(\.\d+)?/
      )[0]
    );

    orden.push(selectedProduct);
    total += productPrice;

    const listItem = document.createElement("li");
    listItem.textContent = selectedProduct;
    itemsList.appendChild(listItem);

    totalAmount.textContent = total.toFixed(2);
  });

  pagarButton.addEventListener("click", function () {
    alert(
      `Total a pagar: $${total.toFixed(2)}\n\nProductos:\n${orden.join("\n")}`
    );
  });
});

function mostrarTabla() {
  var numero = parseInt(document.getElementById("numero").value);
  var tablaBody = document.getElementById("tablaBody");
  var total = 0;

  tablaBody.innerHTML = ""; // Limpiar la tabla previa

  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    total += resultado;

    var fila = document.createElement("tr");
    var celdaMultiplicador = document.createElement("td");
    var celdaResultado = document.createElement("td");

    celdaMultiplicador.textContent = i;
    celdaResultado.textContent = resultado;

    fila.appendChild(celdaMultiplicador);
    fila.appendChild(celdaResultado);

    tablaBody.appendChild(fila);
  }

  var totalElement = document.getElementById("total");
  totalElement.textContent = "Total de las multiplicaciones: " + total;
}

calcularBtn4.addEventListener("click", () => {
  const valor = parseInt(valorInput4.value);
  resultadoElement4.textContent = "que pasa chan";
  
});
