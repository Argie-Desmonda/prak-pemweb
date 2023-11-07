//Fungsi Untuk Menghitung Jumlah Bilangan Ganjil dan Genap
function hitungGanjilGenap() {
  //Mengambil nilai input dari user
  var inputNumber = document.getElementById("inputNumber").value;

  //Cek apakah bilangan input negatif
  if (inputNumber > 0) {
    //Inisialisasi awal jumlah bilangan ganjil dan genap
    var jumlahGanjil = 0;
    var jumlahGenap = 0;

    //Perulangan untuk menghitung bilangan ganjil genap
    for (var i = 1; i <= inputNumber; i++) {
      if (i % 2 === 0) {
        jumlahGenap++;
      } else {
        jumlahGanjil++;
      }
    }

    //Menampilkan jumlah bilangan ke user
    var hasilGanjil = document.getElementById("hasilGanjil");
    hasilGanjil.textContent = "Jumlah bilangan ganjil: " + jumlahGanjil;

    var hasilGenap = document.getElementById("resultGenap");
    hasilGenap.textContent = "Jumlah bilangan genap: " + jumlahGenap;
  } else {
    alert("Masukkan bilangan bulat positif yang valid!");
  }
}
