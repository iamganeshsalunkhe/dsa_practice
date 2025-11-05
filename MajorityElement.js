// Problem Statement:

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.

// Solution:


function findMajorityElement(nums) {
    let hash = {};
    for (i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }


    for (let i in hash){
        if (hash[i] > nums.length / 2) {
            return i;
        }
    }

    return null;
}

nums = [2, 2, 1, 1, 1, 2, 2,1]

console.log(findMajorityElement(nums));