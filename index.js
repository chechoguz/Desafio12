document.getElementById('pokemonImage').addEventListener('click', function() {
  const img = this;
  if (img.style.border) {
      img.style.border = '';
  } else {
      img.style.border = '2px solid red';
  }
});

function calculateStickers() {
  const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
  const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
  const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

  const totalStickers = sticker1 + sticker2 + sticker3;

  const message = document.getElementById('message');
  if (totalStickers <= 10) {
      message.textContent = "Llevas " + totalStickers + " stickers";
  } else {
      message.textContent = "Llevas demasiados stickers";
  }
}

function verifyPassword() {
  const digit1 = document.getElementById('digit1').value;
  const digit2 = document.getElementById('digit2').value;
  const digit3 = document.getElementById('digit3').value;

  const pass = digit1 + digit2 + digit3;

  let message = "password incorrecto";
  if (pass === "911") {
      message = "password 1 correcto";
  } else if (pass === "714") {
      message = "password 2 es correcto";
  }

  document.getElementById('result').textContent = message;
}