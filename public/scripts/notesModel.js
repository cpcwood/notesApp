var NotesModel = function(){
  this._notesID = 1
  this.notesArray = []

  this.addNote = function(text) {
    var id = this._notesID
    this._notesID++
    var title = text.slice(0, 20)
    var note = {'id': id, 'title': title,'note': text}
    this.notesArray.push(note)
  }

  this.returnNote = function(id) {
    var findNote = function(note) {
      return note['id'] == id 
    }
    var result = this.notesArray.find(findNote)
    return result
  }
}
