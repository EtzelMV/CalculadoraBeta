function sumar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Calcular la suma
  const resultado = num1 + num2;

  // Mostrar el resultado en una alerta
  /*alert("Resultado de sumar " + num1 + " + " + num2 + " = " + resultado);*/

  // Mostrar resultado en el div de resultado
  const total = document.getElementById('total');
  total.innerHTML = ` ${num1} + ${num2} = ${resultado}`;
}

function restar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Calcular la resta
  const resultado = num1 - num2;

  // Mostrar el resultado en una alerta
  /*alert("Resultado de restar " + num1 + " - " + num2 + " = " + resultado);*/

  // Mostrar resultado en el div de resultado
  const total = document.getElementById('total');
  total.innerHTML = ` ${num1} - ${num2} = ${resultado}`;
}

function multiplicar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Calcular la multiplicación
  const resultado = num1 * num2;

  // Mostrar el resultado en una alerta
  /*alert("Resultado de multiplicar " + num1 + " * " + num2 + " = " + resultado);*/

  // Mostrar resultado en el div de resultado
  const total = document.getElementById('total');
  total.innerHTML = ` ${num1} * ${num2} = ${resultado}`;
}

function dividir() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Calcular la división
  const resultado = num1 / num2;

  // Mostrar el resultado en una alerta
  /*alert("Resultado de dividir " + num1 + " / " + num2 + " = " + resultado);*/

  // Mostrar resultado en el div de resultado
  const total = document.getElementById('total');
  total.innerHTML = `${num1} / ${num2} = ${resultado}`;
}

// APLICAR JQUERY
$(".btn-info").hover(function(){
  $(this).css({"background-color": "green", "color": "black"});
  }
  , function(){
  $(this).css("background-color", "#0dcaf0");
});