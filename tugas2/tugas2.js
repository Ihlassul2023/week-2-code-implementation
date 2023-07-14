const pijarFood = (harga, voucher, jarak, pajak) => {
  let potongan = 0;
  let biayaAntar = jarak == 1 ? 3000 : 5000 + (jarak - 2) * 3000;
  let totalPajak = pajak ? harga * 0.05 : 0;
  if (voucher === "PIJARFOOD5") {
    if (harga >= 50000) {
      potongan = 0.5 * harga;
      if (potongan > 50000) {
        potongan = 50000;
      }
    }
  } else if (voucher === "DITRAKTIRPIJAR") {
    if (harga >= 25000) {
      potongan = 0.6 * harga;
      if (potongan > 60000) {
        potongan = 60000;
      }
    }
  }
  console.log(`
Harga       : ${harga}
Potongan    : ${potongan}
Biaya antar : ${biayaAntar}
Pajak       : ${totalPajak}
Sub total   : ${harga - potongan + biayaAntar + totalPajak} (harga - potongan + biaya antar + pajak)
`);
};
pijarFood(75000, "PIJARFOOD5", 2, true);
