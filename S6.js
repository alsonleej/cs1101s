//S6
//1

function my_map(f, xs) {
    return accumulate((x, y)  => pair(f(x), y), null, xs);
}

my_map(x => x + 1, list(1, 2, 3));
// Result: list(2, 3, 4)

//2
// function remove_duplicates(xs) {
//     return is_null(xs)
//         ? null 
//         : is_null(member(head(xs), tail(xs))) // is head(xs) not a member of tail(xs)? i.e. is it unique?
//         ? pair(head(xs), remove_duplicates(tail(xs)))
//         : remove_duplicates(tail(xs));
// }

//  using filter
function remove_duplicates(xs) {
    return accumulate((x, y) => pair(x, filter(z => z !== x, y)), null, xs);
}
// it is better to use !equal(z,x) instead of z !== x, because elements of xs might not be primitive types
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// // Result: list(1, 2, 3, 4)
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// // Result: list("a", "x", "b", "c", "d")

// soln
function remove_duplicates(xs) {
    return is_null(xs)
        ? null 
        : pair(head(xs), remove_duplicates(filter(x => !equal(x, head(xs)), tail(xs))));
}
//3
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
        const combi_C = map(x => pair(head(coins), x), combi_B);
        return append(combi_A, combi_C);
    }
}
// Example call:
display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))

//in-class
//1: same as above
//2

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        // Combinations that do not use the head element.
        const combi_A = subsets(tail(xs));
        // // Combinations that do not use the head coin
        // // for the remaining amount.
        // const combi_B = makeup_amount(x - head(coins), tail(coins));
        // Combinations that use the head element.
        const combi_C = map(x => pair(head(xs), x), combi_A);
        return append(combi_A, combi_C);
    }
}
subsets(list(1, 2, 3));

// recurrence relation T(n) = 2T(n-1) + O(1)
// T(n-1) from subsets(tail(xs));, T(n-1) from map(x => ..., subsets(tail(xs)), 
// order of growth O(2^n)

//3
function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(append, null,
            map(x => map(p => pair(x, p),
                            permutations(remove(x, s))),
    s));
}

// recurrence relation T(n) = n*T(n-1) 
// n from map(x => ..., s), T(n-1) from permutations 
// order of growth O(n!)