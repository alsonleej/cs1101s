function take(xs, n) {
    return (n === 0) ? null :
        pair(head(xs),
            take(tail(xs), n - 1));
}

function drop(xs, n) {
    return (n === 0) ? xs :
        drop(tail(xs), n - 1);
}

function insert(x, xs) {
    return is_null(xs) ?
        list(x) :
        x <= head(xs) ?
        pair(x, xs) :
        pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs) ? xs :
        insert(head(xs),
            insertion_sort(tail(xs)));
}

function selection_sort(xs) {
    if (is_null(xs)) {
        return xs;
    } else {
        const x = smallest(xs);
        return pair(x,
            selection_sort(remove(x, xs)));
    }
}

function quicksort(xs) {
    return is_null(xs) ? null :
        length(xs) === 1 ? xs :
        append(quicksort(head(partition(tail(xs),
            head(xs)))), pair(head(xs),
            quicksort(tail(partition(
                tail(xs), head(xs))))));
}

function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid =
            math_floor(length(xs) * 0.5);
        return merge(merge_sort(
                take(xs, mid)),
            merge_sort(drop(xs, mid)));
    }
}

function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        const s = permutations(tail(xs));
        const t = map(ys =>
            insertions(head(xs), ys), s);
        return accumulate(append, null, t);
    }
}

function combinations(xs, r) {
    if ((r !== 0 && xs === null) ||
        r < 0) {
        return null;
    } else if (r === 0) {
        return list(null);
    } else {
        const notused =
            combinations(tail(xs), r);
        const used =
            map(x => pair(head(xs), x),
                combinations(tail(xs), r - 1));
        return append(used, notused);
    }
}

function flatten_once(xs) {
    return accumulate(append, null, xs);
}

function product(xs, ys) {
    return
    flatten_once(map(y => map(x => pair(y, x),
        ys), xs));
}
//gives all (x,y), x∈xs, y∈ys
function partition(xs, p) {
    return pair(filter(x => x <= p, xs),
        filter(x => x > p, xs));
}

function insertions(x, ys) {
    return map(k => append(take(ys, k), pair(x,
            drop(ys, k))),
        enum_list(0, length(ys)));
}

function accumulate_bst(op, ini, bst) {
    if (is_empty_binary_tree(bst)) {
        return ini;
    } else {
        const s = accumulate_bst(op,
            ini, right_subtree_of(bst));
        const t = op(value_of(bst), s);
        return accumulate_bst(op, t,
            left_subtree_of(bst));
    }