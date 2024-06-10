document.getElementById('pokemonImage').addEventListener('click', function() {
  const img = this;
  if (img.style.border) {
      img.style.border = '';
  } else {
      img.style.border = '2px solid red';
  }
});