function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // this will work fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

printNumbers2(10); // this will print 11, 11, 11, 11, 11, 11, 11, 11, 11, 11