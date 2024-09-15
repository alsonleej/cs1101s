//S6
//1

// function my_map(f, xs) {
//     return accumulate((x, y)  => pair(f(x), y), null, xs);
// }

// my_map(x => x + 1, list(1, 2, 3));
// // Result: list(2, 3, 4)

//2
// function remove_duplicates(xs) {
//     return is_null(xs)
//         ? null 
//         : is_null(member(head(xs), tail(xs))) // is head(xs) not a member of tail(xs)? i.e. is it unique?
//         ? pair(head(xs), remove_duplicates(tail(xs)))
//         : remove_duplicates(tail(xs));
// }

// //  using filter
// function remove_duplicates(xs) {
//     return accumulate((x, y) => pair(x, filter(z => z !== x, y)), null, xs);
// }
// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// // Result: list(1, 2, 3, 4)
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// // Result: list("a", "x", "b", "c", "d")

// //3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        // Combinations that use the head coin.
        const combi_C = pair(head(coins), combi_B);
        return append(combi_A, combi_C);
    }
}
// Example call:
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))