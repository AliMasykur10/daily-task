const siswa = [
  { nama: "Andi", nilai: 85, sertifikat: true },
  { nama: "Budi", nilai: 80, sertifikat: true },
  { nama: "Citra", nilai: 90, sertifikat: true },
  { nama: "Dewi", nilai: 60, sertifikat: true },
];

function cariSiswaLulusBersertifikat(siswa, minNilai) {
  let dataSiswa = [];
  for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].nilai > minNilai && siswa[i].sertifikat) {
      dataSiswa.push(siswa[i]);
    }
  }
  return dataSiswa;
}

console.log(cariSiswaLulusBersertifikat(siswa, 75));
