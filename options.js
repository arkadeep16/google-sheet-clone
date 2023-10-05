let activeCell = null
let previousCell = null
let activeCellName = document.getElementById('active-cell-name')
let activeCellOptions = {}
const boldButton = document.getElementById('boldButton')
const italicButton = document.getElementById('italicButton')
const underlineButton = document.getElementById('underlineButton')
const alignButtons = document.querySelectorAll('.text-align')
const selectFont = document.getElementById('selectFont')
const selectFontSize = document.getElementById('selectFontSize')

function onCellFocus(e) {
    activeCell = e.target
    activeCell.style.border = "2px solid green"
    if (previousCell != null) previousCell.style.border = "1px solid rgba(0, 0, 0, 0.105)"
    activeCellName.innerText = e.target.id
    const computedStyle = getComputedStyle(e.target)

    activeCellOptions = {
        fontFamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight === "600",
        isItalicSelected: computedStyle.fontStyle === "italic",
        isUnderLineSelected: computedStyle.textDecoration === "underline solid rgb(0, 0, 0)",
        textAlign: computedStyle.textAlign,
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        fontSize: computedStyle.fontSize,
    }
    selectFont.value = activeCellOptions.fontFamily.replaceAll("\"", "").split(" ").join("")
    selectFontSize.value = activeCellOptions.fontSize.replace('px', '')
    changeIconStyle()
    previousCell = activeCell
}
previousCell = activeCell
function changeIconStyle(){
    if (activeCellOptions.isBoldSelected)
        boldButton.classList.add('selected-option')
    else
        boldButton.classList.remove('selected-option')
    if (activeCellOptions.isUnderLineSelected)
        underlineButton.classList.add('selected-option')
    else
        underlineButton.classList.remove('selected-option')
    if (activeCellOptions.isItalicSelected)
        italicButton.classList.add('selected-option')
    else
        italicButton.classList.remove('selected-option')
    alignButtons.forEach(e => e.classList.remove('selected-option'))
    if (activeCellOptions.textAlign === 'center')
        alignButtons[2].classList.add('selected-option')
    else if (activeCellOptions.textAlign == 'right')
        alignButtons[1].classList.add('selected-option')
    else
        alignButtons[0].classList.add('selected-option')
}

function toggleBold(boldButton) {
    if (activeCell) {
        boldButton.classList.toggle('selected-option')
        if (activeCellOptions.isBoldSelected) {
            activeCell.style.fontWeight = 400
        }
        else {
            activeCell.style.fontWeight = 600
        }
        activeCellOptions.isBoldSelected = !activeCellOptions.isBoldSelected
    }
}
function toggleItalic(italicButton) {
    if (activeCell) {
        italicButton.classList.toggle('selected-option')
        if (!activeCellOptions.isItalicSelected) {
            activeCell.style.fontStyle = 'italic'
        }
        else {
            activeCell.style.fontStyle = "normal"
        }
        activeCellOptions.isItalicSelected = !activeCellOptions.isItalicSelected
    }
}
function toggleUnderline(underlineButton) {
    if (activeCell) {
        underlineButton.classList.toggle('selected-option')
        if (!activeCell.isUnderLineSelected) {
            activeCell.style.textDecoration = "underline"
        }
        else {
            activeCell.style.textDecoration = "none"
        }
        activeCell.isUnderLineSelected = !activeCell.isUnderLineSelected
    }
}


function onClickTextAlign(button) {
    if (activeCell) {
        alignButtons.forEach(e => e.classList.remove('selected-option'))
        button.classList.add('selected-option')
        activeCell.style.textAlign = button.innerText.split("_")[2]
    }
}


function bgColorChange(bgInput) {
    if (activeCell) {
        activeCell.style.backgroundColor = bgInput.value
    }
}
function textColorChange(colorInput) {
    if (activeCell) {
        activeCell.style.color = colorInput.value
    }
}

function changeFont(fontSelect) {
    if (activeCell) {
        activeCell.style.fontFamily = fontSelect.value
    }
}
function changeFontSize(fontSizeSelect) {
    if (activeCell) {
        activeCell.style.fontSize = fontSizeSelect.value + "px"
    }
}