export const getAmounts = (arr)=> arr.map((a)=> parseFloat(Math.round(a.amount * 100) / 100))

export const getTotal = (arr)=> +getAmounts(arr).reduce((prev, curr) => prev + curr).toFixed(2)
