// emojies = {
//  'heart' => '<img src='something' />'
// }

// I (heart) coding
// ( = 2
// ) = 7
// substring 2, 7 => heart

const emojiMap = {}


const solution = (input) => {
    if (input === null) {
        return input
    }

    let index = input.indexOf('(') // -1 if not found

    while (index !== -1) {
        let closing_bracket = input.indexOf(')', index, input.length)
        if (closing_bracket === -1 ){
            break
        }

        emojiString = input.substring(index + 1, closing_bracket)

        emojiImage = emojiMap[emojiString] // undefined

        if (emojiImage) {
            input.replace(startIndex = index, endIndex = closing_bracket + 1, emojiImage) // if index
            index = input.indexOf('(', index + emojiImage.length , input.length)
        } else {
            index = input.indexOf('(', index + 1 , input.length)
        }

        
    }

    return input
}


console.log(solution(' I (heart something else) coding'))