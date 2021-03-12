let bill = 55.60
let tip = (bill * 15) / 100
let total = (bill + tip).toFixed(2)

document.write(`<p> Your food bill is ${bill} with a tip of ${tip} giving a grand total of ${total} </p>`)
