const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
];

function siswaLulus(siswa) {
  let namaSiswa = [];
  for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].nilai >= 80) {
      namaSiswa.push(siswa[i].nama);
    }
  }

  return namaSiswa;
}

console.log(siswaLulus(siswa));
