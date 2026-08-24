const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
];

function cariSiswa(siswa, nama) {
  for (let i = 0; i < siswa.length; i++) {
    if (nama === siswa[i].nama) {
      return siswa[i];
    }
  }
  return null;
}

console.log(cariSiswa(siswa, "Andii"));
