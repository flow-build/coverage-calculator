# coverage-calculator

coverage-calculator is a plugin to analyse the history of processes of a workflow and calculate node and connection coverage.

## Installation

## Usage

```js

const { Coverage } = require('coverage-calculator')

const workflowId = //any workflowId;
const coverage = new Coverage(db);
const result = await coverage.calculateCoverage(workflowId, 50);

```

## Functions

### Worfklow

getNodesAndConections(workflowId)

List node ids and connections for the provided workflowId.

Connections are represented as strings, using the pattern '[node_id] -> [next_node_id]'

#### Input

workflowId: string, uuid

#### Output

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "nodes": {
      "type": "array"
      "items": { "type": "string" }
    },
    "connections": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```

### Process

getCount(workflowId)

Returns the amount of processes tha provided workflowId has.

#### Input

workflowId: string, uuid

#### Output

```json
{
  "type": "number"
}
```

getCountByStatus(workflowId)

Returns amount of processes tha provided workflowId has, grouped by its current status.

#### Input

workflowId: string, uuid

#### Output

```json
{
  "type": "object",
  "properties": {
    "[status]": { "type": "number" }
  }
}
```

getLatter(workflowId, amount)

Returns a list of the latest amount of processes ids from the provided workflowId.

#### Input

workflowId: string, uuid

#### Output

```json
{
  "type": "array",
  "items": { "type": "string", "format": "uuid" }
}
```

### ProcessState

getExecution(processIds)

Returns the execution history from a list of process ids.

#### Input

List of process ids.

```json
{
  "type": "array",
  "items": { "type": "string", "format": "uuid" }
}
```

#### Output

```json
{
  "type": "object",
  "properties": {
    "nodes": {
      "type": "array",
      "items": { "type": "string" }
    },
    "connections": {
      "type": "array",
      "items": { "type": "string" }
    }
}
```

### Coverage

calculateCoverage(workflowId, processCount = 20)

Calculate the node coverage and connection coverage for the provided workflow id and the amount of processes desired.

#### Input

workflowId: string, uuid
processCount: number, default `20`

#### Output

```json
{
  "type": "object",
  "properties": {
    "blueprint": { "#ref": "getNodesAndConections" },
    "history": {
      "type": "object",
      "properties": {
        "processesEvaluated": { "type": "number" },
        "nodes": {
          "type": "array",
          "items": { "type": "string" }
        },
        "connections": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "coverage": {
      "type": "object",
      "properties": {
        "nodes": {
          "type": "object",
          "properties": {
            "value": { "type": "number", "format": "decimal" },
            "uncovered": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "connections": {
          "type": "object",
          "properties": {
            "value": { "type": "number", "format": "decimal" },
            "uncovered": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        }
      }
    }
}
```
