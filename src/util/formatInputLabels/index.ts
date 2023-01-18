const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const splitCamelCase = (str: string) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}

export const formatTextFieldLabel = (str: string) => {
  const sentencedStr = splitCamelCase(str)
  const formattedStr = capitalizeFirstLetter(sentencedStr)
  return formattedStr
}
