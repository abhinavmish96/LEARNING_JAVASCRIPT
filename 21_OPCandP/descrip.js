const obj = { foo: "bar"};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

/* This exposes the three attributes of a property:
Writable
Controls whether the value of the property can be changed.
Enumerable
Controls whether the property will be included when the properties of the object are enumerated (with for...in, Object.keys, or the spread operator).
Configurable
Controls whether the property can be deleted from the object or have its attributes modified. */