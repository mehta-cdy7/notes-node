console.log('starting notes.js');

const fs=require('fs');

var fetchNote= () =>{
  try{
  var notesString=fs.readFileSync('notes-data.json');
  return JSON.parse(notesString);
  }catch (e){
   return [];
   }
};

var saveNote=(notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
//console.log(module);
var addNote = (title,body) => {
var notes=fetchNote();
var note={
  title,
  body
};

var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0){
  notes.push(note);
  saveNote(notes);
  return notes;
  }
};

var getAll = () => {
  return fetchNote();
};
var readingNote = (title) => {
  var fNote=fetchNote();
  var FilteredNotes = fNote.filter((note) => note.title === title);
  return FilteredNotes[0];
};
var getRemove = (title) => {
  var fNote=fetchNote();
  var FilteredNotes = fNote.filter((note) => note.title !== title);
  saveNote(FilteredNotes);

  return  fNote.length !==FilteredNotes.length;
} ;

var logNote=(note)=> {
  console.log('--------');
  console.log('title : ',note.title);
  console.log('body :',note.body);
}

module.exports ={
   addNote,
   getAll,
   getRemove,
   readingNote,
   logNote
 };
