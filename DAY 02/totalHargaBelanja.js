const items = [
  { nama: "Roti", harga: 15000, jumlah: 2 },
  { nama: "Susu", harga: 20000, jumlah: 1 },
  { nama: "Telur", harga: 30000, jumlah: 4 },
];

function totalHargaBelanja(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    const totalPerBarang = items[i].harga * items[i].jumlah;
    total += totalPerBarang;
  }
  return total;
}

console.log(totalHargaBelanja(items));
