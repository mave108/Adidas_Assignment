export default function reduce(inpArr, fn, initial) {
  if (inpArr.length <= 0) {
    return initial;
  } else {
    const [firstElement, ...restElement] = inpArr;
    return reduce(restElement, fn, fn(initial, firstElement));
  }
}
