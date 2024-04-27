function getSpaces(num, maxNum) {
    const numDigitCount = Math.floor(Math.log10(num) + 1);
    const maxNumDigitCount = Math.floor(Math.log10(maxNum) + 1);

    let spaces = '_';

    for (let i = 0; i < maxNumDigitCount - numDigitCount; i++) {
        spaces += '_';
    }

    return spaces;
}

function getMultiplicationTable(num) {
    if (num < 1) return;

    const maxNum = num * num;

    for (let i = 0; i <= num; i++) {
        let tableLine = '';

        for (let j = 0; j <= num; j++) {
            if (i === 0 && j === 0) {
                tableLine += getSpaces(1, maxNum);
                tableLine += (maxNum < 10) ? ' ' : '';
            } else if (i === 0) {
                tableLine += getSpaces(j, maxNum) + j;
            } else if (j === 0) {
                tableLine += getSpaces(i, num) + i;
            } else {
                let multiple = i * j;
                tableLine += getSpaces(multiple, maxNum) + multiple;
            }
        }

        console.log(tableLine);
    }
}