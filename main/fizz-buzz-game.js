export default class FizzBuzzGame {

    of(num) {
        return (this.filterFizz(num) + this.filterBuzz(num)) || num;
    }

    filterBuzz(num) {
        return this.numIsBuzz(num) ? 'Buzz' : '';
    }

    filterFizz(num) {
        return this.numIsFizz(num) ? 'Fizz' : '';
    }

    print(count, printer) {
        [...Array(count)].forEach((k, i) => printer(this.of(i + 1)));
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
