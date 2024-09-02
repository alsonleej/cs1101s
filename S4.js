//S4 https://canvas.nus.edu.sg/courses/62249/files/folder/Studio%20Sheets?preview=4693304

//1
const pascal = (row, col) => // try to use same variable name as qns
            col > row || row < 0 || col < 0 // invalid inputs
            ? 0
            : row === 0 || col === 0 || row === col // edges of triangle (base case) // don't need row === 0
            ? 1
            : pascal(row - 1, col - 1) + pascal(row - 1, col); // recursive case
            
pascal(4,2);

//3
// math_sqrt(math_log(math_E)) //1 
// math_log(math_sqrt(math_E * math_E)) //1
