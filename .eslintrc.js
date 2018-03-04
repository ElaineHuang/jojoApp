// ********************************
//
// If you are going to change these rules,
// please make sure they stays consistent with our style guide:
// https://resumecompanion.github.io/gitbooks/taroko-frontend-bible/code-style-guideline/javascript-guide.html
//
// ********************************

module.exports = {
  'root': true,
  'env': {
    'es6': 'true',
    'browser': 'true',
    'node': 'true',
    'jest': 'true',
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'createClass': 'createClass',
      'pragma': 'React',
      'version': '15.0',
    },
  },
  'rules': {
    // References
    'prefer-const': 'warn',
    'no-var':       'error',

    // Objects
    'no-new-object':    'error',
    'object-shorthand': 'error',

    // Array
    'no-array-constructor': 'error',

    // Strings
    'quotes': [
      'error',
      'single',
    ],
    'template-curly-spacing': 'error',

    // Function
    'prefer-rest-params':          'error',
    'space-before-function-paren': 'error',
    'space-before-blocks':         'error',

    // Arrow functions
    'prefer-arrow-callback': 'error',
    'arrow-spacing':         'error',
    'arrow-parens':          'error',

    // Classes & Constructors
    'no-useless-constructor': 'error',

    // Iterators & Generators
    'generator-star-spacing': 'off',

    // Variables
    'one-var':     'off',
    'no-plusplus': 'error',

    // Comparison operators
    'eqeqeq': 'error',

    // Blocks
    'brace-style': 'error',

    // Comments
    'spaced-comment': 'error',

    // Whitespace
    'keyword-spacing':          'error',
    'space-infix-ops':          'error',
    'eol-last':                 'error',
    'newline-per-chained-call': 'off',
    'space-in-parens':          'error',
    'array-bracket-spacing':    'error',
    'object-curly-spacing':     'off',
    'indent':                   [ 'error', 2, { 'SwitchCase': 1 } ],

    // Commas
    'comma-style':  'error',
    'comma-dangle': [ 'error', 'always-multiline' ],

    // Semicolons
    'semi': [ 'error', 'always' ],

    // Naming Conventions
    'camelcase': 'off',
    'new-cap':   'off',

    // Others
    'linebreak-style': [ 'error', 'unix' ],

    // React
    'jsx-quotes':                         'error',
    'react/prefer-es6-class':             'error',
    'react/jsx-pascal-case':              'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing':           'error',
    'react/jsx-indent-props':             [ 'error', 2 ],
    'react/jsx-curly-spacing':            'error',
    'react/jsx-boolean-value':            'warn',
    'react/jsx-wrap-multilines':          'error',
    'react/jsx-no-bind':                  [ 'error', { 'ignoreRefs': true, 'allowArrowFunctions': true }],
    'react/jsx-sort-props':               'off',
    'react/jsx-tag-spacing':              [ 'error', { 'beforeSelfClosing': 'always' }],
    'react/jsx-handler-names':            'warn',
    'react/jsx-key':                      'error',
    'react/jsx-max-props-per-line':       [ 'warn', { 'maximum': 3 } ],
    'react/jsx-no-undef':                 'error',
    'react/jsx-uses-vars':                'error',
    'react/jsx-no-duplicate-props':       'error',
    'react/jsx-indent':                   [ 'error', 2 ],
    'react/no-unused-prop-types':         'warn',
    'react/no-deprecated':                'warn',
    'react/no-multi-comp':                [ 'warn', { 'ignoreStateless': true } ],
    'react/self-closing-comp':            'error',
  },
};
