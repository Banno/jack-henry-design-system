import arrays  from './rules/arrays.js';
import classesConstructorsAndAccessors from './rules/classes-constructors-accessors.js';
import comparisonOperatorsAndEquality from './rules/comparison-operators-and-equality.js';
import concurrency from './rules/concurrency.js';
import controlStatementsAndFlow from './rules/control-statements-and-flow.js';
import debuggers from './rules/debuggers.js';
import destructuring from './rules/destructuring.js';
import errorHandling from './rules/error-handling.js';
import formatting from './rules/formatting.js';
import functions from './rules/functions.js';
import modules from './rules/modules.js';
import objects from './rules/objects.js';
import primitives from './rules/primitives.js';
import promisesAndAsync from './rules/promises-and-async.js';
import regex from './rules/regex.js';
import variables from './rules/variables.js';
import globals from "globals";

export const jhEslintConfig = {
  rules: {
    ...arrays,
    ...classesConstructorsAndAccessors,
    ...comparisonOperatorsAndEquality,
    ...concurrency,
    ...controlStatementsAndFlow,
    ...debuggers,
    ...destructuring,
    ...errorHandling,
    ...formatting,
    ...functions,
    ...modules,
    ...objects,
    ...primitives,
    ...promisesAndAsync,
    ...regex,
    ...variables,
  },
  linterOptions: {
    noInlineConfig: true,
  },
  languageOptions: {
    //default
    ecmaVersion: 'latest',
    //default
    sourceType: 'module',
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
};