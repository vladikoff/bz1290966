define({
  suites: [],
  functionalSuites: [ 'test' ],
  excludeInstrumentation: true,
  fixSessionCapabilities: true,
  capabilities: {
    marionette: true,
    firefox_binary: '/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin'
  },
  environments: [
    { browserName: 'firefox' },
  ]
});