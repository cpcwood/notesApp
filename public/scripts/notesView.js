var NotesView = function(doc) {
	this.renderStructure = function() {
    doc.body.innerHTML += 
    `
    <div class="firstPage">
      <header class="mainNav"> 
        <div class="logo">
          <img src="../images/slug.jpg"  height="60" width="60">
        </div>
        <div class="boxText"> 
          Slug Note Adder: "like normal notes only stickier"  
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
      <div class='modal'>
        <div class='window'></div>
      </div>
     
    </div>
    `
	}

	this.renderNotesList = function(notes) {
		var notesList = doc.querySelector('.notesListLines')
		if (notes.length !== 0) {
			notesList.innerHTML = ''
			notes.forEach( function(note) {
        notesList.innerHTML += 
        `
        <li class='listItem' id='${note.id}'>
          ${note.title}
        </li>
        `
			})
		}
	};

	this.renderNewNote = function() {
		var newNoteForm = doc.querySelector('.newNoteForm')
    newNoteForm.innerHTML = 
    `
    <textarea class = "textarea" id = "textarea" placeholder="Enter note here..."></textarea>
    <button id="newMessage">New</button>
    `
	}

	this.renderShowNote = function(note) {
		var windowDiv = doc.querySelector('.window')
    windowDiv.innerHTML = 
    `
    <div class="modal-content">
      <div class="modal-header">
        ${note.id} : ${note.title}
      </div>
      <div class="modal-body">
        ${note.note}
      </div>
      <div class=modal-footer>
        <button class="close" id="closeWindow">Close</button>
      </div>
    </div>
    `
		var modal = doc.querySelector('.modal')
		modal.style.display = 'block'
	}

	this.renderCloseNote = function() {
		var modal = doc.querySelector('.modal')
		modal.style.display = 'none'
	}

	this.extractText = function() {
		var textarea = doc.querySelector('#textarea')
		var text = textarea.value
		textarea.value = ''
		return text
	}
}
