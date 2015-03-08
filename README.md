# babel + browserify + karma testing and code coverage (not working)

Currently I managed to get a text coverage report like this:
```
--------------------|-----------|-----------|-----------|-----------|
File                |   % Stmts |% Branches |   % Funcs |   % Lines |
--------------------|-----------|-----------|-----------|-----------|
   src/             |     93.33 |        75 |        75 |     92.31 |
      helper.js     |     85.71 |       100 |        50 |     85.71 |
      main.jsx      |       100 |        75 |       100 |       100 |
   test/            |       100 |       100 |       100 |       100 |
      main__test.js |       100 |       100 |       100 |       100 |
--------------------|-----------|-----------|-----------|-----------|
All files           |     94.44 |        75 |     83.33 |     93.75 |
--------------------|-----------|-----------|-----------|-----------|
```

There are two configs for karma. First one (karma.conf.js) produces the above report, but fails to build a html report. Second one produces both text and html reports, but the coverage is 100%, which is obviously not the case here.

------

To use the first config use:

```shell
$ npm run test
```

To use the second config use:

```shell
$ npm run alt_test
```
