// 2. Write Source §2 programs that evaluate to values that are printed out in the Source REPL
// as follows:
// (a) [1, [2, [3, null]]]
list(1, 2, 3);
// (b) [1, [2, 3]]
pair(1, pair(2, 3));
// (c) [[1, [2, null]], [[3, [4, null]], [[5, [6, null]], null]]]
list(list(1, 2), list(3, 4), list(5, 6));

// 3. Write programs that only use applications of head and tail and the name lst so that the
// result is 4:
// (a) 
const lsta = list(7, 6, 5, 4, 3, 2, 1);
head(tail(tail(tail(lsta))));
// (b) 
const lstb = list(list(7), list(6, 5, 4), list(3, 2), 1);
head(tail(tail(head(tail(lstb)))));
// (c) 
const lstc = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
head(head(head(tail(tail(head(head(head(tail(lstc)))))))));
// Note: The key skill for this question is to translate an expression into a box-and-pointer
// diagram and to systematically traverse the data structure.
