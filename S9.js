//S9
//1
function change(x, new_value) {
    x = new_value;
}
//Consider the following statements:
let x = 0;
change(x, 1);

//value of x is 0. change has its own x in its own frame

//2

function d_filter(pred, xs) {
    if (is_null(xs)){
        return null;
    }
    else if (pred(head(xs))){

        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    }
    else {
        return d_filter(pred, tail(xs));
    }

}
///Example call:
const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; // What is L now? L is now [1, [2, [4, [6, [8, null]]]]. 
//the initial list is not the same as the returned list, because the position of the pointer of L is still unchanged!! to change, must use set_tail


//3
let a = 10;
function foo(x) {
    let b = 0;
    function goo(x) {
        let a = 30;
        if (x <= 2) {
            a = a + x;
            b = b + x;
            // Breakpoint #4
        } else {
        // Breakpoint #3
        goo(x - 1);
        }
    }
    a = a + x;
    b = b + x;
    // Breakpoint #2
    goo(3);
}
// Breakpoint #1
foo(1);
// Breakpoint #5

