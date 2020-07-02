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

