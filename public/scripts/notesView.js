var NotesView = function() {
	this.renderStructure = function() {
		document.body.innerHTML += `<div class="firstPage"><header class="mainNav"> 
        <div class="logoParent"><a href="index.html" title="logo"><h1><img src="../images/slug.jpg"  height="60" width="60"></h1></a>
          <h2 class="pageHeader"> Slug Note Adder: "like normal notes only stickier" </h2>  
        </div>
      </header>
      <div class='columns2'>

        <div class='left'>
          <h2> Lists <h2>
          <ul class="notesListLines"></ul>
          <h3> --------------- </h3>
        </div>

        <div class='right'>
          <h2> Add a New Note </h2>
          <div class="newNoteForm"></div>
        </div>
      </div>
      </div>`;
	};

	this.renderNotesList = function(notes) {
		var nLL = document.querySelector('.notesListLines');
		if (typeof notes[0] !== 'undefined') {
			notes.forEach(function(note) {
				nLL.innerHTML += `
          <li class='listItem' id='${note.id}'>
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
