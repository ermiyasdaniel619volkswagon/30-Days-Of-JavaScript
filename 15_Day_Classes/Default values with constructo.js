// The constructor function properties may have a default value like other regular functions.
class CAR {
  constructor(
    name = "Ford",
    type,
    production_date = "2026",
    price,
    Avelablity = true,
  ) {
    this.name = name;
    this.type = type;
    this.production_date = production_date;
    this.price = price;
    this.Avelablity = Avelablity;
  }
}
const my_car = new CAR();
console.log(my_car);
