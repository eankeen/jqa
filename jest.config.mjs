const config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  testRegex: '(\\.|/)(test|spec)\\.(j|t)sx?$',
  globals: {
    'ts-jest': {
      packageJson: 'package.json'
    }
  }
};

// note that we set BABEL_ENV (in package.json) to
// prevent jest from loading the babel plugins and presets
// that would otherwise be loaded
if (process.env.NODE_ENV === 'test' && process.env.IS_BABEL === 'no') {
  config.preset = 'ts-jest'
}

export default config
