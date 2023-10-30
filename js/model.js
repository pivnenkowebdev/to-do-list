
// get list notes or create it
const allNotes = JSON.parse(localStorage.getItem('listNotes')) || [];

if(allNotes.length > 0){
   renderAllNotes();
}

// removeNoteFromList
function removeNoteFromList(e){
   allNotes.splice(allNotes.indexOf(e.target.previousElementSibling.textContent),1)
   localStorage.setItem('listNotes',JSON.stringify(allNotes));
}

// add note in list of notes
function addItemInListNotes(){

   if(allNotes){
      allNotes.push(inputValue.value);
      localStorage.setItem('listNotes',JSON.stringify(allNotes));
   }
}
