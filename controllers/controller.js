'use strict';

module.exports = {
  helloWorld: (req, res, next) => {
    res.render('index', {
      title: 'Hello World!'
    });
  }
}
