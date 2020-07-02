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

