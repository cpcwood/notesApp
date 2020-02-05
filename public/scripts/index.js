'use strict';

window.addEventListener('load', function() {
	// Creates new controller when webpage is opened
	window.notesController = new NotesController(new NotesModel(), new NotesView());
});

