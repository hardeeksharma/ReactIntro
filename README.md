
# REACT SETUP PROCESS
Run the command below in the Terminal for the project directory.
- npm install --save-dev babel-cli babel-loader babel-core babel-preset-react babel-preset-es2015 webpack

this will install all the node modules, that are required to run this project.
# HOW TO RUN THIS PROJECT

- Transpile and bundle the react file by, after this you will see a bundle.js file in APP_DIR (src) folder
  specified inside webpack config.
```sh
$ node_modules\.bin\webpack 
```

- Now Run the server.js file
```sh
$ node server.js
```

- Now open the link http://localhost:3333 and then you will see "Hello World 123" as output on the screen
