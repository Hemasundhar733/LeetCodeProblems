/**
here the val and rom is the arrays and in the function while is inside the for loop where the answer will get:

Example:
Input: s = "III"
Output: 3
Explanation: III = 3.
*/

/**
 * @param {number} num
 * @return {string}
 */
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRoman = function(N) {
    let ans = ""
    for (let i = 0; N; i++)
        while (N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};
