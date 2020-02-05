function NotesController(notesModel, notesView) {

  this.notesView = notesView
  this.notesModel = notesModel
  
  this.pageSetup = function() {
    this.notesView.renderStructure();
    this.notesView.renderNewNote();
  }



  // these functions run when controller is created
  this.pageSetup();
}


