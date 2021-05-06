// IMPORT MODULES under test here:
import { compareThrow } from '../utils.js';

const test = QUnit.test;

test('Should take in two of the same throws and return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedB = 0;
    const expectedP = 0;
    const expectedS = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualB = compareThrow('Bolder', 'Bolder');
    const actualP = compareThrow('Parchment', 'Parchment');
    const actualS = compareThrow('Shears', 'Shears');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualB, expectedB);
    expect.equal(actualP, expectedP);
    expect.equal(actualS, expectedS);
});

test('Should take in a winning userThrow and losing oppThrow and return +1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedB = +1;
    const expectedP = +1;
    const expectedS = +1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualB = compareThrow('Bolder', 'Shears');
    const actualP = compareThrow('Parchment', 'Bolder');
    const actualS = compareThrow('Shears', 'Parchment');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualB, expectedB);
    expect.equal(actualP, expectedP);
    expect.equal(actualS, expectedS);
});

test('Should take in a losing userThrow and wining oppThrow and return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedB = -1;
    const expectedP = -1;
    const expectedS = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualB = compareThrow('Bolder', 'Parchment');
    const actualP = compareThrow('Parchment', 'Shears');
    const actualS = compareThrow('Shears', 'Bolder');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualB, expectedB);
    expect.equal(actualP, expectedP);
    expect.equal(actualS, expectedS);
});