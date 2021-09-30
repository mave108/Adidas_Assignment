export default function expect(result, expected) {
  const correct = !isNaN(result) && result === expected;
  if (correct) {
    console.info("Correct!");
  } else {
    console.error(`Error: ${result} does not match ${expected}`);
  }
}
