# babel + browserify + karma testing and code coverage

Currently I managed to get a text coverage report like this:
```
----------------|-----------|-----------|-----------|-----------|
File            |   % Stmts |% Branches |   % Funcs |   % Lines |
----------------|-----------|-----------|-----------|-----------|
   src/         |     93.33 |       100 |        75 |     85.71 |
      helper.js |     85.71 |       100 |        50 |        80 |
      main.jsx  |       100 |       100 |       100 |       100 |
----------------|-----------|-----------|-----------|-----------|
All files       |     93.33 |       100 |        75 |     85.71 |
----------------|-----------|-----------|-----------|-----------|
```

Also html reports are produced.

The main karma config is based on [this comment](https://github.com/douglasduteil/isparta/issues/5#issuecomment-74692090)
