R3
const z = 1;

function f(g) {
    const z = 3;
    return g(z);
}

f(y => y + z);

//2
function my_sum(n) {
    return n < 1
        ? 0
        : (n + 1) * n + my_sum(n-1);
}

my_sum(2);

//3 // recursive, time = theta(n), space = theta(n)

//2
function my_sum_iter(n, sum) {
    return n < 1
        ? sum
        : my_sum_iter(n-1, sum + (n + 1) * n);
}

my_sum_iter(2,0);

//3 // iterative, time = theta(n), space = theta(1)

//4
function sum(term, a, next, b) {
    return (a > b) ? 0
                  : term(a) + sum(term, next(a), next, b);
}

function my_sum(n) { 
    return sum((x => (x + 1)*x), 1, (x => x + 1), n); 
}

my_sum(2);

//5
function sum(term, a, next, b, total) {
    return (a > b) ? total
                   : sum(term, next(a), next, b, total + term(a));
}

function my_sum(n) { 
    return sum((x => (x + 1)*x), 1, (x => x + 1), n, 0); 
}

my_sum(2);

//6
const x = 5;
function f(g) {
    const x = 3;
    return x => x + g(x);
}
function g(f, y) {
    const h = (y, f) => y(f);
    return h(f, y);
}

// (a) What names are declared by this program?
//x,f,g,y,h
// (b) Which declaration does each name occurrence refer to?
// const x,h, function f,g, parameter y
// (c) What is the value of (f(x => 2 * x))(4)?
//12
// (d) What is the value of g(y => y + 2, x)?
