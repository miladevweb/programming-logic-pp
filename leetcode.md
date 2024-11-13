In LeetCode and other competitive programming platforms, it's essential to understand several key concepts to optimize the performance and efficiency of your solutions. Time complexity and space complexity are the most common terms you'll encounter, but there are others related to algorithmic analysis and strategy. Let’s break them down:

## 1. Time Complexity

Time complexity refers to the amount of time an algorithm takes to run as a function of the size of the input. It's usually expressed using Big O notation, which provides an upper bound on the time. The most common time complexities you’ll encounter are:

O(1): Constant time - The algorithm runs in the same amount of time regardless of the input size.

O(log n): Logarithmic time - Typically seen in binary search algorithms.

O(n): Linear time - The algorithm’s time increases linearly with the size of the input.

O(n log n): Log-linear time - Common in more efficient sorting algorithms like Merge Sort or Quick Sort.

O(n²): Quadratic time - Typical in algorithms with nested loops, like Bubble Sort.

O(2ⁿ): Exponential time - Algorithms with exponential growth, such as certain brute-force solutions.

O(n!): Factorial time - Generally seen in problems involving permutations, like the traveling salesman problem.

When you are solving LeetCode problems, optimizing time complexity is crucial because a solution that works for small inputs might not scale well to larger inputs.

<br>

## 2. Space Complexity

Space complexity refers to the amount of memory an algorithm uses relative to the size of the input. Like time complexity, space complexity is also often expressed in Big O notation.

For example:

O(1): Constant space - The algorithm uses a fixed amount of space, regardless of the input size.

O(n): Linear space - The space used grows linearly with the input size (e.g., storing a list of size n).

Reducing space complexity is important in problems where memory usage is a constraint.

<br>

## 3. Scalability

Scalability refers to how well an algorithm or system handles increasing amounts of work or input size. You want your LeetCode solutions to be scalable, meaning they should run efficiently even when the input size increases significantly.

<br>

## 4. Optimization

Optimization involves finding the most efficient solution in terms of both time and space. On LeetCode, optimization typically involves:

Choosing better algorithms (e.g., using a binary search or a hash map instead of brute-force approaches).

Reducing redundant work (e.g., using dynamic programming to store intermediate results).

Using efficient data structures (e.g., priority queues, hash tables, etc.). 5. Greedy Algorithms

Greedy algorithms make a series of decisions by picking the locally optimal solution at each step, hoping that these choices lead to the global optimum. Understanding when and how to use a greedy approach is an important skill.

<br>

## 6. Divide and Conquer

This strategy involves breaking a problem down into smaller subproblems, solving each subproblem independently, and combining the solutions. Examples include merge sort and quick sort.

<br>

## 7. Dynamic Programming (DP)

Dynamic programming is used to solve problems by breaking them down into simpler overlapping subproblems, solving each subproblem once, and storing the results to avoid redundant computations (memoization). It's typically used for optimization problems.

<br>

## 8. Backtracking

Backtracking involves trying all possible solutions and "backtracking" when a solution path doesn’t lead to a correct solution. It’s commonly used in problems like solving puzzles (e.g., Sudoku) or finding all combinations or permutations.

<br>

## 9. Sliding Window

The sliding window technique is useful for problems involving arrays or strings, where you are asked to find subarrays or substrings that satisfy certain conditions. Instead of re-examining the entire array multiple times, you move a "window" across the array, optimizing both time and space.

<br>

## 10. Two Pointers

    Two pointers is a technique often used in problems involving arrays or linked lists, where you maintain two pointers to track positions within the data structure. This is useful for problems like finding pairs in a sorted array that sum to a specific value.

<br>

## 11. Topological Sorting

    Topological sorting is used to order tasks or nodes based on their dependencies. It's typically applied in directed acyclic graphs (DAGs), where you need to process nodes in an order that respects their dependencies.

<br>

## 12. Graph Traversal

    Graph traversal involves visiting all nodes in a graph. The two most common traversal algorithms are:

BFS (Breadth-First Search): Explores nodes level by level.

DFS (Depth-First Search): Explores as far down a branch as possible before backtracking.

These algorithms are useful in solving problems related to pathfinding, graph connectivity, and network flows.

<br>

## 13. Binary Search

    Binary search is a very efficient search algorithm used to find an element in a sorted array. It works by repeatedly dividing the search interval in half, making it much faster than linear search for large datasets.

<br>

## 14. Hashing

    Hashing involves using a hash function to map data to a fixed-size table. This technique is widely used for tasks such as quick lookups, counting occurrences, and eliminating duplicates. On LeetCode, you often use hash maps (dictionaries) for fast retrieval of data.

<br>

## 15. Heap (Priority Queue)

    A heap is a special tree-based data structure that satisfies the heap property. A min-heap ensures that the smallest element is at the root, while a max-heap ensures the largest element is at the root. Heaps are useful in problems like finding the kth largest element, managing priority queues, and more.

<br>

How to Improve in LeetCode:

Master the Basic Data Structures: Arrays, strings, linked lists, stacks, queues, heaps, hash maps, and trees are the foundation of many algorithms.

Understand Core Algorithms: Sorting algorithms, search algorithms, and graph traversal techniques are crucial to solving a wide variety of problems.

Practice Patterns: Many LeetCode problems follow common patterns (e.g., sliding window, dynamic programming, two-pointer techniques). Recognizing these patterns helps you approach problems faster.

Analyze Solutions: After solving a problem, always try to analyze and improve your solution. Can you reduce time complexity or space complexity? Can you simplify your code or make it more readable?

Read Discussions and Editorials: Learning from others' solutions and understanding different approaches can give you valuable insights and improve your problem-solving skills.

Consistency is Key: Regular practice is one of the best ways to improve your problem-solving skills. Set a routine for solving problems and gradually increase the difficulty level.

Learn from Mistakes: Review the problems you get wrong. Understand why your approach didn’t work and how you can improve for next time.

By mastering these terms and techniques, you'll be well on your way to becoming proficient at solving LeetCode problems and performing well in coding interviews.

<br>
<br>

# In-place y out-of-place (data structures)

## 1. In-place:

"in-place" significa que un algoritmo o operación no utiliza memoria adicional para crear una nueva estructura de datos o arreglo. Modifica los datos directamente en el lugar donde están almacenados.

Por ejemplo, en el problema que discutimos anteriormente (removeElement), cuando se te pide que elimines elementos in-place, debes modificar el arreglo original sin crear un arreglo nuevo.

Características de los algoritmos in-place:
Espacio adicional constante (O(1)): Los algoritmos in-place requieren un espacio adicional muy pequeño, generalmente solo unas pocas variables para realizar el seguimiento o control de los índices, pero no usan estructuras de datos adicionales.
Modificación directa: Cambian los datos directamente en su ubicación original.
Ejemplo: Los algoritmos de ordenación como QuickSort y BubbleSort son in-place porque reorganizan los elementos dentro del mismo arreglo, sin usar espacio adicional significativo.

## 2. Out-of-place:

Por el contrario, "out-of-place" se refiere a operaciones que requieren espacio adicional para almacenar los resultados de la operación. Es decir, no modifican la estructura de datos original, sino que crean una nueva estructura para almacenar los resultados.

Ejemplo: Un algoritmo como MergeSort es generalmente considerado out-of-place, ya que requiere arreglos adicionales para almacenar las sublistas durante el proceso de mezcla.
