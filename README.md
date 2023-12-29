# console-finances
Bootcamp Javascript challenge

### Instructions to run Jest

Jest is a Javascript test framework

1. Ensure your NodeJs is up to date
2. Otherwise f you want a `node_modules` directory in your project then navigate to project directory and run `npm init -y`
That will create the default `package.json` to configure test environment
4. `npm install jest`

Update `package.json` to configure Javascript tests

### To run tests

1. Navigate to the project directory
2. Run `jest` in command line

### However... Node uses CommonJS and Browsers use ES modules

1. `npm install @babel/core @babel/cli @babel/preset-env --save-dev`

### Troubleshooting

If you get error `Cannot find module '@babel/preset-env'` then you may need a symbolic link.
For example `mklink /D .\node_modules C:\NodeJs\node_modules`

