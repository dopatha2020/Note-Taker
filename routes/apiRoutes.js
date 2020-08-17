var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
  });

  app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id "+req.params.id);
  });
};