import partOne from './1';
import partTwo from './2';

// With Bun, text files can be imported as strings
import input from './input.txt';

const inputArray = input.split('\n');

const start = Date.now();

const one = partOne(inputArray);

const lap = Date.now();

const two = partTwo(inputArray);

const end = Date.now();

console.log(`🎄 Part One: ${one}`);
console.log(`🎄 Part Two: ${two}`);

console.log(`⏰ The script took ${end - start}ms to run.`);
console.log(`⏰ Part one took ${lap - start}ms to run.`);
console.log(`⏰ Part two took ${end - lap}ms to run.`);
