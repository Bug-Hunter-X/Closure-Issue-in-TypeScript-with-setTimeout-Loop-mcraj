function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Capture the value of 'i' using an immediately invoked function expression (IIFE)
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(10); // this will print 1, 2, 3, 4, 5, 6, 7, 8, 9, 10