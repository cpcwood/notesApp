function NotesController(notesModel, notesView) {

  this.notesView = notesView
  this.notesModel = notesModel
  
  this.pageSetup = function() {
    this.notesView.renderStructure();
    this.notesView.renderNewNote();
    var notes = this.notesModel.notesArray;
    this.notesView.renderNotesList(notes);
  }

    var alsoNotesController = this
 
  this.addingNoteToList = function() {
    document.getElementById('newMessage').addEventListener("click", function() {
      text = alsoNotesController.notesView.extractText();
      alsoNotesController.notesModel.addNote(text);
      alsoNotesController.notesView.renderNotesList(alsoNotesController.notesModel.notesArray);
    });

  }
  
  // these functions run when controller is created
  this.pageSetup();
  this.addingNoteToList();
}


