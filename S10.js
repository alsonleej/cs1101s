//S10
//"C:\Users\alson\Downloads\studio-S10.pdf"
function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) {
        i = i + 1;
    }
    return (i < len);
}

function make_search(A) {
    return x => linear_search(A, x);
}

const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
const my_search = make_search(my_array);

my_search(14); // returns true
// many more calls to my_search
// ...
my_search(30); // returns false

//O(n) time for my_search

function make_optimized_search(A) {
    let mem = [];
    
    function helper(x){

        if (mem[x] !== undefined){
            return mem[x];
        } else {
            let res = linear_search(A, x);
            mem[x] = res;
            return res;
        }
        
    }
    
    return helper;
}

const mysearch2 = make_optimized_search(my_array);
mysearch2(14);
mysearch2(30);

//O(n-k) time, where k is the previous memoised fn

//soln
// function make_optimized_search(A) {
//     const len = array_length(A);
//     // make a local copy of input array A
//     const B = [];
//     for (let i = 0; i < len; i = i + 1) {
//         B[i] = A[i];
//     }
//     merge_sort(B);
//     return x => binary_search(B, x);
// }
//O(log n) 

//2
function bubblesort_array(A) {
    const len = array_length(A);
    for (let i = len - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (A[j] > A[j + 1]) {
                const temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
}

const AA = [3, 5, 2, 4, 1];
bubblesort_array(AA);
AA;
//O(n^2)
function bubblesort_list(L) {
 // ???
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let ptr = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(ptr) > head(tail(ptr))) {
                const temp = head(ptr);
                set_head(ptr, head(tail(ptr)));
                set_head(tail(ptr), temp);
            }
            ptr = tail(ptr);
        }
    }
}
//Example use:
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]

//3
const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = k > n
                       ? 0
                       : k === 0 || k === n
                       ? 1
                       : mchoose(n - 1, k) + mchoose(n - 1, k - 1);
        write(n, k, result);
        return result;
    }
}

mchoose(7, 4);
