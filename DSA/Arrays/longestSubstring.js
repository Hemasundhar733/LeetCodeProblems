/**
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let slength = s.length;
    let longLength = 0;
    let charIndexMap = new Map();
    for (let i = 0, j = 0; j < slength; j++) {
        if (charIndexMap.has(s[j])) {
            i = Math.max(i, charIndexMap.get(s[j]) + 1);
        }
        charIndexMap.set(s[j], j);
        longLength = Math.max(longLength, j - i + 1);
    }
    return longLength;
};
