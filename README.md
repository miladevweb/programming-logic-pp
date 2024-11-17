Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.


### Example 1:

    Input: s = "()"
    Output: valid

### Example 2:

    Input: s = "()[]{}"
    Output: valid

### Example 3:

    Input: s = "(]"
    Output: invalid

### Example 4:

    Input: s = "([)]"
    Output: invalid

### Example 5:

    Input: s = "{[]}"
    Output: valid

<br>

## Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'
