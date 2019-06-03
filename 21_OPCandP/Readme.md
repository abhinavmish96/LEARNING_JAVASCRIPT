# This Chapter focuses on the different components of Objects Property Configuration and Proxies

### Here are some of my learnings you might find intersting

#### Accessor Properties: Getters and Setters

- There are two types of object properties : *data* and *accessor* properties
- *accessor* properties are similar to function properties except they have *two* functions - a *getter* and a *setter*, when accessed they act more like a data property than a function
- If the property is assigned to, then the *setter* is called (with the assign‐ ment value being passed in as the first argument), and if the property is evaluated, the *getter* is called.
- *setter* and *getter* can work without each other.

#### Object Property Attributes

- There is no guarantee of order of properties in an object

#### Protecting Objects

- JavaScript does provide three mechanisms for preventing unintentional modifications (and making intentional ones more difficult): *freezing*, *sealing*, and *preventing* extension.
- **Freezing** prevents any changes to an object. Once you freeze an object, you cannot:
• Set the value of properties on the object.
• Call methods that modify the value of properties on the object.
• Invoke setters on the object (that modify the value of properties on the object).
• Add new properties.
• Add new methods.
• Change the configuration of existing properties or methods.
- **Sealing** an object prevents the addition of new properties, or the reconfiguration or removal of existing properties. Sealing can be used when you have an instance of a class, as methods that operate on the object’s properties will still work (as long as they’re not attempting to reconfigure a property). You can seal an object with Object.seal, and tell if an object is sealed by calling Object.isSealed
- **Preventing**, the weakest protection, making an object nonextensible, only prevents new properties from being added. Properties can be assigned to, deleted, and reconfig‐ ured