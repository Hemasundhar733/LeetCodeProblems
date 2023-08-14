/**
Remove duplicates from sorted array II , where we can have only one duplicate is allowed:
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let temp = nums[0]
let z = 1 
let count = 0
for(let i=1;i<nums.length;i++)
{
    if(temp!==nums[i])
    {  count=0
        nums[z] = nums[i]
        temp=nums[i]
        z++
    }
    else if(temp == nums[i] && count<1)
    {
          nums[z] = nums[i]
        temp=nums[i]
        count ++ 
        z++
    }
}

return z
};