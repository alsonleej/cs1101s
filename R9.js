//R9
//file:///C:/Users/alson/Downloads/reflection-R9.pdf

//1
// append([1,2,3],[4,5,6]);

//2
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

// function lambdanums(n){
//     return n === 1 
//         ? (x=>x+1)
//         : (x=>lambdanums(n - 1))
// }

//5
// have predicate as deferred operation, so it stacks branch on the control
let x = 0;
x !== 99 || x !== 98 || x!== 97 ||x!== 96;

