function isPalindrom(kalimat) {
  const pecahan = kalimat.toLowerCase().replace(/\s+/g, "").split("");

  let kiri = 0;
  let kanan = pecahan.length - 1;

  while (kiri < kanan) {
    if (pecahan[kiri] !== pecahan[kanan]) {
      return false;
    }
    kiri++;
    kanan--;
  }

  return true;
}

console.log(isPalindrom("Kasur ini rusak"));
