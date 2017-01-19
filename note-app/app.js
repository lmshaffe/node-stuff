const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of the Note',
  demand: true,
  alias: 'b'
}
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = process.argv[2];

switch (command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('Note added successfully');
      notes.logNote(note);
    } else {console.log('Duplicate note, please use a different title');}
    break;
  case 'list':
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {notes.logNote(note)});
    break;
  case 'read':
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('Note found');
      notes.logNote(note);
    } else {console.log(`Note with title ${argv.title} not found`)}
    break;
  case 'remove':
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `${argv.title} note removed successfully` : `${argv.title} note not found. No removal taken place`;
    console.log(message);
    break;
  default:
    log('Command not recognized');
    break;

}

function log(str) {
  return console.log(str);
}
