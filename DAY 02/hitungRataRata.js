const nilai = [
  { nama: "Andi", skor: 80 },
  { nama: "Budi", skor: 70 },
  { nama: "Citra", skor: 90 },
];

function hitungRataRata(nilai) {
  let total = 0;
  for (let i = 0; i < nilai.length; i++) {
    total += nilai[i].skor;
  }

  let rataRata = total / nilai.length;

  return rataRata;
}

console.log(hitungRataRata(nilai));
