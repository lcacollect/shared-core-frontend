export const getDifference = <T extends object>(originalRow: T, currentRow: T) => {
  let changeObject = {} as { [key in keyof T]: T[keyof T] }

  Object.keys(originalRow).forEach((key: string) => {
    const rowKey = key as unknown as keyof T
    if (originalRow[rowKey] !== currentRow[rowKey]) {
      changeObject = { [key]: currentRow[rowKey], ...changeObject }
    }
  })
  return changeObject
}
