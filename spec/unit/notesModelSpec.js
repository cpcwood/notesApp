var notesModel = new NotesModel

describe('it starts with a blank notes array', 
  expect(notesModel.notesArray.length).toEq(0)
)

notesModel.addNote('First note and its a really good note, good note')

describe('Adds a note to the notes array', 
  expect(notesModel.notesArray[0]['note']).toEq('First note and its a really good note, good note')
)

describe('Notes object has ID of 1', 
  expect(notesModel.notesArray[0]['id']).toEq(1)
)

describe('Notes object has title of 20 charaters', 
  expect(notesModel.notesArray[0]['title']).toEq('First note and its a')
)

notesModel.addNote('Another note')

describe('ID squentially increments by 1', 
  expect(notesModel.notesArray[1]['id']).toEq(2)
)