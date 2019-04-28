export default class FizzBuzzGame {

    of(num) {
        let result = '';
        if (this.numIsFizz(num)) result += 'Fizz';
        if (this.numIsBuzz(num)) result += 'Buzz';
        return result || num;
    }

    print(count, printer) {
        for (let i = 0; i < count; i++)
            printer(this.of(i + 1));
    }

    numIsBuzz(num) {
        return this.numModsOrIncludesX(num, 5);
    }

    numIsFizz(num) {
        return this.numModsOrIncludesX(num, 3);
    }

    numModsOrIncludesX(num, x) {
        return (num % x === 0) || `${num}`.includes(`${x}`);
    }

}
