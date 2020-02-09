function NotesController(doc, notesModel, notesView) {
	this.notesView = notesView
	this.notesModel = notesModel

	this.pageSetup = function() {
		this.notesView.renderStructure()
		this.notesView.renderNewNote()
		var notes = this.notesModel.notesArray
		this.notesView.renderNotesList(notes)
	}

  var thisController = this
 
  this.addingNoteToList = function() {
    doc.getElementById('newMessage').addEventListener("click", function() {
      text = thisController.notesView.extractText()
      thisController.notesModel.addNote(text)
      thisController.notesView.renderNotesList(thisController.notesModel.notesArray)
      thisController._showingFullNote()
    })
  }

  this._showingFullNote = function() {
    var notesList = doc.getElementsByClassName("listItem")

    var noteId = function() {
      var id = this.getAttribute('id')
      note = thisController.notesModel.returnNote(id)
      thisController.notesView.renderShowNote(note)
      doc.getElementById('closeWindow').addEventListener("click", function() {
        thisController.notesView.renderCloseNote()
      })
    }

    for (var loopcounter = 0; loopcounter < notesList.length; loopcounter++) {
      notesList[loopcounter].addEventListener('click', noteId)
    }
    
  }

  // these functions run when controller is created
  this.pageSetup()
  this.addingNoteToList()
}
