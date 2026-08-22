function hitungGenapGanjil(n) {
  let ganjil = 0;
  let genap = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i, "genap");
      genap++;
    } else {
      console.log(i, "ganjil");
      ganjil++;
    }
  }
  console.log(`Total genap: ${genap}, Total ganjil: ${ganjil}`);
}

hitungGenapGanjil(4);
