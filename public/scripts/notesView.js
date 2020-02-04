var NotesView = function() {
	this.renderStructure = function() {
		document.body.innerHTML += `<header> 
        <div class="logoParent"><a href="index.html" title="logo"><h1><img src="images/slug.jpg"  height="60" width="60"></h1></a>
          <h1> Slug Note Adder </h1>  
        </div>
      </header>
      <div class='container'>

        <div class='notesList'>
          <h1> Lists <h1>
          <ul class="notesListLines"></ul>
          <h3> --------------- </h3>
        </div>

        <div class='addNotes'></div>
          <h1> Add a New Note </h1>
          <div class=newNoteForm></div>
      
      </div>`;
	};

	this.renderNotesList = function(notes) {
		var nLL = document.querySelector('.notesListLines');
		if (typeof notes[0] !== 'undefined') {
			notes.forEach(function(note) {
				nLL.innerHTML += `
          <li class = listItem>
            ${note.title}
          </li>
        `;
			});
		}
	};

	this.renderNewNote = function() {
		var rNN = document.querySelector('.newNoteForm');
		rNN.innerHTML = `
        <textarea id = "textarea" placeholder="Enter note here..."></textarea>
        <button id="newMessage">New</button>
      
      `;
	};
	this.extractText = function() {
		var textarea = document.getElementById('textarea');
		var text = textarea.value;
		textarea.value = '';
		return text;
	};
};
