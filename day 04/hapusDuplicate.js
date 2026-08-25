const angka = [1, 2, 2, 3, 4, 4, 4, 5, 1];
function hapusDuplicate(data) {
  let filter = [];

  for (let i = 0; i < data.length; i++) {
    if (!filter.includes(data[i])) {
      filter.push(data[i]);
    }
  }

  return filter;
}

console.log(hapusDuplicate(angka));
