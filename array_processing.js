function array_join(arr){
    //flattens all nested arrays
    let k = 0;
    let glo = [];
    
    function hjoin(arr){
        const l = array_length(arr);
        if (!is_array(arr)){
            glo[k] = arr;
            k = k + 1;
        }
        else {
            for (let idx = 0; idx < l; idx =  idx + 1){
                hjoin(arr[idx]);
            }
        }
    }
    
    hjoin(arr);
    return glo;
    
}

function array_slice(arr, start, end){
    if (!is_array(arr)){
        return arr;
    }
    else if (start === end){
        return [];
    }
    else if (start > end){
        error(start, "after end");
    }
    else {
        const l = array_length(arr);
        if (end > l){
            error(end, "beyond array index");
        }
        const copy = [];
        for (let i = start; i < end; i = i + 1){
            copy[i - start] = array_copy(arr[i]);
        }
        return copy;
    }
}

function array_copy(arr){
    const k = array_length(arr);
    return array_slice(arr, 0, k);
}

function array_pop(arr){
    const k = array_length(arr);
    return array_slice(arr, 0, k - 1);
}

function evalops(a, b, op) {
    return op === "+"
        ? a + b
        : op === "-"
        ? a - b
        : op === "*"
        ? a * b
        : op === "/"
        ? a / b
        : op === "%"
        ? a % b 
        : op === "**"
        ? a ** b 
        : op === "&&"
        ? a && b 
        : op === "||"
        ? a || b 
        : op === "==="
        ? a === b 
        : op === "!="
        ? a !== b 
        : op === "<"
        ? a < b 
        : op === "<="
        ? a <= b
        : op === ">"
        ? a > b 
        : op === ">="
        ? a >= b 
        : null; 
}
