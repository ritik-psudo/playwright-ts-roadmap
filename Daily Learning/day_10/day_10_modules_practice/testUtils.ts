/*Q1. In testUtils.ts, write and export these functions (reuse logic from Days 7-9):

isStatusSuccessful(code: number): boolean
getPassPercentage(passed: number, total: number): number
calculateAverage(numbers: number[]): number*/

export function isStatusSuccessful (code: number): boolean {
    return code>=200 && code < 300;
};

/*Q4. Pick one function from Q1 and change it to a default export instead (your choice which one) — practice both export styles in the same file.*/

export default function getPassPercentage (passed: number, total: number): number {
    return Number(((passed/total)*100).toFixed(2));
};

export function calculateAverage (numbers: number[]): number {
    let sum: number = 0;
    numbers.forEach(num => {
        sum += num;
    });

    return Number((sum/numbers.length).toFixed(2));
}

//Q2. In the same file, export a type TestCase = { name: string; status: string; duration: number }.

export type TestCase = { 
    name: string, 
    status: string, 
    duration: number
};

//Q3. Also export a constant DEFAULT_TIMEOUT: number = 5000.

export const DEFAULT_TIMEOUT: number = 5000;