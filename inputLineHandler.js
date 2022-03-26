const operands = require('./operands')

const validOperands = operands.map(i => i.key)
const stack = []

const isNumeric = input => {
  const number = Number(input)

  return !isNaN(number)
}

const clearStack = () => {
  stack.splice(0, stack.length)
}

module.exports = (line, writeHandler = () => {}) => {
  if (line === '') {
    writeHandler('> ')
    return stack
  }

  const chunks = line.split(' ')

  for (const item of chunks) {
    if (isNumeric(item)) {
      stack.push(Number(item))
      continue
    }

    if (validOperands.includes(item)) {
      if (stack.length < 2) {
        writeHandler('Error processing stack. Stack reset.')
        clearStack()
        break
      }

      const reducer = operands.find(i => i.key === item).reducer
      stack.push(stack.splice(-2, 2).reduce(reducer))

      continue
    }

    writeHandler(`Don't know how to handle ${item}. Stack reset.`)
    clearStack()
    break
  }

  if (stack.length) {
    writeHandler(stack[stack.length - 1])
  }

  writeHandler('> ')

  return stack
}
