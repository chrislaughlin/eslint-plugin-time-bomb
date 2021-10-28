# Eslint TODO time bomb 

A eslint rule that will fail after a TODO comment due date.

To install

```
npm i -D eslint-plugin-time-bomb
```

Add to eslint config

```
...
plugins: [
    "time-bomb"
]
...

rules: {
    "time-bomb/time-bomb" : ["error"],
}
```

To use:
Add a comment to your code in the following format:

```
//TODO: some sort of message - MM/DD/YYYY
```

e.g. 

```
//TODO: get some sleep - 12/29/2020
```

