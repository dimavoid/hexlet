const invertCase = (str) => {
  let newStr = '';

  const invertChar = (string, i = 0) => {
    if (!string[i]) return newStr;

    const UPPER = string[i].toUpperCase();
    const lower = string[i].toLowerCase();

    newStr += string[i] === UPPER ? lower : UPPER;

    return invertChar(string, i + 1);
  };

  return invertChar(str);
};

export default invertCase;
