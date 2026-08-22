function cekPalindrome(p) {
  const kalimatBersih = p.toLowerCase().replace(/\s+/g, "");

  let kiri = 0;
  let kanan = kalimatBersih.length - 1;

  while (kiri < kanan) {
    if (kalimatBersih[kiri] !== kalimatBersih[kanan]) {
      return false;
    }
    kiri++;
    kanan--;
  }
  return true;
}

console.log(cekPalindrome("Ibu Ratna antar ubi"));
