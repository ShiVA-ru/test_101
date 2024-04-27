function getComputersCount(computersCount) {
    if (computersCount < 0) {
        throw new Error('количество компьютеров не должно быть отрицательным значением');
    }

    const stringBase = 'компьютер';
    let stringEnding = '';

    if (computersCount >= 5 && computersCount <= 20) {
        stringEnding = 'ов';
    } else {
        switch (computersCount % 10) {
            case 2:
            case 3:
            case 4:
                stringEnding = 'а';
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                stringEnding = 'ов';
                break;
        }
    }

    return `${computersCount} ${stringBase}${stringEnding}`;
}