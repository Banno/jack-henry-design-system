const comparisonOperatorsAndEquality = {
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-self-compare': 'error',
    'no-unsafe-negation': ['error', { 'enforceForOrderingRelations': true }],
    'use-isnan': ['error', {'enforceForIndexOf': true }],
    'valid-typeof': 'error',
};

export default comparisonOperatorsAndEquality;