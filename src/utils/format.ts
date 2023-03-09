export function formatCount(count: number) {
  if (count > 10 ** 8)
    return `${(count / (10 ** 8)).toFixed(1)}亿`
  else if (count > 10 ** 4)
    return `${(count / (10 ** 4)).toFixed(0)}万`
  else
    return `${count}`
}
