function NotesController(notesModel, notesView) {
	this.notesView = notesView;
	this.notesModel = notesModel;

	this.pageSetup = function() {
		this.notesView.renderStructure();
		this.notesView.renderNewNote();
		var notes = this.notesModel.notesArray;
		this.notesView.renderNotesList(notes);
	};

	self = this;

	this.addingNoteToList = function() {
		document.getElementById('newMessage').addEventListener('click', function() {
			var text = self.notesView.extractText();
			self.notesModel.addNote(text);
			self.notesView.renderNotesList(self.notesModel.notesArray);
		});
	};

	// these functions run when controller is created
	this.pageSetup();
	this.addingNoteToList();
}
