# filter Overview

- It creates `shallow copy` of a portion of given array 
    - creates new array
    - by filtering elements from orignal array
    - filtering is based upon function provided

- new array will include elements that passs test defined in provided function

### More about `Shallow copy` in bottom

``` javascript
    
    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter((word) => word.length > 6);
    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]

```

## Syntax

``` javascript
    filter(callbackFn)
    filter(callbackFn, thisArg)
```
## Paramteres

- `callbackFn` :
    - Function to execute for each element in array
    - returns a `truthy` value to keep elements in resulting array and `falsy` value otherwise
    - Function's arguments :
        - `element` : current element in array
        - `index` : index of current element
        - `array` : array over which `filter()` is calling
    
- `thisArg`
    - A value to use as `this` when executing `callbackFn`

## Return Value
- A shallow copy of given array containing just the elements that pass the test.
- If no element pass test, an empty array is returned.

## Shallow Copy

- A shallow copy creates new object/array that copies the top level elements of original.
- for nested objects/arrays?

    - shallow copy references the original nested elements instead of copying them

    - changes to nested elements affect both original and shallow copy.

    - changes to non-nested elements affect only shallow copy

```javascript
    let original = { name: "Hardik", details: { age: 27 } };
    let shallowCopy = { ...original };

    shallowCopy.name = "New Name";  // Affects only shallowCopy
    
    shallowCopy.details.age = 30;   // Affects both original and shallowCopy
```

## Deep Copy
- A deep copy creates a completely independent copy of original object/array, including nested elements
- changes to deep copy don not affect original and vice a versa
- deep copying is complex and often required specific method or libraries to achieve.

```javascript
    let original = { name: "Hardik", details: { age: 27 } };
    let deepCopy = JSON.parse(JSON.stringify(original));

    deepCopy.name = "New Name";  // Affects only deepCopy
    deepCopy.details.age = 30;   // Affects only deepCopy, not the original

    console.log(original);  // { name: "Hardik", details: { age: 27 } }
    console.log(deepCopy);  // { name: "New Name", details: { age: 30 } }
```
