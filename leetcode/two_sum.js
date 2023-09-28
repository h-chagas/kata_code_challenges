// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
       for (let j = 1+i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
            result.push(i);
            result.push(j);
            console.log(result);
            return result
        }
       }
    }  
};

twoSum([1, 3, 5, 6, 2], 9);


//Source: https://leetcode.com/problems/two-sum/