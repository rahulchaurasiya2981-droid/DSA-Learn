// Q : Median of Two Sorted Arrays

// M1 : Brute Force (Basic)
// Time: O((n+m) log(n+m)) (due to sort)
// Space: O(n+m)

// const findMedianSortedArrays = (nums1, nums2) => {
//   const arr = [...nums1, ...nums2];
//   arr.sort((a, b) => a - b);
//   const n = arr.length;
//   let median = 0;
//   if (n % 2 === 0) {
//     median = (arr[n / 2 - 1] + arr[n / 2]) / 2;
//   } else {
//     median = arr[Math.floor(n / 2)];
//   }
//   return median;
// };
// console.log(findMedianSortedArrays([1, 3], [2]));


// ---------------------------------------------------------------------------->>>
// M2 : Merge without sorting (Better)
// TC : O(n+m)
// SC : O(n+m)
// const findMedianSortedArrays = (nums1, nums2) => {
//     //# Merging
//     let n = nums1.length;
//     let m = nums2.length;
//     let arr=new Array(n+m);
//     let i = 0;
//     let j = 0;
//     let z = 0;
//     while(i<n && j<m)
//     {
//         if(nums1[i]<=nums2[j])   arr[z++]=nums1[i++];
//         else    arr[z++]=nums2[j++];
//     }
//     while (i!=n) arr[z++]=nums1[i++];
//     while (j!=m) arr[z++]=nums2[j++];

//     //# Finding median
//     let l=arr.length;
//     let median =0;
//     if(l%2==0) median = (arr[l/2-1] + arr[l/2])/2
//     else median = arr[Math.floor(l/2)];
//     return median;
// };
// console.log(findMedianSortedArrays([1,6], [3,4]));


// ---------------------------------------------------------------------------->>>
// M3 : Binary Search (Best 🚀)
// TC : O(log(min(n,m)))
// SC : O(1)