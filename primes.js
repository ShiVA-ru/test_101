function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getArrayOfPrime(min, max) {
    let primes = [];

    if (min > max) {
        [min, max] = [max, min];
    }
    if (max <= 0) {
        return primes;
    }
    if (min <= 0) min = 1;

    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}