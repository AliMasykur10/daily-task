const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 50 },
];

function ubahGrade(data) {
  let dataSiswa = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].nilai >= 80) {
      data[i].nilai = "A";
      dataSiswa.push(data[i]);
    } else if (data[i].nilai >= 70) {
      data[i].nilai = "B";
      dataSiswa.push(data[i]);
    } else if (data[i].nilai >= 60) {
      data[i].nilai = "C";
      dataSiswa.push(data[i]);
    } else {
      data[i].nilai = "D";
      dataSiswa.push(data[i]);
    }
  }

  return dataSiswa;
}

console.log(siswa);
