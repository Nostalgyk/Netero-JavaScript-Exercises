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

//Exercício 04
function turnOnOff() {
  let switchLight = document.querySelector('#switch').checked;

  if (switchLight == true) {
    document.getElementById('bulb').src =
      'https://cdn-icons.flaticon.com/png/512/2988/premium/2988036.png?token=exp=1649559229~hmac=ee4a730a3435afa64768bf77f0057cc0';
  } else {
    document.getElementById('bulb').src =
      'https://cdn-icons.flaticon.com/png/512/2987/premium/2987972.png?token=exp=1649551341~hmac=3a6e030b484ffb60b95ccc9d84838177';
  }
}
