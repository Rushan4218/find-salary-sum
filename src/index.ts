type Person = {
  id: number;
  name: string;
  salary: number;
};

// TODO: Complete this function using reduce()
const findSalarySum = (people: Person[]): number => {
  // Your code here
};

// ==================== TEST CASES ====================

const testCases = [
  {
    input: [
      { id: 1, name: "Alice", salary: 50000 },
      { id: 2, name: "Bob", salary: 60000 },
      { id: 3, name: "Charlie", salary: 70000 },
      { id: 4, name: "David", salary: 80000 },
    ],
    expected: 260000,
  },

  {
    input: [
      { id: 1, name: "John", salary: 30000 },
      { id: 2, name: "Jane", salary: 45000 },
    ],
    expected: 75000,
  },

  {
    input: [
      { id: 1, name: "Alex", salary: 100000 },
    ],
    expected: 100000,
  },

  {
    input: [
      { id: 1, name: "A", salary: 0 },
      { id: 2, name: "B", salary: 0 },
      { id: 3, name: "C", salary: 0 },
    ],
    expected: 0,
  },

  {
    input: [
      { id: 1, name: "Alice", salary: 12500 },
      { id: 2, name: "Bob", salary: 23750 },
      { id: 3, name: "Charlie", salary: 18900 },
      { id: 4, name: "David", salary: 32100 },
      { id: 5, name: "Eve", salary: 15750 },
    ],
    expected: 103000,
  },

  {
    input: [
      { id: 1, name: "Mike", salary: 5000 },
      { id: 2, name: "Sarah", salary: 15000 },
      { id: 3, name: "Tom", salary: 25000 },
      { id: 4, name: "Emma", salary: 35000 },
      { id: 5, name: "James", salary: 45000 },
    ],
    expected: 125000,
  },
];

// ==================== TEST RUNNER ====================

testCases.forEach((testCase, index) => {
  const result = findSalarySum(testCase.input);

  console.log(
    `Test Case ${index + 1}:`,
    result === testCase.expected ? "PASS" : "FAIL",
    `| Expected: ${testCase.expected}`,
    `| Got: ${result}`,
  );
});