import { forEach } from "async"

function notesView(){


  function: renderStructure(){
    body = get by id or something
    body.append(
      `
      <header> 
        some header stuff
      </header>

      <div class='container'>

        <div class='notesList'></div>

        <div class='addNotes'></div>
      
      </div>
      
      
      
      
      `
    )
  }
  
  function: renderNotesList(notes) {
    notesContainer = document.querySelector('.notesList')
    notes.forEach(function(note){
      notesContainer.append(
        `
        <div> notes information interpolated
        `
      )
    })

  }
}
