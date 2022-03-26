module.exports = [
  {
    key: '+',
    reducer: (total, i) => total + i,
  },
  {
    key: '-',
    reducer: (total, i) => total - i,
  },
  {
    key: '*',
    reducer: (total, i) => total * i,
  },
  {
    key: '/',
    reducer: (total, i) => total / i,
  },
]
