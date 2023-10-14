export const getIdsFromArray = (array: string[]) => {
  const ids: number[] = []
  array &&
    array.forEach(item => {
      const id = item.match(/\d+/)
      id && ids.push(+id)
    })
  return ids
}
