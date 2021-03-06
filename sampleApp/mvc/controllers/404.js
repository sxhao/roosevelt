module.exports = function(app) {
  app.all('*', function(req, res) {
    res.status(404);
    res.render('404', {
      content: {
        appTitle: 'roosevelt sample app',
        pageTitle: 'roosevelt sample app - 404 not found'
      },
      host: req.host,
      url: req.url,
      appName: app.get('appName'),
      appVersion: app.get('package').version
    });
  });
};