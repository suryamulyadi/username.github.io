document.getElementById('decisionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Mengambil nilai input
  var taste = parseInt(document.getElementById('taste').value);
  var texture = parseInt(document.getElementById('texture').value);
  var color = parseInt(document.getElementById('color').value);
  
  // Logika Keputusan
  var totalScore = taste + texture + color;
  var result = '';

  if (totalScore >= 25) {
    result = 'Bahan-bahan tersebut layak digunakan untuk membuat es pepaya.';
  } else {
    result = 'Bahan-bahan tersebut tidak layak digunakan untuk membuat es pepaya.';
  }
  
  // Menampilkan hasil
  document.getElementById('result').innerHTML = result;
});
