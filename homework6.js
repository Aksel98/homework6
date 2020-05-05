// 1
function areUniqueElements(arr) {
    let uniqueEls = new Set()
    for (let el of arr) {
        uniqueEls.add(el)
    }
    return arr.length === uniqueEls.size
}

// 2
function sumOfEvenQuadratic(arr) {
    return arr.filter(el => el % 2 === 0).reduce((cur, el) => Math.pow(el, 2) + cur, Math.pow(0, 2))
}

// 3
function isPalindrome(str) {
    let left = str.substring(0, str.length / 2)
    let right = ''
    if (str.length % 2 === 0) {
        right = str.substring(str.length / 2, str.length).split('').reverse().join('')
    } else {
        right = str.substring((str.length / 2) + 1, str.length).split('').reverse().join('')
    }
    return left === right
}

// 4
function getAnagramWords(word, arr) {
    let anagramWords = []
    arr.forEach(el => {
        if (word.split('').sort().join('') === el.split('').sort().join('')) {
            anagramWords.push(el)
        }
    })
    return anagramWords
}
