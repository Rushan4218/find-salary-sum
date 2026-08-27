# TypeScript Practice — Total Salary

## Problem

Given an array of `Person` objects, calculate and return the **total salary** of all people in the array.

You must use the `reduce()` method.

## Person Type

```ts
type Person = {
  id: number;
  name: string;
  salary: number;
};
```

## Function to Complete

Only complete this function:

```ts
const findSalarySum = (people: Person[]): number => {
  // Your code here
};
```

Do **not** modify the test cases or test runner.

## Example

### Input

```ts
[
  { id: 1, name: "Alice", salary: 50000 },
  { id: 2, name: "Bob", salary: 60000 },
  { id: 3, name: "Charlie", salary: 70000 },
  { id: 4, name: "David", salary: 80000 }
]
```

### Output

```text
260000
```

## Requirements

- Use `reduce()`.
- Return the total salary.
- The function must work for all provided test cases.
- Do not hardcode the expected results.

## Running the Test

Install dependencies:

```bash
pnpm install
```

Run the test:

```bash
pnpm dev
```

Expected output:

```text
Test Case 1: PASS
Test Case 2: PASS
Test Case 3: PASS
...
```

## Goal

Practice:

- TypeScript types
- Arrays of objects
- `reduce()`
- Callback functions
- Accumulator patterns
- Basic algorithmic thinking

**Difficulty:** Easy

**Topic:** Arrays / Reduce

**Expected Complexity:** `O(n)` time, `O(1)` auxiliary space