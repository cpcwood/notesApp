"use strict"

window.addEventListener("load", function() {
  // Creates new controller when webpage is opened
  window.notesController = new GameController(new notesModel, new notesView)
})
