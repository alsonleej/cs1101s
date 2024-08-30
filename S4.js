//S4 https://canvas.nus.edu.sg/courses/62249/files/folder/Studio%20Sheets?preview=4693304

//1
const pascal = (row, col) => 
            col > row // invalid
            ? 0
            : row === 0 || col === 0 || row === col // edges of triangle (base case)
            ? 1
            : pascal(row - 1, col - 1) + pascal(row - 1, col); // recursive case
            
pascal(4,2);

//3
// math_sqrt(math_log(math_E))
// math_sqrt(math_log(math_E * math_E))