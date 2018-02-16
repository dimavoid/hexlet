const sumSquareDifference = (n) => {
  const sumSquares = (num) => {
    if (num === 1) return 1;

    return (num * num) + sumSquares(num - 1);
  };

  const squareSum = (num) => {
    const sum = (number) => {
      if (number === 1) return 1;

      return number + sum(number - 1);
    };

    return sum(num) * sum(num);
  };

  return squareSum(n) - sumSquares(n);
};

export default sumSquareDifference;
