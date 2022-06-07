# blueprint-coverage-calculator

blueprint-coverage-calculator is a plugin to test a workflow and analyse its history of processes. Also this plugin calculate tests node and connection coverage. It uses Cucumber to run automated tests and builtin scripts to calculate tests coverage.

## Installation

In order to use this plugin you need to run the following command to install the required dependencies:
```
npm install --save-dev blueprint-coverage-calculator @cucumber/cucumber console-table-printer
```

## Usage

Add the following folder structure in your repository root:
```
├── tests
|   ├── features
|       ├── support
```

Then, inside the folder 'support' create three files 'steps.js', 'world.js' and 'hooks.js' with the following code inside:

```js
// world.js
const { world } = require("blueprint-coverage-calculator");
module.exports = { world };

//steps.js
const { steps } = require("blueprint-coverage-calculator")
module.exports = { steps };

// hooks.js
const { hooks } = require("blueprint-coverage-calculator")
module.exports = { hooks };
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

### Printing a coverage table on console

Having a lot of files in the folder 'coverageReport' make it difficult to read one by one to see the results. To make it easier you can add the following script on your 'package.json' file:

```json
"scripts": {
  ...
  "report": "node ./node_modules/blueprint-coverage-calculator/scripts/report.js",
  ...
}
```

And then run the following command to print the coverage table on console:

```
npm run report
```
