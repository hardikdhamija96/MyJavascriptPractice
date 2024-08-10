# forEach Overview

- It executes provided function to each element

``` javascript
    const array1 = [1, 2, 3];

    array1.forEach((element) => console.log(2*element));

    // Expected output: 2
    // Expected output: 4
    // Expected output: 6
```

## Syntax

``` javascript
    
    forEach(callbackFn)
    forEach(callbackFn, thisArg)

```
## Paramteres

- `callbackFn` :
    - Function to execute for each element in array
    - return value is discarded
    - Function's arguments :
        - `element` : current element in array
        - `index` : index of current element
        - `array` : array over which `forEach` is calling
    
- `thisArg`
    - A value to use as `this` when executing `callbackFn`

## Return Value
- none( `undefined` )