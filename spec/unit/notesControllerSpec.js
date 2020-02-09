var fakeElement = {
  addEventListenerCalls: 0,
  addEventListener: function(){
    this.addEventListenerCalls++
  }
}
var fakeListOfElements = [fakeElement]
var fakeDocument = {
  getElementById: function(){return fakeElement},
  getElementsByClassName: function(){return fakeListOfElements}
}
var fakeNotesModel = {
  notesArray: ['test']
}
var fakeNotesView = {
  renderStructureCalls: 0,
  renderStructure: function() {
    this.renderStructureCalls++
  },
  renderNewNoteCalls: 0,
  renderNewNote: function() {
    this.renderNewNoteCalls++
  },
  renderNotesListCalls: 0,
  renderNotesList: function() {
    this.renderNotesListCalls++
  }
  
}
var notesController = new NotesController(fakeDocument, fakeNotesModel, fakeNotesView)


describe('it sets up page', 
  expect(
    (fakeNotesView.renderStructureCalls == 1 && fakeNotesView.renderNewNoteCalls == 1 && fakeNotesView.renderNotesListCalls == 1)
  ).toEq(true)
)

// addingNoteToList - static
describe('event listener added to newMessage', 
  expect(
    fakeElement.addEventListenerCalls == 1
  ).toEq(true)
)

// addingNoteToList - dynamic
var fakeNewMessage = document.createElement("div")
var fakeDocument = {
  getElementById: function(id){return fakeNewMessage},
  getElementsByClassName: function(){return []}
}

fakeNotesView.extractTextCalls = 0
fakeNotesView.extractText = function(){
  this.extractTextCalls++;
  return 'test'
}
fakeNotesModel.addNoteCalls = 0
fakeNotesModel.addNote = function(note) {
  this.addNoteCalls++
}

var notesController = new NotesController(fakeDocument, fakeNotesModel, fakeNotesView)
fakeNewMessage.click()

describe('click on new message creates new message', 
  expect(
    fakeNotesView.extractTextCalls == 1 && fakeNotesModel.addNoteCalls == 1 && fakeNotesView.renderNotesListCalls == 3  
  ).toEq(true)
)