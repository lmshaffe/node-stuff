const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(err) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
    //reminder es6 let's us do this if names are the same
  }
  //since only one statement in the callback, don't need curly.
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();
  var requestedNote = notes.filter((note) => note.title === title);
  return requestedNote[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length
}

var logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  //addNote: addNote ES6 let's us do the above if property is identical to value variable
  getAll,
  getNote,
  removeNote,
  logNote
}



module.exports.add = (a,b) => {
  return a+b;
}
