var NotesView = function() {
	this.renderStructure = function() {
		document.body.innerHTML += `
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
     
    </div>`;
	};

	this.renderNotesList = function(notes) {
		var nLL = document.querySelector('.notesListLines');
		if (typeof notes[0] !== 'undefined') {
			nLL.innerHTML = '';
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
        <textarea class = "textarea" id = "textarea" placeholder="Enter note here..."></textarea>
        <button id="newMessage">New</button>
      
      `;
	};

	this.renderShowNote = function(note) {
		var rSN = document.querySelector('.window');
		rSN.innerHTML = `
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
      `;
		var modal = document.querySelector('.modal');
		modal.style.display = 'block';
	};

	this.renderCloseNote = function() {
		var modal = document.querySelector('.modal');
		modal.style.display = 'none';
	};

	this.extractText = function() {
		var textarea = document.getElementById('textarea');
		var text = textarea.value;
		textarea.value = '';
		return text;
	};
};
