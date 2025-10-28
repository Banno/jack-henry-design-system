## @jack-henry/jh-eslint-config

Contains Jack Henry's JavaScript linting ruleset. 

## Table of Contents
1. [Arrays](#arrays)
2. [Classes, Constructors, and Accessors](#classes-constructors-and-accessors)
3. [Comparison, Operators, and Equality](#comparison-operators-and-equality)
4. [Concurrency](#concurrency)
5. [Control Statements and Flow](#control-statements-and-flow)
6. [Debuggers](#debuggers)
7. [Destructuring](#destructuring)
8. [Error Handling](#error-handling)
9. [Formatting](#formatting)
10. [Functions](#functions)
11. [Modules](#modules)
12. [Objects](#objects)
13. [Primitives](#primitives)
14. [Promises and Async](#promises-and-async)
15. [Regex](#regex)
16. [Variables](#variables)

### Arrays
- 1.1 Array Callback Return. Use return statements in array method callbacks. [ESLint: array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return).
- 1.2 No Sparse Arrays. Syntax is ambiguous; use `null` value instead. [ESLint: no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays). 

### Classes, Constructors, and Accessors
- 2.1 No Class Assign. Don't assign a new value to an existing class name. [ESLint: no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign).
- 2.2 No Dupe Class Members. Prevents silent overwrites of previous class member declarations. [ESLint: no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members). 
- 2.3 No Unused Private Class Members. Prevents presence of dead code. [ESLint: no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members).
- 2.4 Constructor Super. Causes JavaScript runtime error. [ESLint: constructor-super](https://eslint.org/docs/latest/rules/constructor-super).
- 2.5 No Constructor Return. Constructors should initialize the object, not produce a separate result. [ESLint: no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return).
- 2.6 No This Before Super. Causes a reference error. [ESLint: no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super). 
- 2.7 Getter Return. A return value is expected. [ESLint: getter-return](https://eslint.org/docs/latest/rules/getter-return).
- 2.8 No Setter Return. Return value is unnecessary as it cannot be used. [ESLint: no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return).
- 2.9 Accessor Pairs. [ESLint: accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs).

### Comparison, Operators, and Equality
- 3.1 No Compare Neg Zero. May not work as intended. Use `Object.is(x, -0)` when comparing negative zero value. [ESLint: no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero). 
- 3.2 No Cond Assign. Prevents unintentional assignments. [ESLint: no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign). 
- 3.3 No Constant Binary Expression. Prevents unintended behavior due to constant expressions. [ESLint: no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression).
- 3.4 No Constant Condition. Prevents unnecessary checks of constant conditions. [ESLint: no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition).
- 3.5 No Self Compare. Intent of self comparison is not clear; use isNaN() when testing for NaN. [ESLint: no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare).
- 3.6 No Unsafe Negation. Prevents unintentional negation. Wrap negation in parentheses for situations in which negating the left operand is intended. [ESLint: no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation). 
- 3.7 Use isNaN. Disallows comparisons of NaN. This includes the use array.indexOf(NaN) and array.lastIndexOf(NaN) methods as they utilize a strict equality comparison. [ESLint: use-isnan](https://eslint.org/docs/latest/rules/use-isnan).
- 3.8 Valid Typeof. Prevents typos when comparing typeof expressions. [ESLint: valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof).

### Concurrency
- 4.1 Require Atomic Updates. Prevents assignments that can lead to race conditions.[ESLint: require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates). 

### Control Statements and Flow
- 5.1 For Direction. Prevents infinite loops. [ESLint: for-direction](https://eslint.org/docs/latest/rules/for-direction). 
- 5.2 No Await in Loop. Refactor code to take advantage of the parallelization benefits of async/await. [ESLint: no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop). 
- 5.3 No Dupe Else If. Prevents unreachable code.[ESLint: no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if).
- 5.4 No Duplicate Case. Most likely a copied case clause. [ESLint: no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case).
- 5.5 No Fallthrough. Prevents  unintentional fallthrough of one case to the other. [ESLint: no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough).
- 5.6 No Ureachable. Prevents unaccessible code.[ESLint: no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable). 
- 5.7 No Unreachable Loop. Prevents the use of loop with only one iteration. Use `if` conditionals when only one iteration is needed. [ESLint: no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop).
- 5.8 No Unsafe Finally. Prevents the `finally` block from overwriting previous control flow statements. [ESLint: no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally).
- 5.9 Curly. Protects against logic error and increases code clarity. [ESLint: curly](https://eslint.org/docs/latest/rules/curly).

### Debuggers
- 6.1 No Debugger. Production code should not contain `debugger`. [ESLint: no-debugger](https://eslint.org/docs/latest/rules/no-debugger).

### Destructuring 
- 7.1 No Empty Pattern. Prevents patterns that have no effect. [ESLint: no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern).

### Error Handling 
- 8.1 No Ex Assign. Prevents loss of the error reference. [ESLint: no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign).

### Formatting
- 9.1 No Irregular Whitespace. Helpful for debugging. [ESLint: no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace).
- 9.2 No Unexpected Multiline. Ensures that multiline expressions are clear and unambiguous. [ESLint: no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline). 

### Functions
- 10.1 No Dupe Args. Prevents duplicate parameter from "shadowing" the preceding occurance. [ESLint: no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args).
- 10.2 No Func Assign. Prevents use of unreadable code. [ESLint: no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign). 
- 10.3 No Inner Declarations. Prevents use of `var`. [ESLint: no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations). 

### Modules
- 11.1 No Duplicate Imports. Helpful for code maintenance. [ESLint: no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports).
- 11.2 No Import Assign. Prevents runtime errors. [ESLint: no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign). 

### Objects
- 12.1 No Dupe Keys. Prevents unexpected behavior. [ESLint: no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys).
- 12.2 No Obj Calls. Prevents global objects from being called as functions. [ESLint: no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls). 
- 12.3 No Prototype Builtins. Prevents overwriting of object properties and protects against security vulnerabilities. [ESLint: no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins).

### Primitives
- 13.1 No New Native Nonconstructor. Prevents type error. [ESLint: no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor).
- 13.2 No Loss of Precision. Prevents data problems due to loss of precision. [ESLint: no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision).

### Promises and Async
- 14.1 No Async Promise Executor. Allows `Promise` to reject if an error is thrown.  [ESLint: no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor).
- 14.2 No Promise Executor Return. Prevents presence of dead code as return value cannot be used. [ESLint: no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return). 

### Regex
- 15.1 No Empty Character Class. Most likely a typing mistake. [ESLint: no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class).
- 15.2 No Invalid RegExp. Prevents `SyntaxError`. [ESLint: no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp). 
- 15.3 No Misleading Character Class. Prevents issues relating to character classes that include multiple code point characters. The `allowEscape` option enables multiple code point characters that are written using escape sequences. [ESLint: no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class).
- 15.4 No Control RegEx. Check for control character(s) is most likely unintentional. [ESLint: no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex). 

### Variables
- 16.1 No Const Assign. Prevents reassigning `const` variables. [ESLint: no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign).
- 16.2 No Self Assign. Self assignments have no effect. [ESLint: no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign). 
- 16.3 No Undef. Prevents potential `ReferenceErrors` fro misspellings of variable names and parameter names, and accidental implicit globals. [ESLint: no-undef](https://eslint.org/docs/latest/rules/no-undef).
- 16.4 No Unused Vars. Prevents unused variables, functions, and function parameters. Global properties should be assigned window object instead. [ESLint: no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars). 
- 16.5 No Use Before Define. Ensures readability. [ESLint: no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define). 