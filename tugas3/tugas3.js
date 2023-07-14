const divideAndSort = (num) => {
  let result = "";
  arrNum = num.toString().split("0");
  arrNum.map((el) => {
    result += el
      .split("")
      .sort((a, b) => a - b)
      .join("");
  });
  console.log(result);
};
divideAndSort(5956560159466056);
