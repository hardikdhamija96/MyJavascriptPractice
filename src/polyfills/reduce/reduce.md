# reduce Overview

- It takes all the elements in the array and combines them into a single value.
    - it runs the function provided on each element
    - using result from previous element to help the next one
    

- The first time the function runs, there's no previous result, so you can provide an initial value to use.
- If you don't give an initial value, the first element of the array is used, and the function starts with the second element.



``` javascript

    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
```

## Syntax

``` javascript
    reduce(callbackFn)
    reduce(callbackFn, initialValue)
```
## Paramteres

- `callbackFn` :
    - Function provided to `reduce` that gets called for each element in array.
    - returns value becomes value of `accumulator` for next call
    - for last call, return value is the return value of `reduce`
    - Function's arguments :
        - `accumulator` : 
            - The value resulting from the previous call to callbackFn.
            - On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
        - `currentValue` : value of current element
        - `currentIndex` : index position of current value.
        - `array` : array that `reduce()` is working on
    
- `initialValue`
    - A value to which accumulator is initialized the first time callback is called.

## Return Value
- The value that results from running the "reducer" callback function to completion over the entire array.