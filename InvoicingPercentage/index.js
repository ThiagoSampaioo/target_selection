const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    OTHERS: 19849.53,
};
let sum = 0;
Object.values(data).forEach((value) => (sum += value));

let percentages = {};
Object.entries(data).forEach(([state, value]) => {
    percentages[state] = ((value / sum) * 100).toFixed(2);
});

let SP = percentages.SP;
let RJ = percentages.RJ;
let MG = percentages.MG;
let ES = percentages.ES;
let OTHERS = percentages.OTHERS;
console.log(`
As porcentagens referente aos seguintes estados :
SP: ${SP}%
RJ: ${RJ}%
MG: ${MG}%
ES: ${ES}%
OTHERS: ${OTHERS}%`)
