// Q : Longest Common Prefix

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ---------------------------------------------------------------------------->>>
// M1 : Brute Force (Shrink prefix)(Horizontal scaling)(better than M2,M3)
// TC : O(n * m)  
// - n = number of strings
// - m = length of the shortest string (or prefix)
// SC : O(1)

// const longestCommonPrefix = (strs) => {
//     if(!strs.length || strs === null) return '';
//     let prefix=strs[0] || ""; // assume first string is common prefix

//     for (let i=1;i<strs.length;i++) // loop the remaining array string item
//     {
//         let j=0;
//         while(j<prefix.length && j<strs[i].length && prefix[j]===strs[i][j]) j++;
//         if(j<prefix.length) prefix = prefix.slice(0,j); // slice if needs
//         if(!prefix.length) return "";
//     }
//     return prefix;
// };


// ------------------------------------------------------------------------------->>>>
// M2 : Brute Force (Build prefix)(Horizontal scaling)
// TC : O(n * m)
// SC : O(1)

// const longestCommonPrefix = (strs) => {
//         if(!strs.length || strs === null) return '';
//     let prefix="";
//     for(let i=0;i<strs[0].length;i++)
//     {
//         const char=strs[0][i];
//         for(let j=1;j<strs.length;j++)
//         {
//             if(i>=strs[j].length || strs[j][i] !== char) return prefix;
//         }
//         prefix+=char;
//     }
//     return prefix;
// }


// ------------------------------------------------------------------------------->>>>
// M3 : Using sorting
// TC : O((n log n) * m)
// - n = number of strings
// - m = length of shortest string
// n log n → sorting strings
// m → cost of string comparison (character by character)

// SC : O(m)   
// - prefix can grow up to length M

// - Time complexity is O(N log N * M) due to sorting with string comparisons, and space complexity is O(M) for the prefix.

// const longestCommonPrefix = (strs) => {
//         // base case 
//     if(!strs.length || strs === null) return "";
//     strs.sort();
//     let first = strs[0];
//     let last = strs[strs.length-1];
//     let prefix='';
//     for(let i=0;i<first.length;i++)
//     {
//         if(first[i] !== last[i]) break;
//         prefix+=first[i];
//     }
//     return prefix;
// }
console.log(longestCommonPrefix(["flow", "flower", "flight"])); 

// ------------------------------------------------------------------------------->>>>
// M4 : Using TRIE (need to learn bust classes and concept)