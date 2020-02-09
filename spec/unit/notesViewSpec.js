var fakeNode = {innerHTML: "", get style() {return this}, display: ''}
var fakeDocument = {body: fakeNode, querySelector: function() {return fakeNode}}

var notesView = new NotesView(fakeDocument)

notesView.renderStructure()

describe('it renders structure', 
  expect(fakeNode.innerHTML).contains(`firstPage`)
)

fakeNode.innerHTML = ""
notesView.renderNotesList([{'id': 1, 'title': 'Im a note', 'note': 'Im a note and i need printing'}])

describe('it renders notes list', 
  expect(fakeNode.innerHTML).contains(`Im a note`)
)

fakeNode.innerHTML = ""
notesView.renderNewNote()
describe('it adds new note form to div', 
  expect(fakeNode.innerHTML).contains("textarea")
)

fakeNode.innerHTML = ""
notesView.renderShowNote([{'id': 1, 'title': 'Im a note', 'note': 'Im a note and i need printing'}])
describe('changes display property to show note', 
  expect(fakeNode.display).contains("block")
)
describe('it adds inner HTML to modal window', 
  expect(fakeNode.innerHTML).contains("modal-content")
)

fakeNode.innerHTML = ""
notesView.renderCloseNote()
describe('changes display property to hide note', 
  expect(fakeNode.display).contains("none")
)

fakeNode.value = "test-text"
describe('it returns value from textbox', 
  expect(notesView.extractText()).toEq('test-text')
)
