function getArrayDividers(arr) {
    const minElemet = Math.abs(Math.min(...arr));
    const dividers = [];

    for (let i = 2; i <= minElemet; i++) {
        const isDivided = arr.every((elem) => elem % i === 0);
        if (isDivided) dividers.push(i);
    }

    return dividers;
}