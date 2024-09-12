//R5

// for reference
function accumulate(op, initial, sequence) {
    return is_null(sequence)
           ? initial
           : op(head(sequence), 
                accumulate(op, initial, tail(sequence)));
}
//1

function flatten_list(lst) {
    return is_null(lst)
        ? null // unnecessary! it is already perfored in accumulate
        : is_number(lst)
        ? list(lst)
        : accumulate((x, y) => append(flatten_list(x), y), null, lst);
}
//This is a much better solution!!
function flatten_list(lst) {
    return accumulate(append, null, lst);
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL);
// Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)

//2

function tree_sum(tree) {
    return is_null(tree)
        ? 0 
        : is_number(tree)
        ? tree
        : accumulate((x, y) => tree_sum(x) + y, 0, tree);
}
//This is alternative solution!!
function tree_sum(tree) {
    return is_null(tree)
        ? 0 
        : ( is_list(head(tree))
            ? tree_sum(head(tree))
            : head(tree))
        + tree_sum(tail(tree));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
// Returns 28

//3
function accumulate_tree(f, op, initial, tree) {
    return accumulate( 
                     (x, y) => 
                            is_number(x)
                            ? op(f(x), y)
                            : op(accumulate_tree(f, op, initial, x), y), 
                        initial, tree);
}

function tree_sum2(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

tree_sum2(my_tree);

// op needs to be commutative and associative. initial is a neutral element wrt to op
