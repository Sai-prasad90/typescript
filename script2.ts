//OOPS

//1. inheritance - To inherit properties of class
        //1.     Single Level Inheritance:
            // one superclass and one subclass.
            // The subclass inherits properties and methods from a single superclass.
            // Example: A "Dog" class inheriting from an "Animal" class.

        //2.     Multi Level Inheritance:
            // super class and one subclass
            // A chain of classes is created, where each class inherits from the class above it in the hierarchy.
            // Example: A "Labrador" class inheriting from a "Dog" class, which in turn inherits from an "Animal" class.

        //3. Hierarchical Inheritance:
            // Hierarchical inheritance involves a structure where multiple classes inherit from a common superclass.
            //one superclass and multiple subclasses 
            // Example: A "Circle" and "Square" class both inheriting from a common "Shape" class.

        //2. //  //Polymorphism
           //poly => many
          //morphism => forms

                 // boy => friend , son, brother, husband, student

                //1. overriding => different class, same method name, same signature(parameter)
                //2.overloading => same class, same method name, different signature(parameter)


// //3. abstraction
// //              Methods:

//     Abstraction involves defining and exposing methods that represent the essential behaviors of an object or function.
//     Users interact with these methods, while the underlying complexities are hidden.

// Types:

//     Abstraction often includes defining custom types (e.g., classes or object prototypes) that encapsulate data and behavior.
//     Users work with these types, relying on their defined interfaces without needing to understand the internal implementations


//4. Encapsulation
    // Encapsulation involves bundling data and methods into a single unit (e.g., a class) to control access and protect the internal state, promoting modular and secure code.
    // class Car {
    //     // The constructor initializes the object with make and model
    //     constructor(make, model) {
    //       // Private properties (encapsulation)
    //       // These properties are not directly accessible from outside the class
    //       let _make = make;
    //       let _model = model;
      
    //       // Public method (encapsulation)
    //       // This method provides controlled access to the private properties
    //       this.getMakeAndModel = function() {
    //         // Inside this method, we can access the private properties (_make and _model)
    //         // but they are not directly accessible from outside the class
    //         return `${_make} ${_model}`;
    //       };
    //     }
    //   }
      
    //   // Creating an instance of the Car class
    //   const myCar = new Car('Toyota', 'Camry');
      
    //   // Accessing the public method to get make and model
    //   console.log(myCar.getMakeAndModel());  // Output: Toyota Camry
      
    //   // Attempting to access the private property directly (will result in undefined)
    //   console.log(myCar._make);  // Output: undefined (private)
      