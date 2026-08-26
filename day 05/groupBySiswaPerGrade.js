const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 50 },
  { nama: "Eko", nilai: 75 },
];

function groupBySiswaPerGrade(siswa) {
  let dataSiswa = { A: [], B: [], C: [], D: [] };

  for (let i = 0; i < siswa.length; i++) {
    let grade;
    if (siswa[i].nilai >= 80) {
      grade = "A";
    } else if (siswa[i].nilai >= 70) {
      grade = "B";
    } else if (siswa[i].nilai >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }
    let penampung = { nama: siswa[i].nama, nilai: siswa[i].nilai };
    dataSiswa[grade].push(penampung);
  }
  return dataSiswa;
}

console.log(groupBySiswaPerGrade(siswa));
