export default function map(inpArr, fn, outArr = []) {
  if (inpArr.length <= 0) {
    return outArr;
  } else {
    const [firstElement, ...restElement] = inpArr;
    return map(restElement, fn, [...outArr, fn(firstElement)]);
  }
}
