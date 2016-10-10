# <%= repoName %>
> <%= moduleDescription %>

[![NPM Version][npm-img]][npm-link]
[![Licence][licence-img]][licence-link]
[![Build Status][travis-img]][travis-link]
[![Coverage Status][codecov-img]][codecov-link]
[![Dependency Status][gemnasium-img]][gemnasium-link]


## Install

```
$ npm install --save <%= moduleName %>
```


## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>';

<%= camelModuleName %>();
//=> 'Hello World'
```


## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`<br>
Default: `Hello World`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>


## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    $ <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %> --foo
```<% } %>


[npm-img]: https://img.shields.io/npm/v/<%= repoName %>.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/<%= repoName %>

[licence-img]: https://img.shields.io/npm/l/<%= repoName %>.svg?style=flat-square
[licence-link]: LICENCE.md

[travis-img]: https://img.shields.io/travis/<%= githubUsername %>/<%= repoName %>.svg?style=flat-square
[travis-link]: https://travis-ci.org/<%= githubUsername %>/<%= repoName %>

[codecov-img]: https://img.shields.io/codecov/c/github/<%= githubUsername %>/<%= repoName %>/master.svg?style=flat-square
[codecov-link]: https://codecov.io/github/<%= githubUsername %>/<%= repoName %>?branch=master

[gemnasium-img]: https://img.shields.io/gemnasium/<%= githubUsername %>/<%= repoName %>.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/github.com/<%= githubUsername %>/<%= repoName %>
