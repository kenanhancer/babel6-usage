# babel6-usage
Babel 6.x usage

I test to debug Node.js app with babel tools. I have used babel, babel-node, babel-register(hook)

if you want to see Babel 7.x usage, check this repository (https://github.com/kenanhancer/babel7-usage.git)

## package.json
{
  "name": "babeltest1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "buildv1:src": "rm -rf dist && babel ./src -d dist -s",
    "start:buildv1": "npm run buildv1:src && node dist/index.js",

    "buildv2:src": "babel src --out-dir dist --source-maps --delete-dir-on-start",
    "start:buildv2": "npm run buildv2:src && node dist/index.js",

    "buildv3:src": "babel --no-babelrc . --out-dir dist --source-maps --delete-dir-on-start --presets=env --plugins=transform-runtime --ignore 'node_modules,dist,.babelrc,.compiled,.vscode'",
    "buildv3": "npm run buildv3:src && mv dist/src/* dist && rm -rf dist/src",
    "start:buildv3": "npm run buildv3 && node dist/index.js",

    "buildv4:src": "$(which babel) --no-babelrc src --out-dir dist --source-maps --delete-dir-on-start --presets=env --plugins=transform-runtime",
    "start:buildv4": "npm run buildv4:src && node dist/index.js",

    "buildv5:src:watch": "babel src --out-dir dist --source-maps --delete-dir-on-start --watch",
    "start:buildv5": "npm run buildv5:src:watch && node dist/index.js",

    "buildAndRunWithBabelNode": "babel-node --presets=env --plugins=transform-runtime src",

    "buildAndRunWithBabelRegister": "node --require ./node_modules/babel-register src",

    "buildAndRunWithBabelRegisterv2": "node --require babel-register src/index.js",
    
    "build": "$(which babel) --no-babelrc src --out-dir=dist --source-maps --delete-dir-on-start --presets=env --plugins=transform-runtime --copy-files",
    
    "watch": "npm run build -- --watch",
    "start": "npm run build && node --inspect dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "nodemon": "^2.0.3"
  },
  "dependencies": {}
}

## tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build-babel",
            "type": "npm",
            "script": "buildv2:src",
            "group": "build",
            "problemMatcher": []
        }
    ]
}

## launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug App with babel-node",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/src/index.js",
            "runtimeArgs": [
                "--nolazy",
                "./node_modules/.bin/babel-node"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with babel-register",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/src/index.js",
            "cwd": "${workspaceRoot}",
            "runtimeArgs": [
                "--nolazy",
                "--require",
                "babel-register"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with Nodemon and babel-register",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/nodemon",
            "program": "${workspaceRoot}/src/index.js",
            "runtimeArgs": [
                "--nolazy",
                "--require",
                "babel-register"
            ],
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        },
        {
            "name": "Debug App with babel preLaunchTask",
            "type": "node",
            "request": "launch",
            "preLaunchTask": "build-babel",
            "program": "${workspaceRoot}/src/index.js",
            "outFiles": [
                "${workspaceRoot}/dist/**"
            ],
            "console": "internalConsole",
            "internalConsoleOptions": "openOnSessionStart",
            "stopOnEntry": false
        }
    ]
}