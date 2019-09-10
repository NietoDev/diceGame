let dado1 = document.querySelector("img#dado1");
let dado2 = document.querySelector("img#dado2");
let botao = document.querySelector("button#btnJogar");
let h1 = document.querySelector("h1#myh1");
let p1 = document.querySelector("p#player1");
let p2 = document.querySelector("p#player2");

let myImages = new Array();
myImages.push("images/dado1.png");
myImages.push("images/dado2.png");
myImages.push("images/dado3.png");
myImages.push("images/dado4.png");
myImages.push("images/dado5.png");
myImages.push("images/dado6.png");

botao.onclick = function() {
  let randomImage1 = myImages[Math.floor(Math.random() * myImages.length)];
  let randomImage2 = myImages[Math.floor(Math.random() * myImages.length)];

  function pickimg1() {
    dado1.src = randomImage1;
  }

  function pickimg2() {
    dado2.src = randomImage2;
  }

  pickimg1();
  pickimg2();

  let n1 = Number(myImages.indexOf(randomImage1));
  let n2 = Number(myImages.indexOf(randomImage2));

  if (n1 > n2) {
    h1.innerHTML = `O Player 1 Ganhou!`;
    p1.innerHTML = `Vitória !`;
    p2.innerHTML = `Deu Ruim ! <br> `;
  } else if (n2 == n1 || n1 == n2) {
    h1.innerHTML = `Empate !`;
    p1.innerHTML = `Ixi... de novo !`;
    p2.innerHTML = `Ixi... de novo !`;
  } else {
    h1.innerHTML = `O Player 2 Ganhou!`;
    p2.innerHTML = `Vitória !`;
    p1.innerHTML = `Deu Ruim ! <br> `;
  }
};
