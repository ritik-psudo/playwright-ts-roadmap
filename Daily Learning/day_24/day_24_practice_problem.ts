//Practice Problem

//1. Write this small function and set a breakpoint inside the loop:

function calculateAverage(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num + 1; //added a breakpoint
  }
  return sum / numbers.length;
}

console.log(calculateAverage([4, 5, 2, 1, 6, 3, 2, 2]));

//2. Add sum and num to the Watch panel. Use Step Over (F10) repeatedly and observe sum growing with each iteration.

/*
a. sum = 0, num = 4 ;entry in the loop, assigning first value of array to num
b. sum = 4, num = 4 ;calculating sum
c. sum = 4, num = 5 ;assigning second value of array to num
d. sum = 9, num = 5 ;calculating sum
e. sum = 9, num = 2 ;assigning third value of array to num
f. sum = 11, num = 2 ;calculating sum
g. sum = 11, num = 1 ;assigning fourth value of array to num
h. sum = 12, num = 1 ;calculating sum
i. sum = 12, num = 6 ;assigning fifth value of array to num
j. sum = 18, num = 6 ;calculating sum
k. sum = 18, num = 3 ;assigning sixth value of array to num
l. sum = 21, num = 3 ;calculating sum
m. sum = 21, num = 2 ;assigning seventh value of array to num
n. sum = 23, num = 2 ;calculating sum
o. sum = 23, num = 2 ;assigning eigth value of array to num
p. sum = 25, num = 2 ;calculating sum

sum = 25, numbers.length = uncaught
numbers.length = 8
returned value: 3.125
*/

//3. Right-click your breakpoint → Edit Breakpoint → set the condition num === 30. Restart debugging — confirm it now skips straight to that iteration instead of pausing every time.

/* Directly jumps to:
a. sum = 18, num = 3 ;assigning sixth value of array to num
b. sum = 21, num = 3 ;calculating sum
c. sum = 21, num = 2 ;assigning seventh value of array to num
d. sum = 23, num = 2 ;calculating sum
e. sum = 23, num = 2 ;assigning eigth value of array to num
f. sum = 25, num = 2 ;calculating sum
*/

//4. While paused, open the Debug Console and type numbers.length — confirm it shows 8 without you having written that anywhere in your code.

//numbers.length: 8

//5. Introduce a deliberate bug — change sum += num; to sum += num + 1; — set a breakpoint, run again, and use the Variables panel to notice sum is now wrong. Practice "spotting" a bug live rather than only from wrong final output.

//sum = 33
