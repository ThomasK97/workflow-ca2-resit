# workflow-ca2-resit
repo for resit workflow ca 2


## Brief

Configure the project to use Jest with Babel. Lesson 2 of Module 2 contains instructions to do this.

The lesson also contains instructions on adding TypeScript support for Jest.

You will need to create and configure a package.json file and install all necessary dependencies.

Remember to add the appropriate entries to a `.gitignore` file.

Use Parcel as the bundler.

```
parcel index.html
```

## Question 1: Typescript 1

Start with the file `question-1/question-1.js` which you should rename to have a `.ts` extension.

- Create a User interface as per the instructions.
- Convert the `createUser` function to TypeScript and make use of the User interface as the return type.

## Question 2: TypeScript 2

Start with the file `question-2/question-2.js` which you should rename to have a `.ts` extension.

- Create an enum as per the instructions.
- Create an interface as per the instructions.
- Convert the `createGame` function to TypeScript, making sure to use the interface as the parameter type.

Note: The function doesn't return a value however you still need to set a return type for the function.

## Question 3: Jest tests

Create tests for all of the functions in `question-3/question-3.js`.

## Question 4: Shopping cart TS and Jest testing

This question is based on a Shopping Cart class. You will first add the TypeScript needed then test that all of the methods work. When you write your tests, make sure that you're creating a new cart each time.

**Note:** Make sure to use the items available in `items.js` in your tests.

Start with the file `question-4/question-4.js` which you should rename to have a `.ts` extension.

### TypeScript:

- Create an Item interface as per the instructions
- Add the correct parameter and return types

### Jest testing:

Create a test file and write the following tests.

**Note:** You will need to import the shopping cart items from `items.js` so you can use them in your tests.

Write the following tests. Make sure that you create a new cart in each test (`const cart = new ShoppingCart()`):

1. Test that you can add an item to the cart: Use the `addToCart` method to add a single item, then check that methods `getCostTotal`, `getNumberOfItems` and `getCart` are all returning the correct values.
2. Test that you can add an 3 separate items to the cart: Use the `addToCart` method to add all 3 items, then check that methods `getCostTotal`, `getNumberOfItems` and `getCart` are all returning the correct values.
3. Test that you can't add the same item 3 times. Check that `getCostTotal`, `getNumberOfItems` and `getCart` are all returning the correct values.
4. Test that you can add 2 separate items with `addToCart` and then remove a single item with `removeFromCart`. Check that `getCostTotal`, `getNumberOfItems` and `getCart` are all returning the correct items.

## Question 5: new task


Find a free API. In scripts/query.js make an API call that returns an array of results. Sort the results in Alphabetical / Descending order. Loop through the results and create HTML for the results using at least 2 object properties. Attach the HTML to div.results. Style the HTML using Sass. You can write the answer to this question in either JavaScript or TypeScript.# workflow-ca2-resit
