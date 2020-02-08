var fakeBody = {innerHTML: ""}
var fakeDocument = {body: fakeBody, querySelector: 'somenotelistlines'}

var notesView = new NotesView(fakeDocument)

notesView.renderStructure()

describe('it renders structure', 
  expect(fakeBody.innerHTML).contains(`firstPage`)
)