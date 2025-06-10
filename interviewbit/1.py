# ==================    1   =================
'''
1/ 
Given a string S, reverse the string using stack.

Example :

Input : "abc"
Return "cba"
PROBLEM APPROACH :

Complete solution in hints.
'''

class Solution:
	# @param A : string
	# @return a strings
    def reverseString(self, A):
        stack = list(A)
        reverse_str = ''.join(reversed(stack))
		
        return reverse_str


solution = Solution()
print(solution.reverseString("()[]{}"))

# 2

'''
Given an index k, return the kth row of the Pascal's triangle.
Pascal's triangle: To generate A[C] in row R, sum up A'[C] and A'[C-1] from previous row R - 1.

Example:

Input : k = 3


Return : [1,3,3,1]

Note: k is 0 based. k = 0, corresponds to the row [1]. 

Note: Could you optimize your algorithm to use only O(k) extra space?
'''

class Solution:
    # @param A : integer
    # @return a list of integers
    def getRow(self, A):
       row = [1] * (A + 1)
       
       for i in range(1, A):
           for j in range(i, 0, -1):
               row[j] += row[j - 1]
        
       return row

solution = Solution()
print(solution.getRow(3))
       
