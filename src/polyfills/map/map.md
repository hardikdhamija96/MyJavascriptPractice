# map Overview

- It creates new array
- it populate that array according to function provided to it

``` javascript
    
    const array1 = [1, 4, 9, 16];
    // Pass a function to map
    const map1 = array1.map((x) => x * 2);
    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]

```

## Syntax

``` javascript
    map(callbackFn)
    map(callbackFn, thisArg)
```
## Paramteres

- `callbackFn` :
    - Function to execute for each element in array
    - return value is added as single element in new array
    - Function's arguments :
        - `element` : current element in array
        - `index` : index of current element
        - `array` : array over which `map` is calling
    
- `thisArg`
    - A value to use as `this` when executing `callbackFn`

## Return Value
- A new array with each element being the result of callback function.



