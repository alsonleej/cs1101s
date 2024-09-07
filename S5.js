//S5

//2
function every_second(items) {
    return is_null(items)
        ? items
        : is_null(tail(items)) 
        ? null
        : pair(head(tail(items)), every_second(tail(tail(items))));
}

every_second(list("a", "x", "b", "y", "c", "z", "d"));

// Value: ["x", ["y", ["z", null]]]

//3

const lst1 = list(7, list(6, 5, 4), 3, list(2, 1));

head(tail(head(tail(tail(tail(lst1))))));

const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);

head(tail(tail(tail(lst2))));

const lst3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));

head(head(tail(head(tail(head(tail(tail(tail(lst3)))))))));

const lst4 = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

head(head(head(tail(tail(lst4)))));

function b(seq) {
    return lst => seq === 0
            ? lst
            : seq % 10 === 1 //head is 1
            ? b(math_floor(seq / 10))(head(lst))
            : b(math_floor(seq / 10))(tail(lst)); //tail is 2
}

b(112121222)(lst3);