//S2
//1
function biggie_size(combo){
    return combo + 4;
}

biggie_size(2);
//2
function unbiggie_size(combo){
    return combo - 4;
}

unbiggie_size(6);
//3
function is_biggie_size(combo){
    return combo > 4 ? true : false ;
    //can just return combo > 4 since it returns boolean, no need for predicate
}

is_biggie_size(6);
//4
function combo_price(combo){
    return is_biggie_size(combo) ? unbiggie_size(combo) * 1.17 + 0.50 : combo * 1.17;
}

combo_price(8);
//5
function empty_order(){
    return 0;
    // better to avoid magic numbers. define const EMPTY_ORDER = 0 then use it in fn declaration
}
//6
function add_to_order(order,combo){
    return 10 * order + combo;
}
//7
function last_combo(order){
    return order % 10;
}
last_combo(321);
//8
function other_combos(combo){
    return (combo - last_combo(combo))/10;
}

other_combos(321);