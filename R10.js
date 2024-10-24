//R10

function stream_tail(xs) {
    return tail(xs)();
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
               () => stream_map(f, stream_tail(s)));
}

function enum_stream(start, end) {
    return start > end
        ? null
        : pair(start,
               () => enum_stream(start + 1, end));
}

function memo_fun(fun) { //fun already has to be memoized
    let already_run = false;
    let result = undefined;

    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
            () => add_streams(stream_tail(s1),
        stream_tail(s2)));
}
function mul_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) * head(s2),
            () => mul_streams(stream_tail(s1),
    stream_tail(s2)));
}
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const integers = integers_from(1);
const ones = pair(1, () => ones);



const x = stream_map(display, enum_stream(0, 10)); //display 0 
stream_ref(x, 1); //display 1
stream_ref(x, 2); //display 1 2

//1b
function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
            memo_fun( () => stream_map_optimized(
                                        f, stream_tail(s)) ));
}
// What will be displayed when evaluating the following sequence?
const y = stream_map_optimized(display, enum_stream(0, 10));
stream_ref(y, 1); // memoize stream_map(display, enum_stream(1, 10))
stream_ref(y, 2); //only display 2

//2
function zip_list_of_streams(ss){
        // YOUR SOLUTION HERE
    if (ss === null){
        return null;
    } else {
        let str = zip_list_of_streams(map(stream_tail,ss));
        for (let i = length(ss); i > 0; i = i - 1){
            str = pair(list_ref(ss, i), ()=> str);
        }
        return str;
    }
    
}

eval_stream(zip_list_of_streams(list(integers,integers,integers)),10);
//3
// function partial_sums(s) {

//     // YOUR SOLUTION HERE
//     return pair(head(s), ()=>
//         add_streams(stream_tail(s), partial_sums(s)));

// }
// eval_stream(partial_sums(integers),10);
