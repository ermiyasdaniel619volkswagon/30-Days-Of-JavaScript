A Class is like an object constructor or "blueprint" for creating objects

Defining a classes
To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.

Class Instantiation
Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

Class methods
The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

getter
The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow

setter
The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.

Static method
The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.

Inheritance
Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.
