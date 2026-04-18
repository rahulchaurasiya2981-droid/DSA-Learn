// Question
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// # 1: Brute Force (using loop)
// --------------------------------------------------------
// TC : O(n^2) (nested loop)
// SC : O(1)
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++)
//     {
//         for(let j=i+1;j<nums.length;j++)
//         {
//             if( (nums[i] + nums[j]) === target) return [i,j];
//         }
//     }
//     return [];
// };


// # 2: Better (Using Hasing)  
// -----------------------------------------------------------
// TC : O(n) 
// - constant-time HashMap operations O(1)
// SC : O(n)
// - space take by map


// const twoSum =(nums,target)=>{
//     const map=new Map();
//     for(let i=0;i<nums.length;i++)
//     {
//         // # calculate
//         let current = nums[i];
//         let needed = target - current;

//         // # check
//         let isExistInMap = map.has(needed); 
//         if(isExistInMap) return([map.get(needed),i]);

//         // # store
//         map.set(nums[i],i);
//     }
//     return []    
// }


// # 3: Optimal (Two pointer)(without hasmap) (only work for already sorted array)
// ------------------------------------------------------------------------
// TC : O(n)
// SC : O(1)

// const sortTheNumber = (nums)=>{
//     nums.sort((a,b)=>a-b);
// }
// const twoSum =(nums,target)=>{
//     console.log(nums);
//     sortTheNumber(nums);
//     let start = 0;
//     let end = nums.length -1;
    
//     while(start<end)
//     {
//         let sum = nums[start]+nums[end];
    
//         if(sum === target) return [start,end];
//         if(sum < target) start++;
//         if(sum > target) end--;
//     }
//         return [];
// }


// # 4: For Unsorted Array 
// -------------------------
// TC : O(n * logn) :> (logn for sorting)
// SC : O(n) :> extra space in array

// var twoSum = function(nums, target) {
//     const arr = nums.map((item,index)=> [item,index]);
//     arr.sort((a,b)=> a[0]-b[0]);
//     let start=0;
//     let end=arr.length-1;

//     while(start<end)
//     {
//         let sum = arr[start][0] + arr[end][0];
//         if(sum === target) return [arr[start][1],arr[end][1]];
//         if(sum < target) start++;
//         if(sum > target) end--;
//     }
//     return []
// };

console.log(twoSum([3,2,4],6));
