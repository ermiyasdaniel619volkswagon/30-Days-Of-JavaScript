# Higher Order Functions in JavaScript

Higher Order Functions (HOFs) are functions that **take other functions as parameters** or **return a function as a value**. The function passed as a parameter is called a **callback**.

---

## Table of Contents

1. [Callback](#callback)
2. [Returning Functions](#returning-functions)
3. [Setting Time](#setting-time)
   - [setTimeout](#settimeout)
   - [setInterval](#setinterval)
4. [Array Methods](#array-methods)
   - [forEach](#foreach)
   - [map](#map)
   - [filter](#filter)
   - [reduce](#reduce)
   - [every](#every)
   - [find](#find)
   - [findIndex](#findindex)

---

## Callback

A **callback** is a function passed as an argument to another function, which is then executed inside that function.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/Call_back.js)

---

## Returning Functions

Higher Order Functions can also **return functions** as values, allowing for more dynamic and reusable code.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/Returning_function.js)

---

## Setting Time

In JavaScript, you can execute code after a delay or repeatedly at intervals.

### setTimeout

Executes a function **once** after a specified delay.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/Setting_time.js)

### setInterval

Executes a function **repeatedly** at specified intervals.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/Setting_time.js)

---

## Array Methods

JavaScript provides several higher-order array methods that simplify array operations.

### forEach

Iterates over array elements. Takes a callback function with **element**, **index** (optional), and **array** (optional).

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/forEach.js)

### map

Iterates over array elements and **modifies them**, returning a **new array**.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/map.js)

### filter

Filters out items based on a condition, returning a **new array** with elements that satisfy the condition.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/Filter.js)

### reduce

Reduces an array to a **single value**. Callback parameters: **accumulator**, **currentValue**, and optional **initial value**.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/reduce.js)

### every

Checks if **all elements** satisfy a condition. Returns a **boolean**.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/every.js)

### find

Returns the **first element** that satisfies a condition.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/find.js)

### findIndex

Returns the **index of the first element** that satisfies a condition.

📂 [See example](https://github.com/ermiyasdaniel619volkswagon/30-Days-Of-JavaScript/09_Day_Higher_order_functions/findIndex.js)
