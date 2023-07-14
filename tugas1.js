//deteksi palindrom
const deteksiPalindrom = (str) => {
  if (typeof str === "number") {
    console.log("input harus string");
    return;
  } else {
    return str.split("").reverse().join("").toLowerCase() === str.toLowerCase() ? "palindrom" : "bukan palindrom";
  }
};
console.log(deteksiPalindrom("Malam"));

//reverse word
const reverseWord = (str) => {
  if (typeof str === "number") {
    console.log("input harus string");
    return;
  } else {
    return str.split(" ").reverse().join(" ");
  }
};
console.log(reverseWord("saya belajar javascript"));
