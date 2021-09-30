import map from "./map";
import reduce from "./reduce";
import expect from "./test";
import getProductDetails from "./promise";
import calcString from "./calculator";

console.log(
  "Map function",
  map([1, 2, 3, 4], (number) => number % 2)
);
console.log(
  "Reduce function",
  reduce(
    [
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ],
    (object, [key, value]) => ({ ...object, [key]: value })
  )
);

//test case for reduce
expect(
  reduce([1, 2, 3, 4], (prev, accu) => prev + accu, -5),
  5
);

getProductDetails("1234567")
  .catch((error) => {
    console.log("Error, ", error);
  })
  .then((allData) => {
    console.log("Promise data combine", allData);
  });

//test cases for calculator
expect(calcString("1 + 1"), 2);
expect(calcString("1 - 1"), 0);
expect(calcString("12+ 21"), 33);
expect(calcString("2+ 5-3"), 4);
expect(calcString("2+ 5*3 -6"), 11);
expect(calcString("1"), 1);
expect(calcString("+1"), 1);
expect(calcString("2 * 2"), 4);
expect(calcString("2 * 2.4"), 4.8);
expect(calcString("21 + 1"), 22);
expect(calcString("0 - 1"), -1);
expect(calcString("1 + 1 * 2"), 3);
expect(calcString("1 + 1 / 2"), 1.5);
expect(calcString("1 + + 1"), 2);
// expect(calcString("1 + - 1"), 0); fails
// expect(calcString("+ 1 * 1 + 1 / 2"), 1.5); fails
// expect(calcString("a + 1"), NaN); output: NaN but still fails because NaN === NaN is not true
