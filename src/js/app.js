const regularPurchase = 500;
const regularPurchasePercent = 0.01;

const increasedPurchase = 400;
const increasedPurchasePercent = 0.05;

const specialPurchase = 100;
const scecialPurchasePercent = 0.3;

const cashbackLimit = 3000;
let cashback = regularPurchase * regularPurchasePercent + 
    increasedPurchase * increasedPurchasePercent + 
    specialPurchase * scecialPurchasePercent;

    if (cashback > cashbackLimit) {
    cashback = cashbackLimit
}
console.log(cashback);