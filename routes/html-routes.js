// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

};