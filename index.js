// Code your solutions in this file
// const names = ["Lisa", "Kaitlin", "Jan"]
// const gift_type = "surprise"

function writeCards(names, gift_type) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${gift_type} gift!`);
    }
    return cards
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer = integer - 1
    }
}
