//R8
// function make_withdraw(balance, pw) {
//     let pwlimit = 3;
//     function withdraw(amount, inputpw) {
//         if (pwlimit === 0){
//             return "Account disabled";
//         } else if (pw !== inputpw){
//             pwlimit = pwlimit - 1;
//             return "Wrong password; no withdraw";
//         } else {
//             pwlimit = 3; //reset pwlimit
//             if (balance >= amount) {
//                 balance = balance - amount;
//                 return balance;
//             } else {
//                 return "Insufficient funds";
//             }
//         }
        
//     }
//     return withdraw;
// }

// const acc = make_withdraw(100, "my_password");
// acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
// acc(30, "my_password"); // returns 70
// acc(50, "my_password"); // returns 20
// acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
// acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
// acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
// acc(30, "his_passcode"); // returns "Account disabled"

// 2
// let commission = 25; // my commission in dollars
// // return a calculator for total price
// // total price = (commission + cost) * (1 + tax_rate)
// function make_price_calculator(tax_rate) {
//  function calculator(cost) {
//  return (commission + cost) * (1 + tax_rate);
//  }
//  return calculator;
// }
// const calc = make_price_calculator(0.07);
// commission = 125;
// calc(75);

//3
function curry(f){
    return x => y => f(x, y);
}
(curry(math_pow))(3)(4);