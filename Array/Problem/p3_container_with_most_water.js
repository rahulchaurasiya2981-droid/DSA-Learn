// Q : Container With Most Water
// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// ---------------------------------------------------------------------->>>>
// M1 : Brute Force 
// TC : O(n^2)
// SC : O(1)
// const maxArea = (height)=> {
//     let maxArea=0;
//     let area=0;
//     for(let i=0;i<height.length;i++)
//     {
//         for(let j=i+1;j<height.length;j++)
//         {
//             if(height[i]<=height[j]) area=height[i]*(j-i);
//             else area = height[j] * (j-i);
//             if(area>maxArea) maxArea=area;
//         }
//     }
//     return maxArea;
// };


// ---------------------------------------------------------------------->>>>
// M1 : Two pointer 
// TC : O(n)
// SC : O(1)

// const maxArea = (height)=> {
//     let left = 0;
//     let right = height.length-1;
//     let maxWater=0;
//     while(left<right)
//     {
//         let h=Math.min(height[left],height[right]);
//         let width = (right - left);
//         let area = h * width;
//         maxWater= Math.max(maxWater,area);

//         // # Move smaller height
//         if(height[left] < height[right]) left++;
//         else right--;
//     }
//     return maxWater;
// };
console.log(maxArea([1,3,2,4,5,25,24,5])); 