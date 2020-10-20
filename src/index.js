const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
},
    BINARY_TABLE = {
    '10': '.',
    '11': '-'
};

function decode(expr) {
    let arrTeens = [],
        arrFinal = [];

    for (let i = 0; i < expr.length; i+=10) {
        let element = expr.substring(i, i+10);
        if (element !== '**********') {
            element = parseInt(element).toString();
        }
        arrTeens.push(element);
    }

    for (let i = 0; i < arrTeens.length; i++) {
        let elementArrTeens = arrTeens[i];
        if (elementArrTeens !== '**********') {
            arrTeens[i] = '';
            for (let j = 0; j < elementArrTeens.length; j+=2) {
                let keyValue = elementArrTeens.substring(j, j+2);
                arrTeens[i] += BINARY_TABLE[keyValue];
            }
        }
    }

    for (let i = 0; i < arrTeens.length; i++) {
        if (arrTeens[i] !== '**********') {
            arrFinal.push(MORSE_TABLE[arrTeens[i]]);
        } else {
            arrFinal.push(' ');
        }
    }

    return arrFinal.join('');
}

module.exports = {
    decode
}