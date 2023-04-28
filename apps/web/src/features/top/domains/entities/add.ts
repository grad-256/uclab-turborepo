export function add(a: number, b: number) {
  const sum = a + b
  if (sum > 10) {
    return 10
  }

  return sum
}

export class RangeError extends Error {}

function checkRange(value: number) {
  if (value < 0 || value > 100) {
    throw new RangeError("入力値は0〜100の間で入力してください")
  }
}

export function addCheck(a: number, b: number) {
  checkRange(a)
  checkRange(b)
  const sum = a + b
  if (sum > 100) {
    return 100
  }
  return sum
}
