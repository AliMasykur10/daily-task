const transaksi = [
  { tipe: "income", jumlah: 1000000 },
  { tipe: "expense", jumlah: 200000 },
  { tipe: "income", jumlah: 500000 },
  { tipe: "expense", jumlah: 300000 },
  { tipe: "expense", jumlah: 150000 },
];

function buatLaporan(transaksi) {
  let totalPemasukan = 0,
    totalPengeluaran = 0,
    jumlahTransaksiIncome = 0,
    jumlahTransaksiExpense = 0;

  for (let i = 0; i < transaksi.length; i++) {
    if (transaksi[i].tipe === "income") {
      totalPemasukan += transaksi[i].jumlah;
      jumlahTransaksiIncome += 1;
    } else {
      totalPengeluaran += transaksi[i].jumlah;
      jumlahTransaksiExpense += 1;
    }
  }
  const saldoAkhir = totalPemasukan - totalPengeluaran;
  let dataAkhir = { totalPemasukan, totalPengeluaran, saldoAkhir, jumlahTransaksiIncome, jumlahTransaksiExpense };

  return dataAkhir;
}

console.log(buatLaporan(transaksi));

// {
//   totalPemasukan: 1500000,
//   totalPengeluaran: 650000,
//   saldoAkhir: 850000,
//   jumlahTransaksiIncome: 2,
//   jumlahTransaksiExpense: 3,
// }
