// IMPORT MODULES under test here:
import { compareThrow } from '../utils.js';

const test = QUnit.test;

test('Should take in two of the same throws and return draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedB = 'draw';
    const expectedP = 'draw';
    const expectedS = 'draw';
    
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
    const expectedB = 'win';
    const expectedP = 'win';
    const expectedS = 'win';
    
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
    const expectedB = 'lose';
    const expectedP = 'lose';
    const expectedS = 'lose';
    
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