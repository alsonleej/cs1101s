//R5

//1

function flatten_list(lst) {
    return is_null(lst)
        ? null 
        : is_number(lst)
        ? list(lst)
        : accumulate((x, y) => append(flatten_list(x), y), null, lst);
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


const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
// Returns 28

//3
function accumulate_tree(f, op, initial, tree) {
    return accumulate( is_null(tree) 
                    ? initial
                    : is_number(tree)
                    ? f(tree)
                    : (x, y) => op(accumulate_tree(f, op, initial, x), y), 
                        initial, tree);
}

function tree_sum2(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

tree_sum2(my_tree);
