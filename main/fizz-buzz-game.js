export default class FizzBuzzGame {

    of(n) {
        let result = '';
        if (this.isFizz(n)) result += 'Fizz';
        if (this.isBuzz(n)) result += 'Buzz';
        return result || n;
    }

    isBuzz(n) {
        return this.modOrIncludes(n, 5);
    }

    isFizz(n) {
        return this.modOrIncludes(n, 3);
    }

    modOrIncludes(n, x) {
        return (n % x === 0) || `${n}`.includes(`${x}`);
    }

}
