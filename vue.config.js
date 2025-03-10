const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '^/api':{
        target: 'http://localhost:5000',
        changeOrgin:true,
        logLevel:'debug',
        pathRewrite:{'^/api':'/'},
      }
    },
  },
   publicPath: '/ToDoList/'
})
