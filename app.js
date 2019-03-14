console.log('starting app');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const titleOption={
  describe:'title of note',
  demand: true,
  alias:'t'
};
const bodyOption={
  describe:'body of note',
  demand: true,
  alias:'t'
};

const argv=yargs
.command('add','adding a note',{
  title:titleOption,
  body:bodyOption})
.command('list','listing all note')
.command('read','read a note',{
      title:titleOption,})
.command('remove','removing a note',{
        title:titleOption,

})
.help()
.argv;
var command=argv._[0];
// console.log('Command :',command);
// console.log('process :',process.argv);
console.log('yargs :',argv);

if (command === 'add'){
  var note=notes.addNote(argv.title,argv.body);
  if (note){
console.log('node created');
    console.log('--------');
    console.log('title : ',note.title);
    console.log('body :',note.body);
  }else {
    console.log('title taken alredy');
  }
} else if(command === 'list'){
var not=notes.getAll();
console.log('PRINTING ${not.length} note(s).');
not.forEach((note) => notes.logNote(note));

}
else if(command === 'read'){
  var readNote=notes.readingNote(argv.title);

  if(readNote){
    console.log('found');
    console.log('--------');
    console.log('title : ',readNote.title);
    console.log('body :',readNote.body);
  }else{
    console.log('not found');
  }
}
else if(command === 'remove'){

  var abc=notes.getRemove(argv.title);
  var message =abc ? 'note removed':'note not found';
  console.log(message);
}
else {
  console.log('command not recoganized');
}



// var filteredArray=_.uniq(['s',1,2,3,4]);
// console.log(filteredArray);


//console.log(_.isString('anmol'));
//console.log(_.isString(true));
//var user=os.userInfo();
//var res=notes.addNote();
//console.log(res);
//var res1=notes.addNumber(2,3);
//console.log('res1',notes.addNumber(10,-8));
//console.log(user);
//fs.appendFileSync('greetings.txt','hello' + user.username +'!');
//fs.appendFileSync(`greetings.txt','Hello ${user.username}!`);
