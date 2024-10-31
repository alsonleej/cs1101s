//S11
function add_streams(s1, s2) {
return is_null(s1)
? s2
: is_null(s2)
? s1
: pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}
function scale_stream(c, stream) {
return stream_map(x => c * x, stream);
}
const add_series = add_streams;
const scale_series = scale_stream;
function negate_series(s) {
return scale_series(-1, s);
}
function subtract_series(s1, s2) {
return add_series(s1, negate_series(s2));
}
function coeffs_to_series(list_of_coeffs) {
const zeros = pair(0, () => zeros);
function iter(list) {
return is_null(list)
? zeros
: pair(head(list),
() => iter(tail(list)));
}
return iter(list_of_coeffs);
}
coeffs_to_series(list(1,3,4));
const non_neg_integers = integers_from(0);
function fun_to_series(fun) {
return stream_map(fun, non_neg_integers);
}
//////////////////////////////
//alt_ones: the stream 1, −1, 1, −1, . . . in as many ways as you can think of.
const ao = pair(1, 
            ()=>pair(-1,
                ()=>ao));
                
eval_stream(ao,10);

// zeros: the infinite stream of 0’s. Do this using alt_ones
const z = add_series(ao, stream_tail(ao));
const z2 = subtract_series(ao, ao);
const z3 = scale_series(0, ao);
eval_stream(z3,10);

//S1 = 1 + x + x2 + x3 + ⋯
//S2 = 1 + 2x + 3x2 + 4x3 + ⋯
const s1 = pair(1, ()=>s1);
const s2 = add_series(s1, stream_tail(s1));
eval_stream(s2,10);