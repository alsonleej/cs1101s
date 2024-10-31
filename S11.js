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
const A = pair(1, () => scale_stream(2, A));
const B = pair(1, () => mul_streams(B, integers));
// A is the infinite stream containing the powers of two which means it
// contains the numbers: 1, 2, 4, 8, . . .
// B is the stream of factorials: 0!, 1!, 2!, 3!, 4!, etc, which means it contains the
// numbers: 1, 1,
// 2, 6, 24, 120, . . .
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
const s2 = pair(head(s1), ()=>add_series(s2, stream_tail(s1)));
eval_stream(s2,10);

///ic
function stream_pairs(s) {
return is_null(s)
? null
: stream_append(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
stream_pairs(stream_tail(s)));
}

const ints = list_to_stream(list(1,2,3,4,5));
const ics1 = stream_pairs(ints);
eval_stream(ics1,10);

const integers  = integers_from(1);
//const ics2 = stream_pairs(integers);
// (b) Give the clearest explanation that you can of how stream_pairs works.
// Answer:
// stream_pairs produces a stream containing all pairs (p1, p2) where p1 occurs before
// p2 in the given finite stream. stream_pairs works by “wishful thinking”: We assume
// that stream_pairs produces the stream of pairs from the tail of the given stream.
// What is missing are those pairs that start with the first element p1 of the given stream.
// Therefore stream_pairs returns the result of appending the stream of those pairs to
// the stream of pairs from the tail. The first stream is the result of a call of stream_map
// to the tail, where each element p2 of the tail becomes the pair containing p1 and the
// respective p2.
//c) error, cos stream_append tries to evaluate stream_pairs(stream_tail(s)), leading to infitinie execution

function stream_append_pickle(xs, ys) {
return is_null(xs)
? ys()
: pair(head(xs),
() => stream_append_pickle(stream_tail(xs),
ys));
}
function stream_pairs2(s) {
return is_null(s)
? null
: stream_append_pickle(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
() => stream_pairs2(stream_tail(s)));
}
const ics3 = stream_pairs2(integers);

//d) using () => stream_pairs2(stream_tail(s)) lets the eval be lazy, avoiding infinite execution
eval_stream(ics3,10);
//[ [1, 2],[ [1, 3],[ [1, 4],[[1, 5], [[1, 6], [[1, 7],....