# This Chapter focuses on the different components of Objects Property Configuration and Proxies

### Here are some of my learnings you might find intersting

#### Accessor Properties: Getters and Setters

- There are two types of object properties : *data* and *accessor* properties
- *accessor* properties are similar to function properties except they have *two* functions - a *getter* and a *setter*, when accessed they act more like a data property than a function
- If the property is assigned to, then the *setter* is called (with the assign‐ ment value being passed in as the first argument), and if the property is evaluated, the *getter* is called.
- *setter* and *getter* can work without each other.

#### Object Property Attributes

- There is no guarantee of order of properties in an object
- 