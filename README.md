# Projeto Webpack com Typescript, Sourcemaps, Hot Module Replacement, Mocha Tests


### Configurando o Mocha para testes


adicione os módulos do npm:  
`npm install mocha chai --save-dev`  
`npm install --save-dev @babel/core babel-loader @babel/preset-env`  
`npm install --save-dev source-map-support`  
`npm install ts-node @types/chai @types/mocha --save-dev`

no **webpack.config.js** é necessário adicionar as configurações para o bundler de testes.  
também tem que adicionar configuração de source-map e passar isso como parâmetro ao executar o mocha.  
o babel precisa transpilar para código ES5  

adicione o módulo ts-loader no **webpack.config.js**:  
```javascript
let rentCarPath = __dirname + "/src/rent-a-car.ts";
let nearestStoresPath = __dirname + "/src/nearest-stores.ts";
let entryPath = { rentCar: rentCarPath, nearestStores: nearestStoresPath };
let outFilename = "[name].bundle.js";
let outputPath = { filename: outFilename, path: __dirname + "/dist/" };

if (process.env.TESTBUILD) {
    entryPath = glob.sync(__dirname + "/test/**/*.spec.ts");
    outputPath = { path : __dirname + "/test-dist/" };
}
...
    entry: entryPath,
    output: outputPath,
...
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
```

**package.json**
```javascript
  "scripts": {
    "test": "TESTBUILD=true webpack && mocha -r ts-node/register test/**/*.spec.ts && rm -rf test-dist/*",
```

### Configurando o TypeScript

instale os módulos:  
`npm install --save-dev ts-loader typescript`

adicione o módulo ts-loader no **webpack.config.js**:  
```javascript
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
        ]
    },
```

### Debug de Typescript


arquivo **.vscode/launch.json**

```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": true,
            "trace": true,
            "sourceMapPathOverrides": {
                "webpack:///./*": "${webRoot}/dist/*"
            }
        }
    ]
}
```

**webpack.config.js**  
`devtool: 'source-map',`

### Configurando o Hot Module Replacement

é um plugin que roda com o webpack-dev-server.

`npm install webpack-dev-server --save-dev` 


**Hot Module Replacement (or HMR)** allows all kinds of modules to be updated at runtime **without the need for a full refresh.**  

HMR is not intended for use in production, meaning it should only be used in development.


**webpack.config.js**  
```javascript
   devServer: {
     hot: true,
    },
```
ou alterar o dev-server na chamada do webpack:  
`webpack-dev-server --hotOnly`  

