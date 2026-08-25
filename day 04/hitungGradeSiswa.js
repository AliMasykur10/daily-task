const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 50 },
  { nama: "Eko", nilai: 75 },
];

function hitungGradeSiswa(siswa) {
  let grade = { A: 0, B: 0, C: 0, D: 0 };

  for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].nilai >= 80) {
      grade.A += 1;
    } else if (siswa[i].nilai >= 70) {
      grade.B += 1;
    } else if (siswa[i].nilai >= 60) {
      grade.C += 1;
    } else {
      grade.D += 1;
    }
  }
  return grade;
}

console.log(hitungGradeSiswa(siswa));
