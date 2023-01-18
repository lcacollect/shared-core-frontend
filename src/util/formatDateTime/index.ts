export const formatDateAsString = (date: Date) => {
  const stringifiedDate = date.toUTCString()
  return stringifiedDate
}

export const formatStringAsDate = (stringifiedDate: string) => {
  const date = new Date(stringifiedDate)
  return date
}
