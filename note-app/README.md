# note-app
Playing with command line tools.

Basic node operations using file system, lodash, yargs, and other minor libraries to create a basic command line note app.

Example:

Add a note:
```bash
node app.js add -t "title" -b "body"
```
Read a note:
```bash
node app.js read -t "title"
```
Remove a note:
```bash
node app.js remove -t "title"
```
List all notes:
```bash
node app.js list
```
