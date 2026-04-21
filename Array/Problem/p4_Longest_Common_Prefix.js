// Q : Longest Common Prefix

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ---------------------------------------------------------------------------->>>
// M1 : Brute Force (Build prefix)
// TC : O(n * m²)
// SC : O(1)


// M2 : Brute Force (Shrink prefix)
// TC : O(n * m)
// SC : O(1)
const longestCommonPrefix = (strs) => {
    let prefix=strs[0]; // assume first string is common prefix

    for (let i=1;i<strs.length;i++) // loop the remaining array string item
    {
        for(let j=0;j<prefix.length;j++) // loop the assumed common prefix
        {
            if(prefix[j] == strs[i][j]) continue;
            else{
                prefix = prefix.slice(0,j);// also give empty string
                break;
            };  
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(["flow", "flower", "flight"])); 