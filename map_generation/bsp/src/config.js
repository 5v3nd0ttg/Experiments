System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "../jspm_modules/github/*.js",
    "npm:*": "../jspm_modules/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:core-js@0.9.13/library/modules/$.fw",
      "npm:babel-runtime@5.4.7/helpers/class-call-check",
      "npm:core-js@0.9.13/library/modules/$",
      "npm:core-js@0.9.13/library/fn/object/define-property",
      "npm:babel-runtime@5.4.7/core-js/object/define-property",
      "npm:babel-runtime@5.4.7/helpers/create-class",
      "easel"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "core-js": "npm:core-js@0.9.13",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.13": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
