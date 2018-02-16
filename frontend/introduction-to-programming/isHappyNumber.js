const sumOfSquareDigits = (n) => {
  const string = `${n}`;

  const square = num => num * num;

  const sumSquares = (str, i = str.length - 1) => {
    if (!i) return square(str[i]);

    return square(str[i]) + sumSquares(str, i - 1);

    // return i ? square(str[i]) + sumSquares(str, i - 1) : square(str[i]);
  };

  return sumSquares(string);
};

const isHappyNumber = (n, i = 10) => {
  const nextNum = sumOfSquareDigits(n);
  const result = nextNum === 1;

  return i ? result || isHappyNumber(nextNum, i - 1) : result;
};

export default isHappyNumber;
