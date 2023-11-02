export default class Model{

   constructor(){
      this.allNotes = [];
      this.loadFromStorage();
   }

   loadFromStorage(){
      const data = localStorage.getItem('listNotes');
      if(data){
         this.allNotes = JSON.parse(data);
      }
   }

   saveLocalStorage(){
      localStorage.setItem('listNotes',JSON.stringify(this.allNotes));
   }

   addNote(text){
      this.allNotes.push(text);
      this.saveLocalStorage();
      return text;
   }

   removeNoteFromList(index) {
      const noteIndex = this.allNotes.indexOf(index);
      if (noteIndex !== -1) {
         this.allNotes.splice(noteIndex, 1);
         this.saveLocalStorage();
      }
   }

}

