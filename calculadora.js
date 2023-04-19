
function sumar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Validar que los valores no vengan vacíos
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calcular la suma
    const resultado = num1 + num2;

    // Mostrar el resultado en una alerta
    /*alert("Resultado de sumar " + num1 + " + " + num2 + " = " + resultado);*/

    // Mostrar resultado en el div de resultado
    const total = document.getElementById('total');
    total.innerHTML = ` ${num1} + ${num2} = ${resultado}`;
  } else {
    alert("Por favor ingresa valores en número 1 y en número 2");
  }
}

function restar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Validar que los valores no vengan vacíos
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calcular la resta
    const resultado = num1 - num2;

    // Mostrar el resultado en una alerta
    /*alert("Resultado de restar " + num1 + " - " + num2 + " = " + resultado);*/

    // Mostrar resultado en el div de resultado
    const total = document.getElementById('total');
    total.innerHTML = ` ${num1} - ${num2} = ${resultado}`;
  } else {
    alert("Por favor ingresa valores en número 1 y en número 2");
  }
}

function multiplicar() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Validar que los valores no vengan vacíos
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calcular la multiplicación
    const resultado = num1 * num2;

    // Mostrar el resultado en una alerta
    /*alert("Resultado de multiplicar " + num1 + " * " + num2 + " = " + resultado);*/

    // Mostrar resultado en el div de resultado
    const total = document.getElementById('total');
    total.innerHTML = ` ${num1} * ${num2} = ${resultado}`;
  } else {
    alert("Por favor ingresa valores en número 1 y en número 2");
  }
}

function dividir() {
  // Obtener los valores de los inputs
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);

  // Validar que los valores no vengan vacíos
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calcular la división
    const resultado = num1 / num2;

    // Mostrar el resultado en una alerta
    /*alert("Resultado de dividir " + num1 + " / " + num2 + " = " + resultado);*/

    // Mostrar resultado en el div de resultado
    const total = document.getElementById('total');
    total.innerHTML = `${num1} / ${num2} = ${resultado}`;
  } else {
    alert("Por favor ingresa valores en número 1 y en número 2");
  }
}

// APLICAR JQUERY
$(".btn-info").hover(function(){
  $(this).css({"background-color": "green", "color": "black"});
  }
  , function(){
  $(this).css("background-color", "#0dcaf0");
});