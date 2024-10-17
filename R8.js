//R8
function make_withdraw(balance, pw) {
    let pwlimit = 3;
    function withdraw(amount, inputpw) {
        if (pwlimit === 0){
            return "Account disabled";
        } else if (pw !== inputpw){
            pwlimit = pwlimit - 1;
            return "Wrong password; no withdraw";
        } else {
            pwlimit = 3; //reset pwlimit
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        }
        
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns 70
acc(50, "my_password"); // returns 20
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "his_passcode"); // returns "Account disabled"