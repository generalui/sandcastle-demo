## Getting started

### Install

```bash
nvm use 16
git clone https://github.com/generalui/sandcastle-demo.git
cd sandcastle-demo
npm install
```

### Run demo

```bash
npm start
```

## Create XR Package

Notes:

- Current version of [xrpk (0.0.83)](https://github.com/webaverse/xrpk/issues/1) doesn't seem to be working on M1
- Version used in the pluto tutorial throws an error (missing file). I was able to fix it by modifying the following:

```bash
# node_modules/xrpk/cli.js - line 37
const getContract = () => undefined;
```

Then

```bash
npm run build-xrpk
```

## Run XR Package

```bash
Go to https://launcher.pluto.app/
upload genuisandcastledemo.wbn from the dist folder
Note: there is currently a bug with the background (dark gray disk)
```
