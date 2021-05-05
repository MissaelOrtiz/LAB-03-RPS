// IMPORT MODULES under test here:
import { compareThrow } from '../example.js';

const test = QUnit.test;

test('Should return 0 if the userthrow is the same as oppthrow', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareThrow('Shears', 'Shears');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
