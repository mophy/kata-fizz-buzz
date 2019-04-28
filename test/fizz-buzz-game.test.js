import FizzBuzzGame from '../main/fizz-buzz-game';

let fizzBuzzGame;

describe('FizzBuzzGame', () => {

    beforeEach(() => {
        fizzBuzzGame = new FizzBuzzGame();
    });

    describe('of', () => {
        using([
            [1, 1],
            [3, 'Fizz'],
            [5, 'Buzz'],
            [6, 'Fizz'],
            [10, 'Buzz'],
            [15, 'FizzBuzz'],
            [13, 'Fizz'],
            [52, 'Buzz'],
            [53, 'FizzBuzz'],
        ], (param, result) => {
            it(`should work for ${param}`, () => {
                expect(fizzBuzzGame.of(param)).toEqual(result);
            });
        });
    });

});
