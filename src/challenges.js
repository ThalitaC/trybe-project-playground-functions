// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringArrays = string.split(' ');
  return stringArrays;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
  let concat = `${lastName}, ${firstName}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6 //found about the sort and reverse method on https://stackoverflow.com/questions/46640420/how-to-find-number-of-occurrence-of-highest-element-in-an-javascript-array/46640571
function highestCount(numbers) {
  numbers.sort().reverse();
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === numbers[0]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7 //found about an approach to the problem on this article https://javascript.plainenglish.io/javascript-algorithm-cats-and-a-mouse-fd60fb1811ba
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 //used a tip from Patrick Morais about how to reduce complexity
function conditionsFizzBuzz(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return 'fizzBuzz';
  } if (numbers % 3 === 0) {
    return 'fizz';
  } if (numbers % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    result.push(conditionsFizzBuzz(arrayNumbers[index]));
  }
  return result;
}

// Desafio 9 //learned about replaceAll on the documentation at https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
function encode(string) {
  let vowelsToNumber = string.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return vowelsToNumber;
}

function decode(string) {
  let numbersToVowels = string.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return numbersToVowels;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
