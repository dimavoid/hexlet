const Zero = () => z => z;

const Succ = n => s => z => s(n(s)(z));

export { Zero, Succ };
