/**********************************************
**                DEFICIONES                 **
**********************************************/
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');

/**********************************************
**                 FUNCIONES                 **
**********************************************/
function limpiarEntradaUser() {
  const num1Limpio = num1.value.trim();
  const num2Limpio = num2.value.trim();
  
  // clausula de guarda (guard clause)
  if (num1Limpio === '' || num2Limpio === '') return;

  const num1Number = Number(num1Limpio)
  const num2Number = Number(num2Limpio)

  return [num1Number, num2Number];
}

function mostrarResultado(result) {
  resultado.textContent = result;
}


function sumar() {
  const numeros = limpiarEntradaUser();
  mostrarResultado(numeros[0] + numeros[1]);
}
function restar() {
  const numeros = limpiarEntradaUser();
  mostrarResultado(numeros[0] - numeros[1]);
}
function multiplicar() {
  const numeros = limpiarEntradaUser();
  mostrarResultado(numeros[0] * numeros[1]);
}
function dividir() {
  const numeros = limpiarEntradaUser();
  if (numeros[1] === 0) {
    mostrarResultado('ERROR');
  } else {
    mostrarResultado(numeros[0] / numeros[1]);
  }
}
 