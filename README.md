# flowbuild-coverage-calculator

flowbuild-coverage-calculator is a plugin to test a workflow and analyse its history of processes. Also this plugin calculate tests node and connection coverage. It uses Cucumber to run automated tests and builtin scripts to calculate tests coverage.

## Installation

Run the following command in your terminal:
```
npm install --save-dev flowbuild-coverage-calculator
```

## Usage

Add the following folder structure in your repository root:
```
├── tests
|   ├── features
|       ├── support
```

Then, inside the folder 'support' create a file 'world.js' with the following code inside:

```js
// world.js
const { world } = require("flowbuild-coverage-calculator");

```

Finally you need to add the following variables to your .env file (the values will depend on what environment and database you are using for the tests):

```
FLOWBUILD_URL=http://localhost:3000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=workflow

// these are just examples of variables values
```

### Running cucumber automated tests

As soon as you have all the dependencies and files as above, you need to create your test file inside the 'features' folder always with the extension '.feature' and using Gherkin sintaxe. Then, run the following command: 

```
npx cucumber-js tests/features/testBlueprint.feature

// in this case 'testBlueprint.feature' is the test file created and has the same name as the blueprint (testBlueprint.json)
```

After this it will appear in the console the tests results. Besides that a file called 'worldData.json' will be created with the properties you chose to save in it. Also, inside the folder 'support' a new folder called 'coverageReports' will be created with json files. These files have the tests results coverage that you can check whenever you want.

### Publish cucumber reports quietly

And, if you don't want to publish your tests into cucumber's platform you can simply add a file on your repository root called 'cucumber.js' with the following code in it:
```js
module.exports = { default: "--publish-quiet" };
```

### Extending CustomWorld

If you need to change or add new methods on CustomWorld you can simply add in your 'world.js' file the following code:
```js
// world.js
const { world } = require("flowbuild-coverage-calculator");
const { setWorldConstructor } = require("@cucumber/cucumber");

class CustomWorld extends world.CustomWorld {
  ...
  // add your new methods here
  ...
}

setWorldConstructor(CustomWorld);
```
Note: if your methods have dependencies like 'logger', 'axios' or env variables, remember to add them at the top of your file as well.

### Adding new steps

In case you need to add new steps for your tests you can add a file called 'steps.js' in your 'support' folder and simply put your new steps in it like the example:
```js
const { Given } = require("@cucumber/cucumber");

Given("an user with claim {string} is logged in", { timeout: 60 * 1000 }, async function (claim) {
  await this.getTokenClaim(claim);
  return;
});
```
Note: this is just and example and if you use a new method, like 'this.getTokenClaim(claim)' you need to add the method inside the file 'world.js'.

### Printing a coverage table on console

Having a lot of files in the folder 'coverageReport' make it difficult to read one by one to see the results. To make it easier you can add the following script on your 'package.json' file:

```json
"scripts": {
  ...
  "report": "node ./node_modules/flowbuild-coverage-calculator/scripts/report.js",
  ...
}
```

And then run the following command to print the coverage table on console:

```
npm run report
```
