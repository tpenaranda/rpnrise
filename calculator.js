#!/usr/bin/node

const inputLineHandler = require('./inputLineHandler')
const readlineModule = require('readline');

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

const writeOut = (data) => {
  const text = String(data)
  const breakLine = !text.endsWith(' ')

  process.stdout.write(breakLine ? `${text} \n` : text)
}

readline.on('close', () => writeOut('Bye!'))
readline.on('line', line => {
  if (line === 'q') {
    process.exit(0)
  }

  inputLineHandler(line, writeOut)
})

writeOut('> ')

