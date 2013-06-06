# fd-grunt-jade
Compile jade to html

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

## 编译规则

* 默认每个jade文件都会编译成html文件，除非在头部注释中出现"!!cmd:jadebuild=false"字样

## The "fd_grunt_jade" task

### Overview
In your project's Gruntfile, add a section named `fd_grunt_jade` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fd_grunt_jade: {
  }
})
```

### Options

#### options.pretty
Type: `Boolean`
Default value: `true`

编译出来的html是否格式化

#### options.charset
type: `Object`
structure: 

```
{
    form:"utf-8",//源文件编码
    to:"utf-8"//目标文件编码
}
```
文件编码,默认均为'utf-8'


> 注：因include中的jade文件，默认以utf-8编码读取，为防止中文乱码，最好以utf-8编码

### options.files
type: `Array`
structure:

```
[{
    src:"jade/**/*.jade",//源文件目录与后缀
    dest:"html/**/*.html"//目标文件目录与后缀
}]
```

### Usage Examples

#### Default Options
```js
fd_grunt_jade: {
    compile: {
        options: {
            pretty: true,
            charset:{
                from:"utf-8",
                to:"utf-8"
            }
        },
        files: [{
            src:"jade/**/*.jade",
            dest:"html/**/*.html"
        }]
    }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
