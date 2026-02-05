const languge = [
  "english ",
  "amharic",
  "oromic",
  "amharic",
  "somali",
  "somali",
];
const languagesSet = new Set(languge);
// console.log(languagesSet.size);
// console.log(languagesSet);

const counts = [];
const count = {};
for (const l of languagesSet) {
  const filterLang = languge.filter((lan) => lan === l);
  console.log(filterLang);
  counts.push({ lang: l, count: filterLang.length });
}
console.log(counts);

// Other use case of set. For instance to count unique item in an array.
const price = [10, 20, 30, 40, 20, 40, 10, 20, 40, 50, 30, 20, 10];
const setOfPrice = new Set(price);
console.log(setOfPrice);
