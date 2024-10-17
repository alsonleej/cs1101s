//R9
//file:///C:/Users/alson/Downloads/reflection-R9.pdf

//1
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// function enum_list(n){
//     const lst = [];
//     for (let c = 0; c < n; c = c + 1){
//         lst[c] = c + 1;
//     }
//     return lst;
// }
// const res = enum_list(20);
// res;


//2
// can be same as 1
// function f(x, n){
//     return x === n ? 0 : x + f(x + 1, n);
// }
// function stash_numbers(n){
//     return f(0,n);
    
// }
// stash_numbers(20);

//3
// {
//     const x = 1;
//     {
//         const x = 2;
//     }
// }

//4
// (x=>(x=>x+1))(1)(2);

// function lambdanums(n){ //lol wont work
//     return n === 0 
//         ? (x=>x+1)
//         : (x=>lambdanums(n - 1)(n));
// }
// lambdanums(5);
    
//5
// have predicate as deferred operation, so it stacks branch on the control
// let x = 0;
// x === 99 || x === 98 || x=== 97 || x=== 96;


// x || y === x ? true : y. is it really tho? this reads left to right and does not accumulate deferred ops
// x === 99 ? true : 
// x === 98 ? true :
// x === 97 ? true :
// x === 96 ? true : false;

//6
// append from the lectures
// function append(xs, ys) {
//  return is_null(xs)
//  ? ys
//  : pair(head(xs), append(tail(xs), ys));
// }

// append(list(1,2,3),list(4,5,6));
//deferred operations are on control. grows as problem size grows.

// CPS version
// function cps(xs, ys, cont) {
//  return is_null(xs)
//  ? cont(ys)
//  : cps(tail(xs), ys, zs => cont(pair(head(xs), zs)));
// }
// function append_cps(xs, ys) {
//  return cps(xs, ys, xs => xs);
// }
// append_cps(list(1,2,3),list(4,5,6));
//no deferred operations, but number of frames grows.

//recursive: grows on control. iterative: grows on environment.
//moves memory usage from (expensive) runtime stack to (cheaper) heap.
