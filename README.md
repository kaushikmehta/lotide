# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaushikmeghta/lotide`

**Require it:**

`const _ = require('@kaushikmehta/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([...])`: take an array of items and returns the first element;
* `tail([...])`: take an array of items and returns the all but the first element;
* `middle([...])`: takes an array of elements and return the item in the middle index for odd lengths and the middle two elements for even lengths
* `assertArraysEqual([...], [...])`: checks whether two arrays are equal and logs to console.
* `assertEqual(...)`: checks whether two items are equal
* `assertObjectsEqual({...}, {...})`: checks whether two objects are equal
* `countLetters`: takes a string and return a list of unique letters and how many times they occur in the string
* `countOnly(...)`: counts the number of times a parameter occurs in a list
* `eqArrays(...)`: checks whether two arrays are equal
* `eqObjects(...)`: checks whether two objects are equal
* `findKey(...)`: finds the key of a particular item in object
* `findKeyByValue(...)`: finds the key corresponding to a particular value in object
* `flatten(...)`: take a multi-dimensional array and returns a one-dimensional array
* `letterPosition(...)`: takes a string and returns the indices of where the letter occurs
* `map(...)`: maps the elements of an array to a new array based on conditions passed
* `takeUntil(...)`: pushes elements of one array into another until a condition is met, then stops
* `without(...)`: takes a list of items and returns another list without a particular element