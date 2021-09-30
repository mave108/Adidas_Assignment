const isValidOperator = ["*", "/", "-", "+"];

export default function calcString(calculation) {
  const operators = calculation
    .replace(/[\d.,]/g, "")
    .split("")
    .filter((opt) => opt !== " ");

  const operands = calculation
    .replace(/[+/*-]/g, ",")
    .replace(/\s/g, "")
    .toString()
    .split(",")
    .map(parseFloat)
    .filter((num) => !isNaN(num));

  if (
    operators.length > operands.length ||
    operators.filter((opt) => !isValidOperator.includes(opt)).length >= 1
  ) {
    return NaN;
  }

  while (operators.includes("*")) {
    let opIndex = operators.indexOf("*");
    operands.splice(opIndex, 2, operands[opIndex] * operands[opIndex + 1]);
    operators.splice(opIndex, 1);
  }

  while (operators.includes("/")) {
    let opIndex = operators.indexOf("/");
    operands.splice(opIndex, 2, operands[opIndex] / operands[opIndex + 1]);
    operators.splice(opIndex, 1);
  }
  let result = operands[0];
  if (operands.length > 1) {
    for (let i = 0; i < operators.length; i++) {
      operators[i] === "+"
        ? (result += isNaN(operands[i + 1]) ? 0 : operands[i + 1])
        : (result -= isNaN(operands[i + 1]) ? 0 : operands[i + 1]);
    }
  }
  return result;
}
