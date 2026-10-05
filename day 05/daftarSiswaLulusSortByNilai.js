const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 75 },
];

function daftarSiswaLulusSortByNilai(siswa, nilaiMin) {
  let dataSiswa = [];

  for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].nilai >= nilaiMin) {
      let grade = "";
      if (siswa[i].nilai >= 80) {
        grade = "A";
      } else if (siswa[i].nilai >= 70) {
        grade = "B";
      } else if (siswa[i].nilai >= 60) {
        grade = "C";
      } else grade = "D";

      let objSiswa = { nama: siswa[i].nama, nilai: siswa[i].nilai, grade };
      dataSiswa.push(objSiswa);
    }
  }

  return dataSiswa;
}
console.log(daftarSiswaLulusSortByNilai(siswa, 75));

// [
//   { nama: "Citra", nilai: 90, grade: "A" },
//   { nama: "Andi", nilai: 85, grade: "A" },
//   { nama: "Dewi", nilai: 75, grade: "B" },
// ]
