function cetakSegitiga(n) {
  for (let i = 1; i <= n; i++) {
    let hasil = "";
    for (let u = 1; u <= i; u++) {
      hasil = hasil + "*";
    }

    console.log(hasil);
  }
}

cetakSegitiga(4);
