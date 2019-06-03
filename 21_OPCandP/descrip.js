const obj = { foo: "bar"};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

/* This exposes the three attributes of a property:
Writable
Controls whether the value of the property can be changed.
Enumerable
Controls whether the property will be included when the properties of the object are enumerated (with for...in, Object.keys, or the spread operator).
Configurable
Controls whether the property can be deleted from the object or have its attributes modified. */

Object.defineProperty(obj, 'foo' , { writable: false});

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

obj.foo = 3;

/*Attempting to set a read-only property will only result in an error in strict mode. In nonstrict mode, the assignment will not be suc‐ cessful, but there will be no error.*/

