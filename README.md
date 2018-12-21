# JsCodePiece
- Useful javascript code pieces like copyref method for avoid mutate
- maybe update more and more in later

## Available Methods
- .jsonparse(val)
- .copyref(val)

## Using JsCodePiece.copyref() method
- copyref method can use both object and array.
- to avoid mutate (if you don't want to use this code, you can use spread operator, Object.assign(), array.map, array.filter, array.reduce.

### Examples

#### JSON object
```javascript
let a = {a: {d: 4}, b:2, c:3};
let b = JsCodePiece.copyref(a);
b.a.d = 10;
console.log(a); // { a: { d: 4 }, b: 2, c: 3 }
console.log(b); // { a: { d: 10 }, b: 2, c: 3 }
```

#### Array
```javascript
let c = [[2, 3], 5, 6];
let d = JsCodePiece.copyref(c);
d[0][1] = 30;
console.log(c); // [ [ 2, 3 ], 5, 6 ]
console.log(d); // [ [ 2, 30 ], 5, 6 ]
```

#### Other types
```javascript
console.log(JsCodePiece.copyref('hello'));  // return false

console.log(JsCodePiece.copyref(String('hello'))); // return false

console.log(JsCodePiece.copyref(new String('hello'))); // return 'hello'
```
