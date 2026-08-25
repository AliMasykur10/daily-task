const siswa = [
  { nama: "Andi", nilai: [85, 90, 88] },
  { nama: "Budi", nilai: [70, 75, 72] },
  { nama: "Citra", nilai: [95, 92, 98] },
];

function hitungRataRata(siswa) {
  let dataNilai = [];
  for (let i = 0; i < siswa.length; i++) {
    let nilaiTotal = 0;
    for (let u = 0; u < siswa[i].nilai.length; u++) {
      nilaiTotal += siswa[i].nilai[u];
    }
    let nilaiRataRata = nilaiTotal / siswa[i].nilai.length;

    dataNilai.push({ nama: siswa[i].nama, rataRata: Math.round(nilaiRataRata * 100) / 100 });
  }
  return dataNilai;
}

console.log(hitungRataRata(siswa));
