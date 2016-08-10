define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require) {
  var url = '../../index.html';

  registerSuite({
    name: 'storage',

    'clear': function () {
      return this.remote
        .get(require.toUrl(url))
        .findById('test')
        .execute(function () {
          try {
            localStorage.clear();
            sessionStorage.clear();
          } catch (e) {
            console.log('Failed to clearBrowserState');
            // if cookies are disabled, this will blow up some browsers.
          }
          return true;
        });
    }
  });
});
