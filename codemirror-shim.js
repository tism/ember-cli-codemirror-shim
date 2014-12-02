(function() {
  /* globals define, CodeMirror */
  'use strict';

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('codemirror', { 'default': CodeMirror });
})();
