const isAnagrams = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let arrayS1 = string1.split("");
  let arrayS2 = string2.split("");

  arrayS1.forEach((char) => {
    let index = arrayS2.findIndex((x) => x === char);
    if (index !== -1) arrayS2.splice(index, 1);
  });

  return arrayS2.length === 0;
};

console.log(isAnagrams("tommarvoloriddle", "iamlordvoldemort"));
console.log(isAnagrams("harrypotter", "dracomalfoy"));
