const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 50 },
];

function ubahGrade(data) {
  let dataSiswa = [];
  for (let i = 0; i < data.length; i++) {
    let grade = "";
    if (data[i].nilai >= 80) {
      grade = "A";
    } else if (data[i].nilai >= 70) {
      grade = "B";
    } else if (data[i].nilai >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }

    let objBaru = { nama: data[i].nama, grade: grade };
    dataSiswa.push(objBaru);
  }

  return dataSiswa;
}

console.log(ubahGrade(siswa));
