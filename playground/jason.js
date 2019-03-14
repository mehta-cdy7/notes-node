// var obj = {
//   name:'anmol'
// };
//
// var pstring=JSON.stringify(obj);
// console.log(typeof pstring);
// console.log(pstring);

// var abcstring ='{"name":"anmol","age":24}';
// var person=JSON.parse(abcstring);
// console.log(typeof person);
// console.log(person);

var fs=require('fs');
var original={
  name:'andrew',
  age:34
};
var poriginal=JSON.stringify(original);
fs.writeFileSync('notes.jason',poriginal);

var noteString=fs.readFileSync('notes.jason');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.name);
