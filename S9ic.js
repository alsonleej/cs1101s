//S9ic
//C:/Users/alson/Downloads/studio-S9-in-class.pdf
function count_pairs(x) {
    if (!is_pair(x)) {
        return 0;
     } else {
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
     }
}


// Show that this function is not correct. In particular, draw box-and-pointer diagrams
// representing list structures made up of exactly three pairs for which Ben’s procedure would
// return 3, return 4, return 7, or never return at all.

// his function is incorrect because head and tail can point to the same list.

// success case, where his program works
const lst1 = list(1,2,3);
draw_data(lst1);
display(count_pairs(lst1));

//3
const k = pair(null,null);
const lst3= pair(k,k);
draw_data(lst3);
display(count_pairs(lst3));

//4
const lst4 = pair(lst3, null);
draw_data(lst4);
display(count_pairs(lst4));

//7
const lst7 = pair(lst3, lst3);
draw_data(lst7);
display(count_pairs(lst7));

//infinite
const lsti = list(1,2,3);
set_tail(tail(tail(lsti)), lsti);
draw_data(lsti);
// display(count_pairs(lsti)); //infinite loop

// correct implementation
function countpairs(x){
    let pairs_seen = null;
    function check(x){
        if (!is_pair(x)){
            return undefined;
        }
        else if (is_null(member(x, pairs_seen))){ 
            pairs_seen = pair(x, pairs_seen);
            check(head(x));
            check(tail(x));
        }
    }
    check(x);
    
    return length(pairs_seen);
}

display(countpairs(lst1));
display(countpairs(lst3));
display(countpairs(lst4));
display(countpairs(lst7));

