const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 91 },
];

function siswaUnggul(siswa) {
  let nilaiTertinggi = 0;
  let dataSiswa;
  for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].nilai > nilaiTertinggi) {
      nilaiTertinggi = siswa[i].nilai;
      dataSiswa = { nama: siswa[i].nama, nilai: siswa[i].nilai };
    }
  }
  return dataSiswa;
}

console.log(siswaUnggul(siswa));
