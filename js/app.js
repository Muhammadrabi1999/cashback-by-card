
const REGULAR = "regular";
const INCREASED = "increased";
const SPECIAL = "special";
const prosent1= 0.01;
const prosent5 = 0.05;
const prosent30 =0.3;
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


