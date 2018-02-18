export const cons = (a, b) => (2 ** a) * (3 ** b);

// const fact = (num, base) => {
//   const iter = (num, acc) => num % base ? acc : iter(num / base, acc + 1);

//   return iter(num, 0);
// };

const fact = (num, base, acc = 0) => num % base ? acc : fact(num / base, base, acc + 1);

export const car = pair => fact(pair, 2);
export const cdr = pair => fact(pair, 3);

// Teacher's decision
// const factor = (base, value) => {
//   if (value % base !== 0) {
//     return 0;
//   }
//   return 1 + factor(base, value / base);
// };

// export const cons = (a, b) => (2 ** a) * (3 ** b);
// export const car = pair => factor(2, pair);
// export const cdr = pair => factor(3, pair);
