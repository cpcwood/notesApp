function NotesController(notesModel, notesView) {
	this.notesView = notesView;
	this.notesModel = notesModel;

	this.pageSetup = function() {
		this.notesView.renderStructure();
		this.notesView.renderNewNote();
		var notes = this.notesModel.notesArray;
		this.notesView.renderNotesList(notes);
	};

  var alsoNotesController = this
 
  this.addingNoteToList = function() {
    console.log(newMessage)
    document.getElementById('newMessage').addEventListener("click", function() {
      console.log(newMessage)
      text = alsoNotesController.notesView.extractText();
      alsoNotesController.notesModel.addNote(text);
      alsoNotesController.notesView.renderNotesList(alsoNotesController.notesModel.notesArray);
      alsoNotesController.showingFullNote();
    });
  }

  this.showingFullNote = function() {
    var notesList = document.getElementsByClassName("listItem")

    var noteId = function() {
      var id = this.getAttribute('id');
      note = alsoNotesController.notesModel.returnNote(id);
      alsoNotesController.notesView.renderShowNote(note);
      document.getElementById('closeWindow').addEventListener("click", function() {
        alsoNotesController.notesView.renderCloseNote();
      });
    }

    for (var loopcounter = 0; loopcounter < notesList.length; loopcounter++) {
      notesList[loopcounter].addEventListener('click', noteId);
    }
    
  }

  // these functions run when controller is created
  this.pageSetup();
  this.addingNoteToList();
  

}
