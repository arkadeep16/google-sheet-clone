const header = document.getElementById('header')
const body = document.getElementById('body')

// create columns from 'A' to 'Z' cell
for (let i = 65; i <= 90; i++) {
    const b = document.createElement('b')
    b.innerText = String.fromCharCode(i)
    header.appendChild(b)
}

// create and append row
for (let rowNumber = 1; rowNumber <= 100; rowNumber++) {
    const serialNumber = document.createElement('b')
    serialNumber.innerText = rowNumber
    const row = document.createElement('div')
    row.appendChild(serialNumber)
    for (let column = 65; column <= 90; column++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        cell.contentEditable = true
        cell.spellcheck = false
        cell.id = String.fromCharCode(column)+rowNumber
        cell.addEventListener('focus', onCellFocus)
        row.appendChild(cell)
    }
    body.appendChild(row)
}
