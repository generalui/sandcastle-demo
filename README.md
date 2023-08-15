# Pluto Multi App - Sandcastle

This demo is based on <https://mait.pluto.app/tutorials/sandcastle>

## Getting started

### Install

Clone this repo locally:

```sh
git clone https://github.com/generalui/sandcastle-demo.git
```

```sh
cd sandcastle-demo
```

Ensure Nodejs v16 is being used.

If using [asdf](https://github.com/asdf-vm/asdf-nodejs), there is a [`.tool-versions`](./.tool-versions) file that sets the node version.

```sh
asdf install
```

or using [nvm](https://github.com/nvm-sh/nvm)

```sh
nvm use 16
```

Install dependencies:

```sh
npm install
```

### Run demo

```sh
npm start
```

## Create XR Package

_Notes:_

- Current version of [xrpk (0.0.83)](https://github.com/webaverse/xrpk/issues/1) doesn't seem to be working on M1
- The version used in the pluto tutorial throws an error (missing file). I was able to fix it by modifying the following:

```javascript
// node_modules/xrpk/cli.js - line 37
const getContract = () => undefined;
```

Then, build the XR package (while the app is running locally):

```sh
npm run build-xrpk
```

This will begin to build the XR package. During the process, there will be prompts in the terminal:

1. ```console
    ? XR Package name:  (sandcastle-demo)
    ```

    Enter `genuisandcastledemo` and press `return`.

1. ```console
    ? XR Package Description:  (XR Package)
    ```

    Press `Enter` to accept the default.

1. ```console
    ? Package Type - hit ENTER if unsure (Use arrow keys)
    ❯ webxr-site@0.0.1
      ──────────────
      gltf@0.0.1
      ──────────────
      vrm@0.0.1
      ──────────────
      vox@0.0.1
    ```

    Press `Enter` to accept the default.

1. ```console
    ? URL entry point - hit ENTER if unsure (index.html)
    ```

    Press `Enter` to accept the default.

The XR package `genuisandcastledemo.wbn` should have been created and be available in the `./dist` folder.

## Run XR Package

1. Go to <https://launcher.pluto.app/>.

1. Click "Multi Apps".

1. Select "New Multi App (Upload)"

1. Upload `genuisandcastledemo.wbn` from the `./dist` folder.

Note: there is currently a bug with the background (dark gray disk)
