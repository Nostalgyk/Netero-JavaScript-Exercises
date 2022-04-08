//Exercício 01
function callAlert() {
  alert('Olá, mundo!');
}

//Exercício 02
function doSomeCalc() {
  let txt1 = document.getElementById('input1').value;
  let txt2 = document.getElementById('input2').value;

  if (txt1 == '' || txt2 == '') {
    alert('Preencha todos os campos!');
  } else {
    document.getElementById('ans-input').value =
      parseInt(txt1) + parseInt(txt2);

    const inputs = document.querySelectorAll('#input1, #input2');

    inputs.forEach(input => {
      input.value = '';
    });

    txt1 = 0;
    txt2 = 0;
  }
}

//Exercício 03
function verifyText() {
  let txtInput = document.getElementById('ans-input2').value;
  alert('A quantidade de caracteres do texto é: ' + txtInput.length);
}

function clearText() {
  document.getElementById('ans-input2').value = '';
}
