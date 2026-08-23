function cariTerbesar(n) {
  let terbesar = n[0];

  for (let i = 0; i < n.length; i++) {
    if (terbesar < n[i]) {
      terbesar = n[i];
    }
  }
  return terbesar;
}

console.log(cariTerbesar([2, 2, 3, 9, 5, 10, 7, 8]));
