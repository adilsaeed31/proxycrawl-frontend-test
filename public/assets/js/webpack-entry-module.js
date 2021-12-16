// webpack-load-module (autogeneraged with gulp)

window.loadModule = (moduleName) => {
switch(moduleName) {
case "pages/index.js": require("./pages/index.js"); break;
case "pages/product.js": require("./pages/product.js"); break;
default: throw new Error('Unknown module: ' + moduleName);
}
};