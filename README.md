You are developing a document version control system. Given an array of document versions where each version is represented as a string in the format major.minor.patch (e.g., "2.5.1"), write a function that sorts these versions in ascending order according to semantic versioning rules.

In semantic versioning, versions are compared by:

    First comparing the major versions.
    If the major versions are equal, then comparing the minor versions.
    If the minor versions are also equal, then comparing the patch versions.
    Each component (major, minor, patch) should be compared as integers, not as strings.

For example:

"2.10.1" comes after "2.2.1" because 10 > 2.

### **_Example 1:_**

Input: ["1.0.1", "2.0.0", "1.2.3", "1.0.10"]

Output: ["1.0.1", "1.0.10", "1.2.3", "2.0.0"]

Explanation:

- "1.0.1" comes first because it has the lowest major version among all equal components.
- "1.0.10" comes before "1.2.3" because 0 in the minor version is less than 2.

### **_Example 2:_**

Input: ["2.5.1", "2.10.1", "2.1.15", "2.1.2"]

Output: ["2.1.2", "2.1.15", "2.5.1", "2.10.1"]

Explanation:

- All versions have the same major version 2.
- Compare the minor versions. For instance, "2.1.x" comes before "2.5.x" and "2.10.x".
- Finally, "2.1.2" comes before "2.1.15" because 2 < 15.

## **_Requirements:_**

- The function should accept an array of version strings as input.
- Each version string will be in the format X.Y.Z, where:

        X = major version
        Y = minor version
        Z = patch version

- The function should return the sorted array of versions in ascending order.
- Let me know if you need further clarifications!
