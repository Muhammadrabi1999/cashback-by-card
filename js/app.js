
const REGULAR_PURCHASE = "regular";
const regularPurchasePercent = 0.01;

const INCREASED_PURCHASE = "increased";
const increasedPurchasePercent = 0.05;

const SPECIAL_PURCHASE = "special";
const scecialPurchasePercent = 0.3;



 const obj1 = {
    sum:1000,
    category:REGULAR
}
const obj2 = {
    sum:1000,
    category:INCREASED
}
const obj3 = {
    sum:1000,
    category:SPECIAL
}

let cashback = (obj1.sum * prosent1) + (obj2.sum * prosent5) + (obj3.sum * prosent30);
console.log(cashback);



const regularPurchase = 200;
const regularPurchasePercent = 0.01;

const increasedPurchase = 100;
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