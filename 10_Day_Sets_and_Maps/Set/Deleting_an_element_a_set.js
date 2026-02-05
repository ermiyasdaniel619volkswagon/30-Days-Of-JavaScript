// We can delete an element from a set using the delete method.

const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// delete an element
setOfCompanies.delete("Facebook");
console.log(setOfCompanies);
