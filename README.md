# Minimal reproduction case for https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/648

## Steps to reproduce

1. `npm install`
2. `node_modules/.bin/webpack`
3. Notice `main.built.css` and `other.built.css` contain the same code, even though the source files are different
4. Comment out the `NamedModulesPlugin` line in `webpack.config.js`
5. `node_modules/.bin/webpack`
6. Notice `main.built.css` and `other.built.css` are now correct, containing the same code as `main.css` and `other.css` respectively
