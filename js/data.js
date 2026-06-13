const KEY = "dsa4w_v3";

const WEEKS = [
  {
    "title": "Array & String Patterns",
    "desc": "Patterns 1–6 · Build your foundation with core array techniques",
    "patterns": [
      {
        "id": "p1",
        "name": "1. Sliding Window",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q1", "name": "Maximum Average Subarray I", "diff": "easy", "lc": "https://leetcode.com/problems/maximum-average-subarray-i/", "yt": "https://www.youtube.com/results?search_query=maximum+average+subarray+i+leetcode"},
          {"id": "q2", "name": "Longest Subarray of 1s After Deleting One Element", "diff": "medium", "lc": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/", "yt": "https://www.youtube.com/results?search_query=longest+subarray+1s+deleting+element+leetcode"},
          {"id": "q3", "name": "Longest Substring Without Repeating Characters", "diff": "medium", "lc": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "yt": "https://www.youtube.com/results?search_query=longest+substring+without+repeating+characters+neetcode"},
          {"id": "q4", "name": "Minimum Window Substring", "diff": "hard", "lc": "https://leetcode.com/problems/minimum-window-substring/", "yt": "https://www.youtube.com/results?search_query=minimum+window+substring+neetcode"},
          {"id": "q5", "name": "Sliding Window Maximum", "diff": "hard", "lc": "https://leetcode.com/problems/sliding-window-maximum/", "yt": "https://www.youtube.com/results?search_query=sliding+window+maximum+neetcode+leetcode"}
        ]
      },
      {
        "id": "p2",
        "name": "2. Two Pointers",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q6", "name": "Valid Palindrome", "diff": "easy", "lc": "https://leetcode.com/problems/valid-palindrome/", "yt": "https://www.youtube.com/results?search_query=valid+palindrome+leetcode+neetcode"},
          {"id": "q7", "name": "Two Sum II Input Array Is Sorted", "diff": "medium", "lc": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", "yt": "https://www.youtube.com/results?search_query=two+sum+ii+sorted+leetcode+neetcode"},
          {"id": "q8", "name": "3Sum", "diff": "medium", "lc": "https://leetcode.com/problems/3sum/", "yt": "https://www.youtube.com/results?search_query=3sum+leetcode+neetcode"},
          {"id": "q9", "name": "Container With Most Water", "diff": "medium", "lc": "https://leetcode.com/problems/container-with-most-water/", "yt": "https://www.youtube.com/results?search_query=container+with+most+water+neetcode"},
          {"id": "q10", "name": "Trapping Rain Water", "diff": "hard", "lc": "https://leetcode.com/problems/trapping-rain-water/", "yt": "https://www.youtube.com/results?search_query=trapping+rain+water+neetcode+leetcode"}
        ]
      },
      {
        "id": "p3",
        "name": "3. Fast & Slow Pointers",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q11", "name": "Linked List Cycle", "diff": "easy", "lc": "https://leetcode.com/problems/linked-list-cycle/", "yt": "https://www.youtube.com/results?search_query=linked+list+cycle+leetcode+neetcode"},
          {"id": "q12", "name": "Happy Number", "diff": "easy", "lc": "https://leetcode.com/problems/happy-number/", "yt": "https://www.youtube.com/results?search_query=happy+number+leetcode+neetcode"},
          {"id": "q13", "name": "Middle of the Linked List", "diff": "easy", "lc": "https://leetcode.com/problems/middle-of-the-linked-list/", "yt": "https://www.youtube.com/results?search_query=middle+linked+list+leetcode"},
          {"id": "q14", "name": "Find the Duplicate Number", "diff": "medium", "lc": "https://leetcode.com/problems/find-the-duplicate-number/", "yt": "https://www.youtube.com/results?search_query=find+duplicate+number+neetcode+floyd"},
          {"id": "q15", "name": "Linked List Cycle II", "diff": "medium", "lc": "https://leetcode.com/problems/linked-list-cycle-ii/", "yt": "https://www.youtube.com/results?search_query=linked+list+cycle+ii+leetcode+neetcode"}
        ]
      },
      {
        "id": "p4",
        "name": "4. Merge Intervals",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q16", "name": "Merge Intervals", "diff": "medium", "lc": "https://leetcode.com/problems/merge-intervals/", "yt": "https://www.youtube.com/results?search_query=merge+intervals+leetcode+neetcode"},
          {"id": "q17", "name": "Insert Interval", "diff": "medium", "lc": "https://leetcode.com/problems/insert-interval/", "yt": "https://www.youtube.com/results?search_query=insert+interval+leetcode+neetcode"},
          {"id": "q18", "name": "Non-overlapping Intervals", "diff": "medium", "lc": "https://leetcode.com/problems/non-overlapping-intervals/", "yt": "https://www.youtube.com/results?search_query=non+overlapping+intervals+leetcode"},
          {"id": "q19", "name": "Meeting Rooms II", "diff": "medium", "lc": "https://leetcode.com/problems/meeting-rooms-ii/", "yt": "https://www.youtube.com/results?search_query=meeting+rooms+ii+leetcode"},
          {"id": "q20", "name": "Employee Free Time", "diff": "hard", "lc": "https://leetcode.com/problems/employee-free-time/", "yt": "https://www.youtube.com/results?search_query=employee+free+time+leetcode"}
        ]
      },
      {
        "id": "p5",
        "name": "5. Cyclic Sort",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q21", "name": "Missing Number", "diff": "easy", "lc": "https://leetcode.com/problems/missing-number/", "yt": "https://www.youtube.com/results?search_query=missing+number+cyclic+sort+leetcode"},
          {"id": "q22", "name": "Find All Numbers Disappeared in an Array", "diff": "easy", "lc": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/", "yt": "https://www.youtube.com/results?search_query=find+all+numbers+disappeared+array+leetcode"},
          {"id": "q23", "name": "Find All Duplicates in an Array", "diff": "medium", "lc": "https://leetcode.com/problems/find-all-duplicates-in-an-array/", "yt": "https://www.youtube.com/results?search_query=find+all+duplicates+array+leetcode"},
          {"id": "q24", "name": "Set Mismatch", "diff": "easy", "lc": "https://leetcode.com/problems/set-mismatch/", "yt": "https://www.youtube.com/results?search_query=set+mismatch+leetcode"},
          {"id": "q25", "name": "First Missing Positive", "diff": "hard", "lc": "https://leetcode.com/problems/first-missing-positive/", "yt": "https://www.youtube.com/results?search_query=first+missing+positive+neetcode+leetcode"}
        ]
      },
      {
        "id": "p6",
        "name": "6. Monotonic Stack",
        "badge": "b-arr",
        "badgeTxt": "Array & String",
        "problems": [
          {"id": "q26", "name": "Next Greater Element I", "diff": "easy", "lc": "https://leetcode.com/problems/next-greater-element-i/", "yt": "https://www.youtube.com/results?search_query=next+greater+element+i+leetcode"},
          {"id": "q27", "name": "Daily Temperatures", "diff": "medium", "lc": "https://leetcode.com/problems/daily-temperatures/", "yt": "https://www.youtube.com/results?search_query=daily+temperatures+neetcode+leetcode"},
          {"id": "q28", "name": "Sum of Subarray Minimums", "diff": "medium", "lc": "https://leetcode.com/problems/sum-of-subarray-minimums/", "yt": "https://www.youtube.com/results?search_query=sum+subarray+minimums+leetcode"},
          {"id": "q29", "name": "Largest Rectangle in Histogram", "diff": "hard", "lc": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "yt": "https://www.youtube.com/results?search_query=largest+rectangle+histogram+neetcode"},
          {"id": "q30", "name": "Maximal Rectangle", "diff": "hard", "lc": "https://leetcode.com/problems/maximal-rectangle/", "yt": "https://www.youtube.com/results?search_query=maximal+rectangle+leetcode+neetcode"}
        ]
      }
    ]
  },
  {
    "title": "Search, Sort & Graph Patterns",
    "desc": "Patterns 7–12 · Binary search, heaps, and graph traversal",
    "patterns": [
      {
        "id": "p7",
        "name": "7. Modified Binary Search",
        "badge": "b-src",
        "badgeTxt": "Search & Sort",
        "problems": [
          {"id": "q31", "name": "Binary Search", "diff": "easy", "lc": "https://leetcode.com/problems/binary-search/", "yt": "https://www.youtube.com/results?search_query=binary+search+leetcode+neetcode"},
          {"id": "q32", "name": "Search in Rotated Sorted Array", "diff": "medium", "lc": "https://leetcode.com/problems/search-in-rotated-sorted-array/", "yt": "https://www.youtube.com/results?search_query=search+rotated+sorted+array+neetcode"},
          {"id": "q33", "name": "Find Minimum in Rotated Sorted Array", "diff": "medium", "lc": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "yt": "https://www.youtube.com/results?search_query=find+minimum+rotated+sorted+array+neetcode"},
          {"id": "q34", "name": "Koko Eating Bananas", "diff": "medium", "lc": "https://leetcode.com/problems/koko-eating-bananas/", "yt": "https://www.youtube.com/results?search_query=koko+eating+bananas+neetcode+leetcode"},
          {"id": "q35", "name": "Median of Two Sorted Arrays", "diff": "hard", "lc": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "yt": "https://www.youtube.com/results?search_query=median+two+sorted+arrays+neetcode"}
        ]
      },
      {
        "id": "p8",
        "name": "8. Top K Elements (Heap)",
        "badge": "b-src",
        "badgeTxt": "Search & Sort",
        "problems": [
          {"id": "q36", "name": "Kth Largest Element in a Stream", "diff": "easy", "lc": "https://leetcode.com/problems/kth-largest-element-in-a-stream/", "yt": "https://www.youtube.com/results?search_query=kth+largest+element+stream+leetcode"},
          {"id": "q37", "name": "Top K Frequent Elements", "diff": "medium", "lc": "https://leetcode.com/problems/top-k-frequent-elements/", "yt": "https://www.youtube.com/results?search_query=top+k+frequent+elements+neetcode+leetcode"},
          {"id": "q38", "name": "K Closest Points to Origin", "diff": "medium", "lc": "https://leetcode.com/problems/k-closest-points-to-origin/", "yt": "https://www.youtube.com/results?search_query=k+closest+points+to+origin+leetcode"},
          {"id": "q39", "name": "Find K Pairs with Smallest Sums", "diff": "medium", "lc": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", "yt": "https://www.youtube.com/results?search_query=find+k+pairs+smallest+sums+leetcode"},
          {"id": "q40", "name": "Find Median from Data Stream", "diff": "hard", "lc": "https://leetcode.com/problems/find-median-from-data-stream/", "yt": "https://www.youtube.com/results?search_query=find+median+from+data+stream+neetcode"}
        ]
      },
      {
        "id": "p9",
        "name": "9. K-way Merge",
        "badge": "b-src",
        "badgeTxt": "Search & Sort",
        "problems": [
          {"id": "q41", "name": "Merge Two Sorted Lists", "diff": "easy", "lc": "https://leetcode.com/problems/merge-two-sorted-lists/", "yt": "https://www.youtube.com/results?search_query=merge+two+sorted+lists+neetcode"},
          {"id": "q42", "name": "Sort List", "diff": "medium", "lc": "https://leetcode.com/problems/sort-list/", "yt": "https://www.youtube.com/results?search_query=sort+list+linked+list+neetcode+leetcode"},
          {"id": "q43", "name": "Kth Smallest Element in a Sorted Matrix", "diff": "medium", "lc": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", "yt": "https://www.youtube.com/results?search_query=kth+smallest+element+sorted+matrix+leetcode"},
          {"id": "q44", "name": "Merge K Sorted Lists", "diff": "hard", "lc": "https://leetcode.com/problems/merge-k-sorted-lists/", "yt": "https://www.youtube.com/results?search_query=merge+k+sorted+lists+neetcode+leetcode"},
          {"id": "q45", "name": "Smallest Range Covering Elements from K Lists", "diff": "hard", "lc": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", "yt": "https://www.youtube.com/results?search_query=smallest+range+covering+k+lists+leetcode"}
        ]
      },
      {
        "id": "p10",
        "name": "10. BFS (Breadth First Search)",
        "badge": "b-tre",
        "badgeTxt": "Tree & Graph",
        "problems": [
          {"id": "q46", "name": "Binary Tree Level Order Traversal", "diff": "medium", "lc": "https://leetcode.com/problems/binary-tree-level-order-traversal/", "yt": "https://www.youtube.com/results?search_query=binary+tree+level+order+traversal+neetcode"},
          {"id": "q47", "name": "Rotting Oranges", "diff": "medium", "lc": "https://leetcode.com/problems/rotting-oranges/", "yt": "https://www.youtube.com/results?search_query=rotting+oranges+neetcode+leetcode"},
          {"id": "q48", "name": "Shortest Path in Binary Matrix", "diff": "medium", "lc": "https://leetcode.com/problems/shortest-path-in-binary-matrix/", "yt": "https://www.youtube.com/results?search_query=shortest+path+binary+matrix+leetcode"},
          {"id": "q49", "name": "Word Ladder", "diff": "hard", "lc": "https://leetcode.com/problems/word-ladder/", "yt": "https://www.youtube.com/results?search_query=word+ladder+neetcode+leetcode+bfs"},
          {"id": "q50", "name": "Bus Routes", "diff": "hard", "lc": "https://leetcode.com/problems/bus-routes/", "yt": "https://www.youtube.com/results?search_query=bus-routes+leetcode+bfs"}
        ]
      },
      {
        "id": "p11",
        "name": "11. DFS (Depth First Search)",
        "badge": "b-tre",
        "badgeTxt": "Tree & Graph",
        "problems": [
          {"id": "q51", "name": "Maximum Depth of Binary Tree", "diff": "easy", "lc": "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "yt": "https://www.youtube.com/results?search_query=maximum+depth+binary+tree+leetcode"},
          {"id": "q52", "name": "Number of Islands", "diff": "medium", "lc": "https://leetcode.com/problems/number-of-islands/", "yt": "https://www.youtube.com/results?search_query=number+of+islands+neetcode+leetcode"},
          {"id": "q53", "name": "Pacific Atlantic Water Flow", "diff": "medium", "lc": "https://leetcode.com/problems/pacific-atlantic-water-flow/", "yt": "https://www.youtube.com/results?search_query=pacific+atlantic+water+flow+neetcode"},
          {"id": "q54", "name": "Path Sum II", "diff": "medium", "lc": "https://leetcode.com/problems/path-sum-ii/", "yt": "https://www.youtube.com/results?search_query=path+sum+ii+leetcode+dfs"},
          {"id": "q55", "name": "Serialize and Deserialize Binary Tree", "diff": "hard", "lc": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "yt": "https://www.youtube.com/results?search_query=serialize+deserialize+binary+tree+neetcode"}
        ]
      },
      {
        "id": "p12",
        "name": "12. Topological Sort",
        "badge": "b-tre",
        "badgeTxt": "Tree & Graph",
        "problems": [
          {"id": "q56", "name": "Course Schedule", "diff": "medium", "lc": "https://leetcode.com/problems/course-schedule/", "yt": "https://www.youtube.com/results?search_query=course+schedule+neetcode+topological+sort"},
          {"id": "q57", "name": "Course Schedule II", "diff": "medium", "lc": "https://leetcode.com/problems/course-schedule-ii/", "yt": "https://www.youtube.com/results?search_query=course+schedule+ii+neetcode+topological"},
          {"id": "q58", "name": "Find All Possible Recipes from Given Supplies", "diff": "medium", "lc": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/", "yt": "https://www.youtube.com/results?search_query=find+all+possible+recipes+given+supplies+leetcode"},
          {"id": "q59", "name": "Alien Dictionary", "diff": "hard", "lc": "https://leetcode.com/problems/alien-dictionary/", "yt": "https://www.youtube.com/results?search_query=alien+dictionary+neetcode+topological+sort"},
          {"id": "q60", "name": "Minimum Height Trees", "diff": "medium", "lc": "https://leetcode.com/problems/minimum-height-trees/", "yt": "https://www.youtube.com/results?search_query=minimum+height+trees+leetcode+neetcode"}
        ]
      }
    ]
  },
  {
    "title": "Backtracking & DP Part I",
    "desc": "Patterns 13–17 · Combinatorics, bits, and classic DP",
    "patterns": [
      {
        "id": "p13",
        "name": "13. Subsets / Backtracking",
        "badge": "b-btr",
        "badgeTxt": "Backtracking",
        "problems": [
          {"id": "q61", "name": "Subsets", "diff": "medium", "lc": "https://leetcode.com/problems/subsets/", "yt": "https://www.youtube.com/results?search_query=subsets+leetcode+neetcode+backtracking"},
          {"id": "q62", "name": "Permutations", "diff": "medium", "lc": "https://leetcode.com/problems/permutations/", "yt": "https://www.youtube.com/results?search_query=permutations+leetcode+neetcode+backtracking"},
          {"id": "q63", "name": "Combination Sum", "diff": "medium", "lc": "https://leetcode.com/problems/combination-sum/", "yt": "https://www.youtube.com/results?search_query=combination+sum+neetcode+backtracking"},
          {"id": "q64", "name": "N-Queens", "diff": "hard", "lc": "https://leetcode.com/problems/n-queens/", "yt": "https://www.youtube.com/results?search_query=n+queens+leetcode+neetcode+backtracking"},
          {"id": "q65", "name": "Sudoku Solver", "diff": "hard", "lc": "https://leetcode.com/problems/sudoku-solver/", "yt": "https://www.youtube.com/results?search_query=sudoku+solver+leetcode+backtracking"}
        ]
      },
      {
        "id": "p14",
        "name": "14. Bitwise XOR",
        "badge": "b-btr",
        "badgeTxt": "Bitwise",
        "problems": [
          {"id": "q66", "name": "Single Number", "diff": "easy", "lc": "https://leetcode.com/problems/single-number/", "yt": "https://www.youtube.com/results?search_query=single+number+xor+leetcode+neetcode"},
          {"id": "q67", "name": "Find the Difference", "diff": "easy", "lc": "https://leetcode.com/problems/find-the-difference/", "yt": "https://www.youtube.com/results?search_query=find+the+difference+leetcode+xor"},
          {"id": "q68", "name": "Single Number II", "diff": "medium", "lc": "https://leetcode.com/problems/single-number-ii/", "yt": "https://www.youtube.com/results?search_query=single+number+ii+leetcode+bit+manipulation"},
          {"id": "q69", "name": "XOR Queries of a Subarray", "diff": "medium", "lc": "https://leetcode.com/problems/xor-queries-of-a-subarray/", "yt": "https://www.youtube.com/results?search_query=xor+queries+subarray+leetcode"},
          {"id": "q70", "name": "Maximum XOR of Two Numbers in an Array", "diff": "medium", "lc": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", "yt": "https://www.youtube.com/results?search_query=maximum+xor+two+numbers+array+leetcode"}
        ]
      },
      {
        "id": "p15",
        "name": "15. DP - 0/1 Knapsack",
        "badge": "b-dp",
        "badgeTxt": "Dynamic Prog.",
        "problems": [
          {"id": "q71", "name": "Partition Equal Subset Sum", "diff": "medium", "lc": "https://leetcode.com/problems/partition-equal-subset-sum/", "yt": "https://www.youtube.com/results?search_query=partition+equal+subset+sum+neetcode+knapsack"},
          {"id": "q72", "name": "Target Sum", "diff": "medium", "lc": "https://leetcode.com/problems/target-sum/", "yt": "https://www.youtube.com/results?search_query=target+sum+neetcode+leetcode+dp"},
          {"id": "q73", "name": "Last Stone Weight II", "diff": "medium", "lc": "https://leetcode.com/problems/last-stone-weight-ii/", "yt": "https://www.youtube.com/results?search_query=last+stone+weight+ii+leetcode+dp"},
          {"id": "q74", "name": "Ones and Zeroes", "diff": "medium", "lc": "https://leetcode.com/problems/ones-and-zeroes/", "yt": "https://www.youtube.com/results?search_query=ones+and+zeroes+leetcode+knapsack+dp"},
          {"id": "q75", "name": "Count of Subsets with Given Sum", "diff": "medium", "lc": "https://leetcode.com/problems/number-of-ways-to-express-a-number-as-sum-of-powers/", "yt": "https://www.youtube.com/results?search_query=count+subsets+with+given+sum+dp+leetcode"}
        ]
      },
      {
        "id": "p16",
        "name": "16. DP - Unbounded Knapsack",
        "badge": "b-dp",
        "badgeTxt": "Dynamic Prog.",
        "problems": [
          {"id": "q76", "name": "Coin Change", "diff": "medium", "lc": "https://leetcode.com/problems/coin-change/", "yt": "https://www.youtube.com/results?search_query=coin+change+neetcode+dp+leetcode"},
          {"id": "q77", "name": "Coin Change II", "diff": "medium", "lc": "https://leetcode.com/problems/coin-change-ii/", "yt": "https://www.youtube.com/results?search_query=coin+change+ii+neetcode+dp+leetcode"},
          {"id": "q78", "name": "Perfect Squares", "diff": "medium", "lc": "https://leetcode.com/problems/perfect-squares/", "yt": "https://www.youtube.com/results?search_query=perfect+squares+leetcode+dp+neetcode"},
          {"id": "q79", "name": "Minimum Cost For Tickets", "diff": "medium", "lc": "https://leetcode.com/problems/minimum-cost-for-tickets/", "yt": "https://www.youtube.com/results?search_query=minimum+cost+tickets+leetcode+dp"},
          {"id": "q80", "name": "Cutting Ribbons", "diff": "medium", "lc": "https://leetcode.com/problems/cutting-ribbons/", "yt": "https://www.youtube.com/results?search_query=cutting+ribbons+leetcode+binary+search"}
        ]
      },
      {
        "id": "p17",
        "name": "17. DP - LCS / LIS",
        "badge": "b-dp",
        "badgeTxt": "Dynamic Prog.",
        "problems": [
          {"id": "q81", "name": "Longest Common Subsequence", "diff": "medium", "lc": "https://leetcode.com/problems/longest-common-subsequence/", "yt": "https://www.youtube.com/results?search_query=longest+common+subsequence+neetcode+dp"},
          {"id": "q82", "name": "Longest Increasing Subsequence", "diff": "medium", "lc": "https://leetcode.com/problems/longest-increasing-subsequence/", "yt": "https://www.youtube.com/results?search_query=longest+increasing+subsequence+neetcode+dp"},
          {"id": "q83", "name": "Edit Distance", "diff": "medium", "lc": "https://leetcode.com/problems/edit-distance/", "yt": "https://www.youtube.com/results?search_query=edit+distance+neetcode+dp+leetcode"},
          {"id": "q84", "name": "Distinct Subsequences", "diff": "hard", "lc": "https://leetcode.com/problems/distinct-subsequences/", "yt": "https://www.youtube.com/results?search_query=distinct+subsequences+leetcode+dp"},
          {"id": "q85", "name": "Russian Doll Envelopes", "diff": "hard", "lc": "https://leetcode.com/problems/russian-doll-envelopes/", "yt": "https://www.youtube.com/results?search_query=russian+doll+envelopes+neetcode+leetcode"}
        ]
      }
    ]
  },
  {
    "title": "DP Part II & Advanced Patterns",
    "desc": "Patterns 18–20 · Palindrome DP, interval DP, Union Find",
    "patterns": [
      {
        "id": "p18",
        "name": "18. DP - Palindromes",
        "badge": "b-dp",
        "badgeTxt": "Dynamic Prog.",
        "problems": [
          {"id": "q86", "name": "Longest Palindromic Substring", "diff": "medium", "lc": "https://leetcode.com/problems/longest-palindromic-substring/", "yt": "https://www.youtube.com/results?search_query=longest+palindromic+substring+neetcode+leetcode"},
          {"id": "q87", "name": "Palindromic Substrings", "diff": "medium", "lc": "https://leetcode.com/problems/palindromic-substrings/", "yt": "https://www.youtube.com/results?search_query=palindromic+substrings+neetcode+leetcode"},
          {"id": "q88", "name": "Longest Palindromic Subsequence", "diff": "medium", "lc": "https://leetcode.com/problems/longest-palindromic-subsequence/", "yt": "https://www.youtube.com/results?search_query=longest+palindromic+subsequence+leetcode+dp"},
          {"id": "q89", "name": "Minimum Insertions to Make String Palindrome", "diff": "medium", "lc": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", "yt": "https://www.youtube.com/results?search_query=minimum+insertions+make+string+palindrome+leetcode"},
          {"id": "q90", "name": "Palindrome Partitioning II", "diff": "hard", "lc": "https://leetcode.com/problems/palindrome-partitioning-ii/", "yt": "https://www.youtube.com/results?search_query=palindrome+partitioning+ii+neetcode+dp"}
        ]
      },
      {
        "id": "p19",
        "name": "19. DP - Matrix Chain / Interval",
        "badge": "b-dp",
        "badgeTxt": "Dynamic Prog.",
        "problems": [
          {"id": "q91", "name": "Burst Balloons", "diff": "hard", "lc": "https://leetcode.com/problems/burst-balloons/", "yt": "https://www.youtube.com/results?search_query=burst+balloons+neetcode+interval+dp"},
          {"id": "q92", "name": "Strange Printer", "diff": "hard", "lc": "https://leetcode.com/problems/strange-printer/", "yt": "https://www.youtube.com/results?search_query=strange+printer+leetcode+interval+dp"},
          {"id": "q93", "name": "Minimum Cost to Cut a Stick", "diff": "hard", "lc": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", "yt": "https://www.youtube.com/results?search_query=minimum+cost+cut+stick+leetcode+interval+dp"},
          {"id": "q94", "name": "Remove Boxes", "diff": "hard", "lc": "https://leetcode.com/problems/remove-boxes/", "yt": "https://www.youtube.com/results?search_query=remove+boxes+leetcode+dp"},
          {"id": "q95", "name": "Zuma Game", "diff": "hard", "lc": "https://leetcode.com/problems/zuma-game/", "yt": "https://www.youtube.com/results?search_query=zuma+game+leetcode+dp"}
        ]
      },
      {
        "id": "p20",
        "name": "20. Union Find (Disjoint Set)",
        "badge": "b-adv",
        "badgeTxt": "Advanced",
        "problems": [
          {"id": "q96", "name": "Number of Provinces", "diff": "medium", "lc": "https://leetcode.com/problems/number-of-provinces/", "yt": "https://www.youtube.com/results?search_query=number+of+provinces+union+find+leetcode"},
          {"id": "q97", "name": "Redundant Connection", "diff": "medium", "lc": "https://leetcode.com/problems/redundant-connection/", "yt": "https://www.youtube.com/results?search_query=redundant+connection+neetcode+union+find"},
          {"id": "q98", "name": "Accounts Merge", "diff": "medium", "lc": "https://leetcode.com/problems/accounts-merge/", "yt": "https://www.youtube.com/results?search_query=accounts+merge+union+find+leetcode+neetcode"},
          {"id": "q99", "name": "Number of Connected Components Undirected Graph", "diff": "medium", "lc": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", "yt": "https://www.youtube.com/results?search_query=number+connected+components+undirected+graph+neetcode"},
          {"id": "q100", "name": "Satisfiability of Equality Equations", "diff": "medium", "lc": "https://leetcode.com/problems/satisfiability-of-equality-equations/", "yt": "https://www.youtube.com/results?search_query=satisfiability+equality+equations+union+find+leetcode"}
        ]
      }
    ]
  }
];

const PY = {
  "q1": "class Solution:\n    def findMaxAverage(self, nums, k):\n        window = sum(nums[:k])\n        best = window\n        for i in range(k, len(nums)):\n            window += nums[i] - nums[i-k]\n            best = max(best, window)\n        return best / k",
  "q2": "class Solution:\n    def longestSubarray(self, nums):\n        left = zeros = res = 0\n        for right in range(len(nums)):\n            if nums[right] == 0:\n                zeros += 1\n            while zeros > 1:\n                if nums[left] == 0:\n                    zeros -= 1\n                left += 1\n            res = max(res, right - left)\n        return res",
  "q3": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        seen = {}\n        left = res = 0\n        for right, ch in enumerate(s):\n            if ch in seen and seen[ch] >= left:\n                left = seen[ch] + 1\n            seen[ch] = right\n            res = max(res, right - left + 1)\n        return res",
  "q4": "class Solution:\n    def minWindow(self, s, t):\n        from collections import Counter\n        need = Counter(t)\n        missing = len(t)\n        best = \"\"\n        left = 0\n        for right, ch in enumerate(s):\n            if need[ch] > 0:\n                missing -= 1\n            need[ch] -= 1\n            while missing == 0:\n                window = s[left:right+1]\n                if not best or len(window) < len(best):\n                    best = window\n                need[s[left]] += 1\n                if need[s[left]] > 0:\n                    missing += 1\n                left += 1\n        return best",
  "q5": "class Solution:\n    def maxSlidingWindow(self, nums, k):\n        from collections import deque\n        dq, res = deque(), []\n        for i, n in enumerate(nums):\n            while dq and dq[-1] < n:\n                dq.pop()\n            dq.append(n)\n            if i >= k and nums[i-k] == dq[0]:\n                dq.popleft()\n            if i >= k - 1:\n                res.append(dq[0])\n        return res",
  "q6": "class Solution:\n    def isPalindrome(self, s):\n        s = [c.lower() for c in s if c.isalnum()]\n        return s == s[::-1]",
  "q7": "class Solution:\n    def twoSum(self, numbers, target):\n        l, r = 0, len(numbers) - 1\n        while l < r:\n            s = numbers[l] + numbers[r]\n            if s == target: return [l+1, r+1]\n            elif s < target: l += 1\n            else: r -= 1",
  "q8": "class Solution:\n    def threeSum(self, nums):\n        nums.sort()\n        res = []\n        for i, n in enumerate(nums):\n            if i > 0 and n == nums[i-1]: continue\n            l, r = i+1, len(nums)-1\n            while l < r:\n                s = n + nums[l] + nums[r]\n                if s == 0:\n                    res.append([n, nums[l], nums[r]])\n                    while l < r and nums[l] == nums[l+1]: l += 1\n                    while l < r and nums[r] == nums[r-1]: r -= 1\n                    l += 1; r -= 1\n                elif s < 0: l += 1\n                else: r -= 1\n        return res",
  "q9": "class Solution:\n    def maxArea(self, height):\n        l, r = 0, len(height) - 1\n        res = 0\n        while l < r:\n            res = max(res, min(height[l], height[r]) * (r - l))\n            if height[l] < height[r]: l += 1\n            else: r -= 1\n        return res",
  "q10": "class Solution:\n    def trap(self, height):\n        l, r = 0, len(height) - 1\n        lmax = rmax = res = 0\n        while l < r:\n            if height[l] <= height[r]:\n                lmax = max(lmax, height[l])\n                res += lmax - height[l]\n                l += 1\n            else:\n                rmax = max(rmax, height[r])\n                res += rmax - height[r]\n                r -= 1\n        return res",
  "q11": "class Solution:\n    def hasCycle(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast: return True\n        return False",
  "q12": "class Solution:\n    def isHappy(self, n):\n        def sq(x):\n            s = 0\n            while x:\n                x, d = divmod(x, 10)\n                s += d * d\n            return s\n        slow = fast = n\n        while True:\n            slow = sq(slow)\n            fast = sq(sq(fast))\n            if slow == fast:\n                return slow == 1",
  "q13": "class Solution:\n    def middleNode(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        return slow",
  "q14": "class Solution:\n    def findDuplicate(self, nums):\n        slow = fast = nums[0]\n        while True:\n            slow = nums[slow]\n            fast = nums[nums[fast]]\n            if slow == fast: break\n        slow = nums[0]\n        while slow != fast:\n            slow = nums[slow]\n            fast = nums[fast]\n        return slow",
  "q15": "class Solution:\n    def detectCycle(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast:\n                slow = head\n                while slow != fast:\n                    slow = slow.next\n                    fast = fast.next\n                return slow\n        return None",
  "q16": "class Solution:\n    def merge(self, intervals):\n        intervals.sort()\n        res = [intervals[0]]\n        for s, e in intervals[1:]:\n            if s <= res[-1][1]:\n                res[-1][1] = max(res[-1][1], e)\n            else:\n                res.append([s, e])\n        return res",
  "q17": "class Solution:\n    def insert(self, intervals, newInterval):\n        res = []\n        for i, (s, e) in enumerate(intervals):\n            if newInterval[1] < s:\n                res.append(newInterval)\n                return res + intervals[i:]\n            elif newInterval[0] > e:\n                res.append([s, e])\n            else:\n                newInterval = [min(newInterval[0],s), max(newInterval[1],e)]\n        res.append(newInterval)\n        return res",
  "q18": "class Solution:\n    def eraseOverlapIntervals(self, intervals):\n        intervals.sort(key=lambda x: x[1])\n        end = float('-inf')\n        count = 0\n        for s, e in intervals:\n            if s >= end: end = e\n            else: count += 1\n        return count",
  "q19": "import heapq\nclass Solution:\n    def minMeetingRooms(self, intervals):\n        intervals.sort()\n        heap = []\n        for s, e in intervals:\n            if heap and heap[0] <= s:\n                heapq.heapreplace(heap, e)\n            else:\n                heapq.heappush(heap, e)\n        return len(heap)",
  "q20": "class Solution:\n    def employeeFreeTime(self, schedule):\n        intervals = sorted([i for emp in schedule for i in emp], key=lambda x: x.start)\n        res, prev = [], intervals[0]\n        for iv in intervals[1:]:\n            if iv.start > prev.end:\n                res.append(Interval(prev.end, iv.start))\n                prev = iv\n            elif iv.end > prev.end:\n                prev = iv\n        return res",
  "q21": "class Solution:\n    def missingNumber(self, nums):\n        i = 0\n        while i < len(nums):\n            j = nums[i]\n            if j < len(nums) and nums[i] != nums[j]:\n                nums[i], nums[j] = nums[j], nums[i]\n            else:\n                i += 1\n        for i, n in enumerate(nums):\n            if n != i: return i\n        return len(nums)",
  "q22": "class Solution:\n    def findDisappearedNumbers(self, nums):\n        i = 0\n        while i < len(nums):\n            j = nums[i] - 1\n            if nums[i] != nums[j]:\n                nums[i], nums[j] = nums[j], nums[i]\n            else:\n                i += 1\n        return [i+1 for i, n in enumerate(nums) if n != i+1]",
  "q23": "class Solution:\n    def findDuplicates(self, nums):\n        i = 0\n        while i < len(nums):\n            j = nums[i] - 1\n            if nums[i] != nums[j]:\n                nums[i], nums[j] = nums[j], nums[i]\n            else:\n                i += 1\n        return [n for i, n in enumerate(nums) if n != i+1]",
  "q24": "class Solution:\n    def findErrorNums(self, nums):\n        i = 0\n        while i < len(nums):\n            j = nums[i] - 1\n            if nums[i] != nums[j]:\n                nums[i], nums[j] = nums[j], nums[i]\n            else:\n                i += 1\n        for i, n in enumerate(nums):\n            if n != i+1: return [n, i+1]",
  "q25": "class Solution:\n    def firstMissingPositive(self, nums):\n        n = len(nums)\n        for i in range(n):\n            while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:\n                j = nums[i] - 1\n                nums[i], nums[j] = nums[j], nums[i]\n        for i in range(n):\n            if nums[i] != i+1: return i+1\n        return n+1",
  "q26": "class Solution:\n    def nextGreaterElement(self, nums1, nums2):\n        stack, nge = [], {}\n        for n in nums2:\n            while stack and stack[-1] < n:\n                nge[stack.pop()] = n\n            stack.append(n)\n        return [nge.get(n, -1) for n in nums1]",
  "q27": "class Solution:\n    def dailyTemperatures(self, temps):\n        res = [0] * len(temps)\n        stack = []\n        for i, t in enumerate(temps):\n            while stack and temps[stack[-1]] < t:\n                j = stack.pop()\n                res[j] = i - j\n            stack.append(i)\n        return res",
  "q28": "class Solution:\n    def sumSubarrayMins(self, arr):\n        MOD = 10**9 + 7\n        n = len(arr)\n        left = [0]*n; right = [0]*n; stack = []\n        for i in range(n):\n            while stack and arr[stack[-1]] >= arr[i]: stack.pop()\n            left[i] = i - (stack[-1] if stack else -1)\n            stack.append(i)\n        stack = []\n        for i in range(n-1,-1,-1):\n            while stack and arr[stack[-1]] > arr[i]: stack.pop()\n            right[i] = (stack[-1] if stack else n) - i\n            stack.append(i)\n        return sum(arr[i]*left[i]*right[i] for i in range(n)) % MOD",
  "q29": "class Solution:\n    def largestRectangleArea(self, heights):\n        stack, res = [], 0\n        for i, h in enumerate(heights + [0]):\n            start = i\n            while stack and stack[-1][1] > h:\n                idx, ht = stack.pop()\n                res = max(res, ht * (i - idx))\n                start = idx\n            stack.append((start, h))\n        return res",
  "q30": "class Solution:\n    def maximalRectangle(self, matrix):\n        if not matrix: return 0\n        n = len(matrix[0]); heights = [0]*n; res = 0\n        for row in matrix:\n            for j in range(n):\n                heights[j] = heights[j]+1 if row[j]=='1' else 0\n            stack = []\n            for i, h in enumerate(heights + [0]):\n                start = i\n                while stack and stack[-1][1] > h:\n                    idx, ht = stack.pop()\n                    res = max(res, ht*(i-idx))\n                    start = idx\n                stack.append((start, h))\n        return res",
  "q31": "class Solution:\n    def search(self, nums, target):\n        l, r = 0, len(nums)-1\n        while l <= r:\n            mid = (l+r)//2\n            if nums[mid] == target: return mid\n            elif nums[mid] < target: l = mid+1\n            else: r = mid-1\n        return -1",
  "q32": "class Solution:\n    def search(self, nums, target):\n        l, r = 0, len(nums)-1\n        while l <= r:\n            mid = (l+r)//2\n            if nums[mid] == target: return mid\n            if nums[l] <= nums[mid]:\n                if nums[l] <= target < nums[mid]: r = mid-1\n                else: l = mid+1\n            else:\n                if nums[mid] < target <= nums[r]: l = mid+1\n                else: r = mid-1\n        return -1",
  "q33": "class Solution:\n    def findMin(self, nums):\n        l, r = 0, len(nums)-1\n        while l < r:\n            mid = (l+r)//2\n            if nums[mid] > nums[r]: l = mid+1\n            else: r = mid\n        return nums[l]",
  "q34": "class Solution:\n    def minEatingSpeed(self, piles, h):\n        l, r = 1, max(piles)\n        while l < r:\n            mid = (l+r)//2\n            if sum((p+mid-1)//mid for p in piles) <= h: r = mid\n            else: l = mid+1\n        return l",
  "q35": "class Solution:\n    def findMedianSortedArrays(self, nums1, nums2):\n        if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n        m, n = len(nums1), len(nums2)\n        l, r = 0, m\n        while l <= r:\n            i = (l+r)//2; j = (m+n+1)//2 - i\n            ml = nums1[i-1] if i > 0 else float('-inf')\n            mr = nums1[i]   if i < m else float('inf')\n            nl = nums2[j-1] if j > 0 else float('-inf')\n            nr = nums2[j]   if j < n else float('inf')\n            if ml <= nr and nl <= mr:\n                if (m+n)%2: return max(ml,nl)\n                return (max(ml,nl)+min(mr,nr))/2\n            elif ml > nr: r = i-1\n            else: l = i+1",
  "q36": "import heapq\nclass KthLargest:\n    def __init__(self, k, nums):\n        self.k = k; self.heap = []\n        for n in nums: self.add(n)\n    def add(self, val):\n        heapq.heappush(self.heap, val)\n        if len(self.heap) > self.k: heapq.heappop(self.heap)\n        return self.heap[0]",
  "q37": "import heapq\nclass Solution:\n    def topKFrequent(self, nums, k):\n        from collections import Counter\n        return heapq.nlargest(k, Counter(nums), key=Counter(nums).get)",
  "q38": "import heapq\nclass Solution:\n    def kClosest(self, points, k):\n        return heapq.nsmallest(k, points, key=lambda p: p[0]**2+p[1]**2)",
  "q39": "import heapq\nclass Solution:\n    def kSmallestPairs(self, nums1, nums2, k):\n        heap = [(nums1[i]+nums2[0], i, 0) for i in range(min(k, len(nums1)))]\n        heapq.heapify(heap); res = []\n        while heap and len(res) < k:\n            val, i, j = heapq.heappop(heap)\n            res.append([nums1[i], nums2[j]])\n            if j+1 < len(nums2):\n                heapq.heappush(heap, (nums1[i]+nums2[j+1], i, j+1))\n        return res",
  "q40": "import heapq\nclass MedianFinder:\n    def __init__(self): self.lo = []; self.hi = []\n    def addNum(self, num):\n        heapq.heappush(self.lo, -num)\n        heapq.heappush(self.hi, -heapq.heappop(self.lo))\n        if len(self.hi) > len(self.lo):\n            heapq.heappush(self.lo, -heapq.heappop(self.hi))\n    def findMedian(self):\n        if len(self.lo) > len(self.hi): return -self.lo[0]\n        return (-self.lo[0] + self.hi[0]) / 2",
  "q41": "class Solution:\n    def mergeTwoLists(self, l1, l2):\n        dummy = cur = ListNode()\n        while l1 and l2:\n            if l1.val <= l2.val: cur.next = l1; l1 = l1.next\n            else: cur.next = l2; l2 = l2.next\n            cur = cur.next\n        cur.next = l1 or l2\n        return dummy.next",
  "q42": "class Solution:\n    def sortList(self, head):\n        if not head or not head.next: return head\n        slow, fast = head, head.next\n        while fast and fast.next: slow = slow.next; fast = fast.next.next\n        mid = slow.next; slow.next = None\n        l, r = self.sortList(head), self.sortList(mid)\n        dummy = cur = ListNode()\n        while l and r:\n            if l.val <= r.val: cur.next = l; l = l.next\n            else: cur.next = r; r = r.next\n            cur = cur.next\n        cur.next = l or r\n        return dummy.next",
  "q43": "import heapq\nclass Solution:\n    def kthSmallest(self, matrix, k):\n        n = len(matrix)\n        heap = [(matrix[i][0], i, 0) for i in range(n)]\n        heapq.heapify(heap)\n        for _ in range(k-1):\n            val, r, c = heapq.heappop(heap)\n            if c+1 < n: heapq.heappush(heap, (matrix[r][c+1], r, c+1))\n        return heapq.heappop(heap)[0]",
  "q44": "import heapq\nclass Solution:\n    def mergeKLists(self, lists):\n        dummy = cur = ListNode(); heap = []\n        for i, node in enumerate(lists):\n            if node: heapq.heappush(heap, (node.val, i, node))\n        while heap:\n            val, i, node = heapq.heappop(heap)\n            cur.next = node; cur = cur.next\n            if node.next: heapq.heappush(heap, (node.next.val, i, node.next))\n        return dummy.next",
  "q45": "import heapq\nclass Solution:\n    def smallestRange(self, nums):\n        heap = [(row[0], i, 0) for i, row in enumerate(nums)]\n        heapq.heapify(heap)\n        cur_max = max(row[0] for row in nums)\n        res = [heap[0][0], cur_max]\n        while True:\n            cur_min, i, j = heapq.heappop(heap)\n            if j+1 == len(nums[i]): break\n            nxt = nums[i][j+1]\n            heapq.heappush(heap, (nxt, i, j+1))\n            cur_max = max(cur_max, nxt)\n            if cur_max - heap[0][0] < res[1]-res[0]: res = [heap[0][0], cur_max]\n        return res",
  "q46": "from collections import deque\nclass Solution:\n    def levelOrder(self, root):\n        if not root: return []\n        q, res = deque([root]), []\n        while q:\n            level = []\n            for _ in range(len(q)):\n                node = q.popleft(); level.append(node.val)\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            res.append(level)\n        return res",
  "q47": "from collections import deque\nclass Solution:\n    def orangesRotting(self, grid):\n        R,C = len(grid),len(grid[0]); q = deque(); fresh = 0\n        for r in range(R):\n            for c in range(C):\n                if grid[r][c]==2: q.append((r,c,0))\n                elif grid[r][c]==1: fresh+=1\n        mins = 0\n        while q:\n            r,c,t = q.popleft()\n            for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                nr,nc = r+dr,c+dc\n                if 0<=nr<R and 0<=nc<C and grid[nr][nc]==1:\n                    grid[nr][nc]=2; fresh-=1; q.append((nr,nc,t+1)); mins=t+1\n        return mins if fresh==0 else -1",
  "q48": "from collections import deque\nclass Solution:\n    def shortestPathBinaryMatrix(self, grid):\n        n = len(grid)\n        if grid[0][0] or grid[n-1][n-1]: return -1\n        q = deque([(0,0,1)]); grid[0][0]=1\n        while q:\n            r,c,d = q.popleft()\n            if r==n-1 and c==n-1: return d\n            for dr in [-1,0,1]:\n                for dc in [-1,0,1]:\n                    nr,nc=r+dr,c+dc\n                    if 0<=nr<n and 0<=nc<n and grid[nr][nc]==0:\n                        grid[nr][nc]=1; q.append((nr,nc,d+1))\n        return -1",
  "q49": "from collections import deque\nclass Solution:\n    def ladderLength(self, beginWord, endWord, wordList):\n        wordSet = set(wordList)\n        if endWord not in wordSet: return 0\n        q = deque([(beginWord,1)])\n        while q:\n            word,steps = q.popleft()\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    nw = word[:i]+c+word[i+1:]\n                    if nw==endWord: return steps+1\n                    if nw in wordSet: wordSet.remove(nw); q.append((nw,steps+1))\n        return 0",
  "q50": "from collections import deque,defaultdict\nclass Solution:\n    def numBusesToDestination(self, routes, source, target):\n        if source==target: return 0\n        stop_routes = defaultdict(set)\n        for i,route in enumerate(routes):\n            for stop in route: stop_routes[stop].add(i)\n        vis_stops,vis_routes = {source},set()\n        q = deque([source]); buses = 0\n        while q:\n            buses += 1\n            for _ in range(len(q)):\n                stop = q.popleft()\n                for ri in stop_routes[stop]:\n                    if ri in vis_routes: continue\n                    vis_routes.add(ri)\n                    for nxt in routes[ri]:\n                        if nxt==target: return buses\n                        if nxt not in vis_stops: vis_stops.add(nxt); q.append(nxt)\n        return -1",
  "q51": "class Solution:\n    def maxDepth(self, root):\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))",
  "q52": "class Solution:\n    def numIslands(self, grid):\n        def dfs(r,c):\n            if r<0 or r>=len(grid) or c<0 or c>=len(grid[0]) or grid[r][c]!='1': return\n            grid[r][c]='0'\n            for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]: dfs(r+dr,c+dc)\n        count = 0\n        for r in range(len(grid)):\n            for c in range(len(grid[0])):\n                if grid[r][c]=='1': dfs(r,c); count+=1\n        return count",
  "q53": "class Solution:\n    def pacificAtlantic(self, heights):\n        R,C = len(heights),len(heights[0])\n        def dfs(r,c,visited,prev):\n            if (r,c) in visited or r<0 or r>=R or c<0 or c>=C or heights[r][c]<prev: return\n            visited.add((r,c))\n            for dr,dc in [(-1,0),(1,0),(0,-1),(0,1)]: dfs(r+dr,c+dc,visited,heights[r][c])\n        pac,atl = set(),set()\n        for r in range(R): dfs(r,0,pac,heights[r][0]); dfs(r,C-1,atl,heights[r][C-1])\n        for c in range(C): dfs(0,c,pac,heights[0][c]); dfs(R-1,c,atl,heights[R-1][c])\n        return [[r,c] for r in range(R) for c in range(C) if (r,c) in pac and (r,c) in atl]",
  "q54": "class Solution:\n    def pathSum(self, root, targetSum):\n        res = []\n        def dfs(node,path,rem):\n            if not node: return\n            path.append(node.val)\n            if not node.left and not node.right and rem==node.val: res.append(list(path))\n            dfs(node.left,path,rem-node.val); dfs(node.right,path,rem-node.val); path.pop()\n        dfs(root,[],targetSum); return res",
  "q55": "class Solution:\n    def serialize(self, root):\n        res=[]\n        def dfs(node):\n            if not node: res.append('N'); return\n            res.append(str(node.val)); dfs(node.left); dfs(node.right)\n        dfs(root); return ','.join(res)\n    def deserialize(self, data):\n        vals=iter(data.split(','))\n        def dfs():\n            v=next(vals)\n            if v=='N': return None\n            node=TreeNode(int(v)); node.left=dfs(); node.right=dfs(); return node\n        return dfs()",
  "q56": "class Solution:\n    def canFinish(self, n, prerequisites):\n        adj=[[] for _ in range(n)]\n        for a,b in prerequisites: adj[b].append(a)\n        vis=[0]*n\n        def dfs(u):\n            if vis[u]==1: return False\n            if vis[u]==2: return True\n            vis[u]=1\n            for v in adj[u]:\n                if not dfs(v): return False\n            vis[u]=2; return True\n        return all(dfs(i) for i in range(n))",
  "q57": "from collections import deque\nclass Solution:\n    def findOrder(self, n, prerequisites):\n        adj=[[] for _ in range(n)]; indeg=[0]*n\n        for a,b in prerequisites: adj[b].append(a); indeg[a]+=1\n        q=deque(i for i in range(n) if indeg[i]==0); order=[]\n        while q:\n            u=q.popleft(); order.append(u)\n            for v in adj[u]:\n                indeg[v]-=1\n                if indeg[v]==0: q.append(v)\n        return order if len(order)==n else []",
  "q58": "from collections import deque,defaultdict\nclass Solution:\n    def findAllRecipes(self, recipes, ingredients, supplies):\n        adj=defaultdict(list); indeg=defaultdict(int); rs=set(recipes)\n        for recipe,ingr in zip(recipes,ingredients):\n            for ing in ingr: adj[ing].append(recipe); indeg[recipe]+=1\n        q=deque(supplies); res=[]\n        while q:\n            item=q.popleft()\n            if item in rs: res.append(item)\n            for nxt in adj[item]:\n                indeg[nxt]-=1\n                if indeg[nxt]==0: q.append(nxt)\n        return res",
  "q59": "from collections import defaultdict,deque\nclass Solution:\n    def alienOrder(self, words):\n        adj=defaultdict(set); indeg={c:0 for w in words for c in w}\n        for i in range(len(words)-1):\n            w1,w2=words[i],words[i+1]; ml=min(len(w1),len(w2))\n            if len(w1)>len(w2) and w1[:ml]==w2[:ml]: return \"\"\n            for j in range(ml):\n                if w1[j]!=w2[j]:\n                    if w2[j] not in adj[w1[j]]: adj[w1[j]].add(w2[j]); indeg[w2[j]]+=1\n                    break\n        q=deque(c for c in indeg if indeg[c]==0); res=[]\n        while q:\n            c=q.popleft(); res.append(c)\n            for nb in adj[c]:\n                indeg[nb]-=1\n                if indeg[nb]==0: q.append(nb)\n        return \"\".join(res) if len(res)==len(indeg) else \"\"  ",
  "q60": "from collections import deque\nclass Solution:\n    def findMinHeightTrees(self, n, edges):\n        if n==1: return [0]\n        adj=[set() for _ in range(n)]\n        for u,v in edges: adj[u].add(v); adj[v].add(u)\n        leaves=deque(i for i in range(n) if len(adj[i])==1); remaining=n\n        while remaining>2:\n            remaining-=len(leaves); new=deque()\n            for leaf in leaves:\n                nb=adj[leaf].pop(); adj[nb].remove(leaf)\n                if len(adj[nb])==1: new.append(nb)\n            leaves=new\n        return list(leaves)",
  "q61": "class Solution:\n    def subsets(self, nums):\n        res=[[]]\n        for n in nums: res+=[sub+[n] for sub in res]\n        return res",
  "q62": "class Solution:\n    def permute(self, nums):\n        res=[]\n        def bt(path,remain):\n            if not remain: res.append(path[:]); return\n            for i in range(len(remain)):\n                path.append(remain[i]); bt(path,remain[:i]+remain[i+1:]); path.pop()\n        bt([],nums); return res",
  "q63": "class Solution:\n    def combinationSum(self, candidates, target):\n        candidates.sort(); res=[]\n        def bt(start,path,rem):\n            if rem==0: res.append(path[:]); return\n            for i in range(start,len(candidates)):\n                if candidates[i]>rem: break\n                path.append(candidates[i]); bt(i,path,rem-candidates[i]); path.pop()\n        bt(0,[],target); return res",
  "q64": "class Solution:\n    def solveNQueens(self, n):\n        res=[]; cols=set(); d1=set(); d2=set()\n        board=[['.']*n for _ in range(n)]\n        def bt(r):\n            if r==n: res.append([''.join(row) for row in board]); return\n            for c in range(n):\n                if c in cols or (r-c) in d1 or (r+c) in d2: continue\n                cols.add(c); d1.add(r-c); d2.add(r+c); board[r][c]='Q'\n                bt(r+1)\n                cols.remove(c); d1.remove(r-c); d2.remove(r+c); board[r][c]='.'\n        bt(0); return res",
  "q65": "class Solution:\n    def solveSudoku(self, board):\n        def valid(r,c,ch):\n            br,bc=3*(r//3),3*(c//3)\n            for i in range(9):\n                if board[r][i]==ch or board[i][c]==ch: return False\n                if board[br+i//3][bc+i%3]==ch: return False\n            return True\n        def solve():\n            for r in range(9):\n                for c in range(9):\n                    if board[r][c]=='.':\n                        for ch in '123456789':\n                            if valid(r,c,ch):\n                                board[r][c]=ch\n                                if solve(): return True\n                                board[r][c]='.'\n                        return False\n            return True\n        solve()",
  "q66": "class Solution:\n    def singleNumber(self, nums):\n        res=0\n        for n in nums: res^=n\n        return res",
  "q67": "class Solution:\n    def findTheDifference(self, s, t):\n        res=0\n        for c in s+t: res^=ord(c)\n        return chr(res)",
  "q68": "class Solution:\n    def singleNumber(self, nums):\n        ones=twos=0\n        for n in nums:\n            ones=(ones^n)&~twos\n            twos=(twos^n)&~ones\n        return ones",
  "q69": "class Solution:\n    def xorQueries(self, arr, queries):\n        prefix=[0]\n        for n in arr: prefix.append(prefix[-1]^n)\n        return [prefix[r+1]^prefix[l] for l,r in queries]",
  "q70": "class Solution:\n    def findMaximumXOR(self, nums):\n        res=mask=0\n        for i in range(31,-1,-1):\n            mask|=(1<<i); prefixes={n&mask for n in nums}; candidate=res|(1<<i)\n            if any(candidate^p in prefixes for p in prefixes): res=candidate\n        return res",
  "q71": "class Solution:\n    def canPartition(self, nums):\n        total=sum(nums)\n        if total%2: return False\n        target=total//2; dp={0}\n        for n in nums: dp=dp|{x+n for x in dp if x+n<=target}\n        return target in dp",
  "q72": "class Solution:\n    def findTargetSumWays(self, nums, target):\n        from collections import defaultdict\n        dp=defaultdict(int); dp[0]=1\n        for n in nums:\n            ndp=defaultdict(int)\n            for s,cnt in dp.items(): ndp[s+n]+=cnt; ndp[s-n]+=cnt\n            dp=ndp\n        return dp[target]",
  "q73": "class Solution:\n    def lastStoneWeightII(self, stones):\n        dp={0}\n        for s in stones: dp={x+s for x in dp}|{abs(x-s) for x in dp}\n        return min(dp)",
  "q74": "class Solution:\n    def findMaxForm(self, strs, m, n):\n        dp=[[0]*(n+1) for _ in range(m+1)]\n        for s in strs:\n            zeros=s.count('0'); ones=s.count('1')\n            for i in range(m,zeros-1,-1):\n                for j in range(n,ones-1,-1):\n                    dp[i][j]=max(dp[i][j],dp[i-zeros][j-ones]+1)\n        return dp[m][n]",
  "q75": "class Solution:\n    def numberOfWays(self, n, x):\n        dp=[0]*(n+1); dp[0]=1; i=1\n        while i**x<=n:\n            v=i**x\n            for j in range(n,v-1,-1): dp[j]+=dp[j-v]\n            i+=1\n        return dp[n]",
  "q76": "class Solution:\n    def coinChange(self, coins, amount):\n        dp=[float('inf')]*(amount+1); dp[0]=0\n        for i in range(1,amount+1):\n            for c in coins:\n                if c<=i: dp[i]=min(dp[i],dp[i-c]+1)\n        return dp[amount] if dp[amount]!=float('inf') else -1",
  "q77": "class Solution:\n    def change(self, amount, coins):\n        dp=[0]*(amount+1); dp[0]=1\n        for c in coins:\n            for i in range(c,amount+1): dp[i]+=dp[i-c]\n        return dp[amount]",
  "q78": "class Solution:\n    def numSquares(self, n):\n        dp=[float('inf')]*(n+1); dp[0]=0\n        for i in range(1,n+1):\n            j=1\n            while j*j<=i: dp[i]=min(dp[i],dp[i-j*j]+1); j+=1\n        return dp[n]",
  "q79": "class Solution:\n    def mincostTickets(self, days, costs):\n        day_set=set(days); dp=[0]*366\n        for i in range(1,366):\n            if i not in day_set: dp[i]=dp[i-1]; continue\n            dp[i]=min(dp[i-1]+costs[0],dp[max(0,i-7)]+costs[1],dp[max(0,i-30)]+costs[2])\n        return dp[days[-1]]",
  "q80": "class Solution:\n    def maxLength(self, ribbons, k):\n        if sum(ribbons)<k: return 0\n        l,r=1,max(ribbons)\n        while l<r:\n            mid=(l+r+1)//2\n            if sum(r//mid for r in ribbons)>=k: l=mid\n            else: r=mid-1\n        return l",
  "q81": "class Solution:\n    def longestCommonSubsequence(self, text1, text2):\n        m,n=len(text1),len(text2)\n        dp=[[0]*(n+1) for _ in range(m+1)]\n        for i in range(1,m+1):\n            for j in range(1,n+1):\n                if text1[i-1]==text2[j-1]: dp[i][j]=dp[i-1][j-1]+1\n                else: dp[i][j]=max(dp[i-1][j],dp[i][j-1])\n        return dp[m][n]",
  "q82": "class Solution:\n    def lengthOfLIS(self, nums):\n        from bisect import bisect_left\n        tails=[]\n        for n in nums:\n            i=bisect_left(tails,n)\n            if i==len(tails): tails.append(n)\n            else: tails[i]=n\n        return len(tails)",
  "q83": "class Solution:\n    def minDistance(self, word1, word2):\n        m,n=len(word1),len(word2)\n        dp=[[0]*(n+1) for _ in range(m+1)]\n        for i in range(m+1): dp[i][0]=i\n        for j in range(n+1): dp[0][j]=j\n        for i in range(1,m+1):\n            for j in range(1,n+1):\n                if word1[i-1]==word2[j-1]: dp[i][j]=dp[i-1][j-1]\n                else: dp[i][j]=1+min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])\n        return dp[m][n]",
  "q84": "class Solution:\n    def numDistinct(self, s, t):\n        m,n=len(s),len(t)\n        dp=[[0]*(n+1) for _ in range(m+1)]\n        for i in range(m+1): dp[i][0]=1\n        for i in range(1,m+1):\n            for j in range(1,n+1):\n                dp[i][j]=dp[i-1][j]\n                if s[i-1]==t[j-1]: dp[i][j]+=dp[i-1][j-1]\n        return dp[m][n]",
  "q85": "class Solution:\n    def maxEnvelopes(self, envelopes):\n        from bisect import bisect_left\n        envelopes.sort(key=lambda x:(x[0],-x[1])); tails=[]\n        for _,h in envelopes:\n            i=bisect_left(tails,h)\n            if i==len(tails): tails.append(h)\n            else: tails[i]=h\n        return len(tails)",
  "q86": "class Solution:\n    def longestPalindrome(self, s):\n        res=\"\"\n        for i in range(len(s)):\n            for l,r in [(i,i),(i,i+1)]:\n                while l>=0 and r<len(s) and s[l]==s[r]: l-=1; r+=1\n                if r-l-1>len(res): res=s[l+1:r]\n        return res",
  "q87": "class Solution:\n    def countSubstrings(self, s):\n        res=0\n        for i in range(len(s)):\n            for l,r in [(i,i),(i,i+1)]:\n                while l>=0 and r<len(s) and s[l]==s[r]: res+=1; l-=1; r+=1\n        return res",
  "q88": "class Solution:\n    def longestPalindromeSubseq(self, s):\n        n=len(s); dp=[[0]*n for _ in range(n)]\n        for i in range(n-1,-1,-1):\n            dp[i][i]=1\n            for j in range(i+1,n):\n                if s[i]==s[j]: dp[i][j]=dp[i+1][j-1]+2\n                else: dp[i][j]=max(dp[i+1][j],dp[i][j-1])\n        return dp[0][n-1]",
  "q89": "class Solution:\n    def minInsertions(self, s):\n        n=len(s); dp=[[0]*n for _ in range(n)]\n        for i in range(n-1,-1,-1):\n            for j in range(i+1,n):\n                if s[i]==s[j]: dp[i][j]=dp[i+1][j-1]\n                else: dp[i][j]=min(dp[i+1][j],dp[i][j-1])+1\n        return dp[0][n-1]",
  "q90": "class Solution:\n    def minCut(self, s):\n        n=len(s)\n        is_pal=[[False]*n for _ in range(n)]\n        for i in range(n-1,-1,-1):\n            for j in range(i,n):\n                is_pal[i][j]=(s[i]==s[j]) and (j-i<=2 or is_pal[i+1][j-1])\n        dp=list(range(-1,n))\n        for i in range(n):\n            for j in range(i+1):\n                if is_pal[j][i]: dp[i+1]=min(dp[i+1],dp[j]+1)\n        return dp[n]",
  "q91": "class Solution:\n    def maxCoins(self, nums):\n        nums=[1]+nums+[1]; n=len(nums)\n        dp=[[0]*n for _ in range(n)]\n        for length in range(2,n):\n            for l in range(0,n-length):\n                r=l+length\n                for k in range(l+1,r):\n                    dp[l][r]=max(dp[l][r],nums[l]*nums[k]*nums[r]+dp[l][k]+dp[k][r])\n        return dp[0][n-1]",
  "q92": "class Solution:\n    def strangePrinter(self, s):\n        from functools import lru_cache\n        @lru_cache(None)\n        def dp(i,j):\n            if i>j: return 0\n            res=dp(i+1,j)+1\n            for k in range(i+1,j+1):\n                if s[k]==s[i]: res=min(res,dp(i,k-1)+dp(k+1,j))\n            return res\n        return dp(0,len(s)-1)",
  "q93": "class Solution:\n    def minCost(self, n, cuts):\n        cuts=sorted([0]+cuts+[n]); m=len(cuts)\n        from functools import lru_cache\n        @lru_cache(None)\n        def dp(l,r):\n            if r-l==1: return 0\n            return cuts[r]-cuts[l]+min(dp(l,k)+dp(k,r) for k in range(l+1,r))\n        return dp(0,m-1)",
  "q94": "class Solution:\n    def removeBoxes(self, boxes):\n        from functools import lru_cache\n        @lru_cache(None)\n        def dp(l,r,k):\n            if l>r: return 0\n            while l<r and boxes[r-1]==boxes[r]: r-=1; k+=1\n            res=(k+1)**2+dp(l,r-1,0)\n            for i in range(l,r):\n                if boxes[i]==boxes[r]: res=max(res,dp(i+1,r-1,0)+dp(l,i,k+1))\n            return res\n        return dp(0,len(boxes)-1,0)",
  "q95": "class Solution:\n    def zuma(self, board):\n        from functools import lru_cache\n        @lru_cache(None)\n        def dp(s):\n            if not s: return 0\n            res=float('inf'); i=0\n            while i<len(s):\n                j=i\n                while j<len(s) and s[j]==s[i]: j+=1\n                need=max(0,3-(j-i))\n                res=min(res,need+dp(s[:i]+s[j:]))\n                i=j\n            return res\n        return dp(board)",
  "q96": "class Solution:\n    def findCircleNum(self, isConnected):\n        n=len(isConnected); parent=list(range(n))\n        def find(x): parent[x]=find(parent[x]) if parent[x]!=x else x; return parent[x]\n        def union(x,y): parent[find(x)]=find(y)\n        for i in range(n):\n            for j in range(i+1,n):\n                if isConnected[i][j]: union(i,j)\n        return len({find(i) for i in range(n)})",
  "q97": "class Solution:\n    def findRedundantConnection(self, edges):\n        parent=list(range(len(edges)+1))\n        def find(x): parent[x]=find(parent[x]) if parent[x]!=x else x; return parent[x]\n        for u,v in edges:\n            if find(u)==find(v): return [u,v]\n            parent[find(u)]=find(v)",
  "q98": "class Solution:\n    def accountsMerge(self, accounts):\n        parent={}\n        def find(x): parent.setdefault(x,x); parent[x]=find(parent[x]) if parent[x]!=x else x; return parent[x]\n        def union(x,y): parent[find(x)]=find(y)\n        email_name={}\n        for acc in accounts:\n            for email in acc[1:]: email_name[email]=acc[0]; union(acc[1],email)\n        from collections import defaultdict\n        groups=defaultdict(list)\n        for email in email_name: groups[find(email)].append(email)\n        return [[email_name[root]]+sorted(emails) for root,emails in groups.items()]",
  "q99": "class Solution:\n    def countComponents(self, n, edges):\n        parent=list(range(n))\n        def find(x): parent[x]=find(parent[x]) if parent[x]!=x else x; return parent[x]\n        def union(x,y):\n            px,py=find(x),find(y)\n            if px==py: return 0\n            parent[px]=py; return 1\n        return n-sum(union(u,v) for u,v in edges)",
  "q100": "class Solution:\n    def equationsPossible(self, equations):\n        parent=list(range(26))\n        def find(x): parent[x]=find(parent[x]) if parent[x]!=x else x; return parent[x]\n        def union(x,y): parent[find(x)]=find(y)\n        for eq in equations:\n            if eq[1]=='=': union(ord(eq[0])-97,ord(eq[3])-97)\n        return not any(eq[1]=='!' and find(ord(eq[0])-97)==find(ord(eq[3])-97) for eq in equations)"
};
