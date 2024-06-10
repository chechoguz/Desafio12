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