let red, green, blue, targetRGB;

function generateRandomColor() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  targetRGB = `rgb(${red}, ${green}, ${blue})`;


  document.getElementById('color').value = targetRGB;
  document.getElementById('color').style.backgroundColor = targetRGB; 
}


generateRandomColor();


function checkGuess() {
 
  let guessedRed = parseInt(document.getElementById('merah').value);
  let guessedGreen = parseInt(document.getElementById('hijau').value);
  let guessedBlue = parseInt(document.getElementById('biru').value);

 
  let guessedRGB = `rgb(${guessedRed}, ${guessedGreen}, ${guessedBlue})`;


  document.getElementById('guessedColor').value = guessedRGB;
  document.getElementById('guessedColor').style.backgroundColor = guessedRGB; 

  
  if (guessedRed === red && guessedGreen === green && guessedBlue === blue) {
    document.getElementById('benarsalah').value = "Benar!";
  } else {
    document.getElementById('benarsalah').value = "Coba lagi!";
  }
}


function resetGame() {

  document.getElementById('merah').value = '';
  document.getElementById('hijau').value = '';
  document.getElementById('biru').value = '';
  document.getElementById('benarsalah').value = ''; 
  document.getElementById('guessedColor').value = '';
  document.getElementById('guessedColor').style.backgroundColor = ''; 


  generateRandomColor();
}